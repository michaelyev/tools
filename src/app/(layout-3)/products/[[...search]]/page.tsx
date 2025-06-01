import SearchResult from "./SearchResult";
import Container from "@component/Container";
import FlexBox from "@component/FlexBox";
import Pagination from "@component/pagination";
import { SemiSpan } from "@component/Typography";
import { getProducts } from "@utils/data_fetch/allTools";

export default async function ProductSearchResult({
  params,
  searchParams,
}: {
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
}) {
  const currentPage = Number(searchParams?.page) || 1;
  const query = searchParams?.query || "";
  const category = params?.search?.[0] || undefined;
  const subCategory = params?.search?.[1] || undefined;
  const subSubCategory = params?.search?.[2] || undefined;

  const products = await getProducts({
    page: currentPage,
    category,
    subCategory,
    subSubcategory: subSubCategory,
    q: query,
    lat: searchParams?.lat ? parseFloat(searchParams.lat) : undefined,
    lng: searchParams?.lng ? parseFloat(searchParams.lng) : undefined,
    radius: searchParams?.radius ? parseFloat(searchParams.radius) : undefined,
    timeRange: searchParams?.timeRange,
    startDate: searchParams?.startDate,
    endDate: searchParams?.endDate,
  });

  return (
    <Container py="20px">
      <SearchResult
        sortOptions={sortOptions}
        products={products} 
      />
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
    </Container>
  );
}

const sortOptions = [
  { label: "Relevance", value: "Relevance" },
  { label: "Date", value: "Date" },
  { label: "Price Low to High", value: "Price Low to High" },
  { label: "Price High to Low", value: "Price High to Low" },
];
