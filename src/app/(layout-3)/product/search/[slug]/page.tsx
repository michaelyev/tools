import Box from "@component/Box";
import SearchResult from "./SearchResult";
import Container from "@component/Container";

export default function ProductSearchResult() {
  return (
    <Container py="20px">
      <SearchResult sortOptions={sortOptions} />
    </Container>
  );
}

const sortOptions = [
  { label: "Relevance", value: "Relevance" },
  { label: "Date", value: "Date" },
  { label: "Price Low to High", value: "Price Low to High" },
  { label: "Price High to Low", value: "Price High to Low" }
];
