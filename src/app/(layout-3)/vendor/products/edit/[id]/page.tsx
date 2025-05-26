import { Fragment } from "react";
import Link from "next/link";
import { Button } from "@component/buttons";
import DashboardPageHeader from "@component/layout/DashboardPageHeader";
import { getUserSession } from "@utils/data_fetch/loggedInUserData";
import { getProductById } from "@utils/data_fetch/getProductById";
import ProductEditForm from "@sections/vendor-dashboard/products/ProductsEditForm";

const categoryOptions = [
  { label: "Earth Moving", value: "earth-moving" },
  { label: "Trailers", value: "trailers" },
  { label: "Saws", value: "saws" },
  { label: "General Tools", value: "general-tools" },
  { label: "Dehumidifiers", value: "dehumidifiers" },
  { label: "Heaters", value: "heaters" },
  { label: "Concrete and Masonry", value: "concrete-and-masonry" },
  { label: "Compaction", value: "compaction" },
  { label: "Dumpsters", value: "dumpsters" },
  { label: "Offices and Storage", value: "offices-and-storage" },
  { label: "Generators", value: "generators" },
  { label: "Work Platforms", value: "work-platforms" },
  { label: "Scaffolding", value: "scaffolding" },
  { label: "Ladders", value: "ladders" },
  { label: "Flooring", value: "flooring" },
  { label: "Painting", value: "painting" },
  { label: "Forklifts", value: "forklifts" },
  { label: "Work Light", value: "work-light" },
];

export default async function EditProductPage({ params }: { params: { id: string } }) {
  const user = await getUserSession();
  const product = await getProductById(params.id);


  const HEADER_LINK = (
    <Link href="/vendor/products">
      <Button color="primary" bg="primary.light" px="2rem">
        Back to Product List
      </Button>
    </Link>
  );
  return (
    <Fragment>
      <DashboardPageHeader title="Edit Product" iconName="delivery-box" button={HEADER_LINK} />
      {product ? (
        <ProductEditForm
          loggedInUser={user} 
          categoryOptions={categoryOptions} 
          productData={product} 
        />
      ) : (
        <p>Product not found</p>
      )}
    </Fragment>
  );
}
