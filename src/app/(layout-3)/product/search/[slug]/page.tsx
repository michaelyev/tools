import SearchResult from "./SearchResult";
import Container from "@component/Container";
import { getProducts } from "@utils/data_fetch/allTools";

export default async function ProductSearchResult() {
  const products = await getProducts(); // Fetch products on the server

  return (
    <Container py="20px">
      <SearchResult
        sortOptions={sortOptions}
        products={products.products} // Pass products as a prop
      />
    </Container>
  );
}

const sortOptions = [
  { label: "Relevance", value: "Relevance" },
  { label: "Date", value: "Date" },
  { label: "Price Low to High", value: "Price Low to High" },
  { label: "Price High to Low", value: "Price High to Low" },
];
