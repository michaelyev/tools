import { Fragment } from "react";
import axios from "@lib/axios";
// GLOBAL CUSTOM COMPONENTS
import Hidden from "@component/hidden";
import FlexBox from "@component/FlexBox";
import TableRow from "@component/TableRow";
import { H5 } from "@component/Typography";
import DashboardPageHeader from "@component/layout/DashboardPageHeader";
// PAGE SECTION COMPONENTS
import { ProductList } from "@sections/vendor-dashboard/products";
import { getServerSession } from "next-auth";
import { authOptions } from '../../../api/auth/[...nextauth]/route' // Update the path to your NextAuth options

// ==============================================================
type Params = { searchParams: Promise<{ page: string }> };
// ==============================================================

export default async function Products({ searchParams }: Params) {
  const session = await getServerSession(authOptions); // Get the session data
  const email = session?.user?.email; // Extract the user's email from the session

  const { page } = await searchParams;

  const { data } = await axios.get("/api/products", {
    params: {
      email, 
      pageSize: 10,
      page: page ? parseInt(page) : 1,
    },
  });

  console.log(email)

  return (
    <Fragment>
      <DashboardPageHeader title="Products" iconName="delivery-box" />

      <Hidden down={769}>
        <TableRow padding="0px 18px" mb="-0.125rem" boxShadow="none" backgroundColor="transparent">
          <FlexBox my="0px" mx="6px" flex="2 2 220px !important">
            <H5 ml="56px" color="text.muted" textAlign="left">
              Name
            </H5>
          </FlexBox>

          <H5 color="text.muted" my="0px" mx="6px" textAlign="left">
            Regular price
          </H5>

          <H5 color="text.muted" my="0px" mx="6px" textAlign="left">
            Sale Price
          </H5>

          <H5 flex="0 0 0 !important" color="text.muted" px="22px" my="0px" />
        </TableRow>
      </Hidden>

      <ProductList products={data.result} meta={data.meta} />
    </Fragment>
  );
}
