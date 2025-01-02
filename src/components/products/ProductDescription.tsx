import Typography, { H3 } from "@component/Typography";
import ReactMarkdown from 'react-markdown'

export default function ProductDescription({description}) {
  console.log(description)
  return (
    <div>
      {/* <H3 mb="1rem">Specification:</H3> */}
      <Typography>
        <ReactMarkdown>{description}</ReactMarkdown>
      </Typography>
    </div>
  );
}
