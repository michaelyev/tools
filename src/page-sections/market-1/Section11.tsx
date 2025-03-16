import Grid from "@component/grid/Grid";
import Container from "@component/Container";
import ProductCard1 from "@component/product-cards/ProductCard1";
import CategorySectionHeader from "@component/CategorySectionHeader";
import { getProducts } from "@utils/data_fetch/allTools";
import { SkeletonProductCard } from "@component/product-cards/SkeletonProductCard1";

export default async function Section11() {
  let moreItems = [];
  let isLoading = true;

  try {
    const data = await getProducts({
      page: 1,
      pageSize: 8,
    });
    moreItems = data.products;
    isLoading = false;
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  return (
    <Container mb="70px">
      <CategorySectionHeader title="More For You" seeMoreLink="#" />

      <Grid container spacing={6}>
        {isLoading
          ? Array.from({ length: 8 }).map((_, index) => (
              <Grid item lg={3} md={4} sm={6} xs={12} key={index}>
                <SkeletonProductCard />
              </Grid>
            ))
          : moreItems.map((item, ind) => (
              <Grid item lg={3} md={4} sm={6} xs={12} key={ind}>
                <ProductCard1
                  hoverEffect
                  id={item.id}
                  slug={item.slug}
                  title={item.title}
                  price={item.price}
                  off={item.discount}
                  rating={item.rating}
                  imgUrl={item.thumbnail}
                  images={item.images as string[]}
                />
              </Grid>
            ))}
      </Grid>
    </Container>
  );
}
