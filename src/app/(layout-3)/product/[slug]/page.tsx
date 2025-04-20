import { Fragment } from "react";
import api from "@utils/__api__/products";
import ProductIntro from "@component/products/ProductIntro";
import ProductView from "@component/products/ProductView";
import Container from "@component/Container";
import { getProducts } from "@utils/data_fetch/allTools";

// ==============================================================
interface Props {
  params: Promise<{ slug: string }>;
}
// ==============================================================

export default async function ProductDetails({ params }: Props) {
  const { slug } = await params;

  const shops = await api.getAvailableShop();
  const relatedProducts = await api.getRelatedProducts();
  const frequentlyBought = await api.getFrequentlyBought();
  const product = await getProducts({ slug });

  const productInfo = product.products?.[0];

  if (!productInfo) {
    console.error("❌ Product not found for slug:", slug);
    return <div>Product not found</div>;
  }

  // 🔐 Ensure images is always an array
  productInfo.images = Array.isArray(productInfo.images)
    ? productInfo.images
    : productInfo.images
    ? [productInfo.images]
    : [];

  /* console.log("✅ Product loaded:", productInfo); */

  return (
    <Container>
      <Fragment>
        <ProductIntro
          id={productInfo.id}
          price={productInfo.price}
          title={productInfo.title}
          images={productInfo.images}
          brand={productInfo.brand}
        />

        <ProductView
          shops={shops}
          relatedProducts={relatedProducts}
          frequentlyBought={frequentlyBought}
          description={productInfo.description}
        />
      </Fragment>
    </Container>
  );
}
