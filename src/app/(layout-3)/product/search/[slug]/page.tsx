import SearchResult from "./SearchResult";
import Container from "@component/Container";
import FlexBox from "@component/FlexBox";
import Pagination from "@component/pagination";
import { SemiSpan } from "@component/Typography";
import { getProducts } from "@utils/data_fetch/allTools";

export default async function ProductSearchResult() {
  const products = await getProducts(); // Fetch products on the server

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
