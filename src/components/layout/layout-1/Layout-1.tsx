

import { ReactElement, ReactNode } from "react";
import MobileNavigationBar from "@component/mobile-navigation";
import StyledAppLayout from "./styles";

// ===============================================================================
type Props = { title?: string; navbar?: ReactElement; children: ReactNode };
// ===============================================================================

export default function ShopLayout({ navbar, children }: Props) {
  return (
    <StyledAppLayout>
      {navbar ? <div className="section-after-sticky">{navbar}</div> : null}
      {navbar ? (
        children
      ) : (
        <div className="section-after-sticky">{children}</div>
      )}

      <MobileNavigationBar />
    </StyledAppLayout>
  );
}
