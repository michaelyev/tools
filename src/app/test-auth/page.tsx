import AuthTest from "@component/AuthTest";
import Box from "../../components/Box";
import { H3 } from "@component/Typography";

export default function TestAuthPage() {
  return (
    <Box p="2rem" maxWidth="800px" mx="auto">
      <H3 mb="2rem" textAlign="center">
        Authentication Test Page
      </H3>
      <AuthTest />
    </Box>
  );
} 