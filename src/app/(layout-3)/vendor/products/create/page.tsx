
import { Fragment } from "react";
import Link from "next/link";
// GLOBAL CUSTOM COMPONENTS
import { Button } from "@component/buttons";
import DashboardPageHeader from "@component/layout/DashboardPageHeader";
// PAGE SECTION COMPONENTS
import { ProductForm } from "@sections/vendor-dashboard/products";
import { getUserSession } from "@utils/data_fetch/loggedInUserData";

const categoryOptions = [
  { label: "Fashion", value: "fashion" },
  { label: "Gadget", value: "gadget" }
];

export default async function AddProduct() {
  const user = await getUserSession();
  console.log(user);
  const HEADER_LINK = (
    <Link href="/vendor/products">
      <Button color="primary" bg="primary.light" px="2rem">
        Back to Product List
      </Button>
    </Link>
  );

  return (
    <Fragment>
      <DashboardPageHeader title="Add Product" iconName="delivery-box" button={HEADER_LINK} />
      <ProductForm categoryOptions={categoryOptions} loggedInUser={user} />
    </Fragment>
  );
}
