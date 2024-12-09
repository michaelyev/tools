import { Fragment } from "react";
import Hidden from "@component/hidden";
import FlexBox from "@component/FlexBox";
import TableRow from "@component/TableRow";
import { H5 } from "@component/Typography";
import DashboardPageHeader from "@component/layout/DashboardPageHeader";
import { ProductList } from "@sections/vendor-dashboard/products";
import { getServerSession } from "next-auth";
import { authOptions } from '../../../api/auth/[...nextauth]/route'; // Update path if needed
import { getProducts } from "@utils/data_fetch/allTools";
import { getVendorProducts } from "@utils/data_fetch/vendorPostedProducts";

// ==============================================================
type Params = { searchParams: Promise<{ page: string }> };
// ==============================================================

export default async function Products({ searchParams }: Params) {
  const session = await getServerSession(authOptions); // Get the session data
  const email = session?.user?.email; // Extract the user's email from the session

  const { page } = await searchParams;

  // Use the `getProducts` function
  const productsData = await getVendorProducts({
    email, 
    page: page ? parseInt(page) : 1,
    pageSize: 10, // Adjust as needed
  });


  console.log("User email:", email);

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

      <ProductList products={productsData?.products} meta={productsData?.meta} />
    </Fragment>
  );
}
