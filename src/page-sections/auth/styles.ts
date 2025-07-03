import Card from "@component/Card";
import styled from "styled-components";

export const StyledRoot = styled(Card)`
  width: 600px;
  max-width: 90vw;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  
  .content {
    padding: 2.5rem 2rem 0px;
  }

  @media screen and (max-width: 768px) {
    width: 95%;
    margin: 1rem auto;
    
    .content {
      padding: 1.5rem 1rem 0px;
    }
  }

  @media screen and (max-width: 480px) {
    width: 98%;
    margin: 0.5rem auto;
    
    .content {
      padding: 1rem 0.75rem 0px;
    }
  }
`;
