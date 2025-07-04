import { H6 } from "@component/Typography";
import { Box } from "@component/Box";

interface ValidationErrorProps {
  error?: string;
  className?: string;
}

export default function ValidationError({ error, className }: ValidationErrorProps) {
  if (!error) return null;

  return (
    <Box mt="0.5rem">
      <H6 color="error.main" fontSize="12px" className={className}>
        {error}
      </H6>
    </Box>
  );
} 