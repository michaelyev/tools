

import { PropsWithChildren } from "react";
import AppLayout from "../layout-1";
import Container from "@component/Container";

export default function ShopLayout({ children }: PropsWithChildren) {
  return (
    <AppLayout>
      <Container my="2rem">{children}</Container>
    </AppLayout>
  );
}
