"use client";

import { Fragment, PropsWithChildren } from "react";

import MobileNavigationBar from "@component/mobile-navigation";

export default function SaleLayout1({ children }: PropsWithChildren) {
  return (
    <Fragment>
      
      

      {children}

      <MobileNavigationBar />

    </Fragment>
  );
}
