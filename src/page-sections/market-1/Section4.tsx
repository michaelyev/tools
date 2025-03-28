
import Link from "next/link";
import Box from "@component/Box";
import Card from "@component/Card";
import Grid from "@component/grid/Grid";
import Container from "@component/Container";
import ProductCard4 from "@component/product-cards/ProductCard4";
import ProductCard5 from "@component/product-cards/ProductCard5";
import CategorySectionHeader from "@component/CategorySectionHeader";
// API FUNCTIONS
import { getProducts } from "@utils/data_fetch/allTools";

export default async function Section4() {
  let discounted = [];

  // Hardcoded brand names
  const brands = [
    { name: "CAT", image: "/assets/brands/cat_logo.webp" },
    { name: "DeWalt", image: "/assets/brands/dewalt_logo.jpg" },
    { name: "Bosch", image: "/assets/brands/bosch_logo.jpg" },
    { name: "Husqvarna", image: "/assets/brands/Husqvarna-logo.jpg" },
  ];

  try {
    const brandNames = brands.map((brand) => brand.name.toLowerCase()); // Extract brand names in lowercase

    const products = await getProducts({
      page: 1,
      pageSize: 4,
      category: "brands",
      subCategory: 'dewalt' // Automatically pass first brand
    });

    discounted = products.products || [];
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }

  return (
    <Box mb="3.75rem">
      <Container>
        <Grid container spacing={6}>
          {/* Top Rated Products */}
          <Grid item lg={6} xs={12}>
            <CategorySectionHeader
              iconName="ranking-1"
              title={`Top Ratings - ${brands[1].name}`}
              seeMoreLink="#"
            />

            <Card p="1rem" borderRadius={8}>
              <Grid container spacing={4}>
                {discounted.length > 0 ? (
                  discounted.map((item) => (
                    <Grid item md={3} sm={6} xs={6} key={item.id || item.title}>
                      <Link href={`/product/search/${item.slug}`} passHref>
                        <ProductCard4
                          title={item.title || "Unnamed Product"}
                          price={item.price || "N/A"}
                          imgUrl={item.thumbnail || "/assets/default-product.jpg"}
                          rating={item.rating || 4}
                          reviewCount={item.reviews?.length || 12}
                        />
                      </Link>
                    </Grid>
                  ))
                ) : (
                  <p>No products available</p>
                )}
              </Grid>
            </Card>
          </Grid>

          {/* Featured Brands */}
          <Grid item md={6} xs={12}>
            <CategorySectionHeader iconName="Group" title="Featured Brands" seeMoreLink="#" />

            <Card p="1rem" borderRadius={8}>
              <Grid container spacing={4}>
                {brands.map((brand) => {
                  const brandSlug = brand.name.toLowerCase();
                  const brandLink = `/products/brands/${brandSlug}`;
                  return (
                    <Grid item sm={6} xs={12} key={brand.name}>
                      <Link href={brandLink} passHref>
                        <ProductCard5 title={brand.name} imgUrl={brand.image} />
                      </Link>
                    </Grid>
                  );
                })}
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
