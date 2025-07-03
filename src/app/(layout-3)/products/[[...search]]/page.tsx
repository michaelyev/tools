import SearchResult from "./SearchResult";
import Container from "@component/Container";
import FlexBox from "@component/FlexBox";
import Pagination from "@component/pagination";
import { SemiSpan } from "@component/Typography";
import { getProducts } from "@utils/data_fetch/allTools";
import { getProductSeoContent } from "@utils/data_fetch/product_seo-page";
import { Metadata } from "next";
import MarkdownRenderer from "@component/markdown/MarkdonwnRenderer";
import { getCoordsFromLocation } from "@utils/location_fetch/location_fetch";
import { findSeoUrl } from "@utils/data_fetch/get_seo_url";

type ProductSearchResultProps = {
  params: {
    search?: string[]; // array of [category, subcategory, subSubcategory]
  };
  searchParams?: {
    query?: string;
    page?: string;
    email?: string;
    lat?: string;
    lng?: string;
    radius?: string;
    timeRange?: string;
    startDate?: string;
    endDate?: string;
  };
};

export async function generateMetadata({ params }: ProductSearchResultProps): Promise<Metadata> {
  const pathname = `/products/${(params.search || []).join("/")}`;
  const seoContent = await getProductSeoContent(pathname);

  if (!seoContent) {
    return {
      title: "Products",
    };
  }

  return {
    title: seoContent.title,
    description: seoContent.description,
  };
}

export default async function ProductSearchResult({
  params,
  searchParams,
}: ProductSearchResultProps) {
  const currentPage = Number(searchParams?.page) || 1;
  const query = searchParams?.query || "";
  const searchSegments = params.search || [];

  let category: string | undefined;
  let subCategory: string | undefined;
  let subSubCategory: string | undefined;
  let lat = searchParams?.lat ? parseFloat(searchParams.lat) : undefined;
  let lng = searchParams?.lng ? parseFloat(searchParams.lng) : undefined;
  let pathname = `/${searchSegments.join("/")}`;

  // Check if the current URL slug matches a predefined SEO URL
  const seoMatch = findSeoUrl(searchSegments.join("/"));

  if (seoMatch) {
    // If it's an SEO URL, use the details from the match
    category = seoMatch.category;
    pathname = seoMatch.url;

    // We need to parse state and city from the matched URL to get coordinates
    const urlParts = seoMatch.url.split('/').filter(Boolean);
    const locationIndex = urlParts.findIndex(part => part.length === 2);
    if (locationIndex !== -1 && urlParts.length > locationIndex + 1) {
      const state = urlParts[locationIndex];
      const city = urlParts[locationIndex + 1];
      const coords = await getCoordsFromLocation({ city, state });
      if (coords) {
        lat = coords.lat;
        lng = coords.lng;
      }
    }
  } else {
    // Fallback to the original logic for non-SEO URLs
    [category, subCategory, subSubCategory] = searchSegments;
  }

  const [products, seoContent] = await Promise.all([
    getProducts({
      page: currentPage,
      category,
      subCategory,
      subSubcategory: subSubCategory,
      q: query,
      lat,
      lng,
      radius: searchParams?.radius ? parseFloat(searchParams.radius) : undefined,
      timeRange: searchParams?.timeRange,
      startDate: searchParams?.startDate,
      endDate: searchParams?.endDate,
    }),
    getProductSeoContent(pathname),
  ]);

  return (
    <Container py="20px">
      {seoContent?.h1 && <h1 style={{ marginBottom: "1rem" }}>{seoContent.h1}</h1>}
      

      <SearchResult sortOptions={sortOptions} products={products} />
      <FlexBox
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        mt="32px"
      >
        <SemiSpan>
          Showing 1-{products.length} of {products.total} products
        </SemiSpan>
        <Pagination pageCount={Math.ceil(products.total / 12)} />
      </FlexBox>
      {seoContent?.markdown && (
        <div style={{ marginBottom: "2rem" }}>
          <MarkdownRenderer content={seoContent.markdown} />
        </div>
      )}
    </Container>
  );
}

const sortOptions = [
  { label: "Relevance", value: "Relevance" },
  { label: "Date", value: "Date" },
  { label: "Price Low to High", value: "Price Low to High" },
  { label: "Price High to Low", value: "Price High to Low" },
];
