"use client";

import { useEffect, useState } from "react";

import Box from "@component/Box";
import Hidden from "@component/hidden";
import Grid from "@component/grid/Grid";
import FlexBox from "@component/FlexBox";
import Container from "@component/Container";
import NextImage from "@component/NextImage";
import Typography from "@component/Typography";
import { ProductCard1 } from "@component/product-cards";
import CategorySectionHeader from "@component/CategorySectionHeader";

import StyledProductCategory from "./styled";

import Shop from "@models/shop.model";
import Brand from "@models/Brand.model";
import Product from "@models/product.model";
import { getProducts } from "@utils/data_fetch/allTools";
import { SkeletonProductCard } from "@component/product-cards/SkeletonProductCard1";

// ======================================================
interface Props {
  shops: Shop[];
  title: string;
  brands: Brand[];
  productList: Product[];
  productCategory: string;
}
// ======================================================

export default function Section7({ shops, brands, title, productList, productCategory }: Props) {
  const [list, setList] = useState<any[]>([]);
  const [selected, setSelected] = useState("");
  const [type, setType] = useState<"brands" | "shops">("brands");
  const [products, setProducts] = useState<Product[]>([]); // <-- Store fetched data in state

  const handleCategoryClick = (brand: any) => () => {
    if (selected.match(brand)) setSelected("");
    else setSelected(brand);
  };

  const handleChangeType = (value: typeof type) => () => {
    setType(value);
    setList(value === "brands" ? brands : shops);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts({
          page: 1,
          pageSize: 6,
          category: productCategory
        });
  
        console.log("Fetched products:", data); // <-- Логируем данные до обновления состояния
        setProducts(data.products); // <-- Обновляем состояние
  
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
  
    fetchData();
  }, [productCategory]); // Перезапуск при изменении категории
  
  

  return (
    <Container mb="70px">
      <FlexBox>
        <Hidden down={768} mr="1.75rem">
          <Box shadow={6} borderRadius={10} padding="1.25rem" bg="white">
            <FlexBox mt="-0.5rem" mb="0.5rem">
              <Typography
                fontWeight="600"
                fontSize="20px"
                padding="0.5rem 1rem"
                style={{ cursor: "pointer" }}
                color={type === "brands" ? "gray.900" : "gray.600"}
                onClick={handleChangeType("brands")}
              >
                Brands
              </Typography>

              <Typography
                fontSize="20px"
                fontWeight="600"
                color="gray.400"
                paddingTop="0.5rem"
              >
                |
              </Typography>

              <Typography
                fontSize="20px"
                fontWeight="600"
                padding="0.5rem 1rem"
                style={{ cursor: "pointer" }}
                onClick={handleChangeType("shops")}
                color={type === "shops" ? "gray.900" : "gray.600"}
              >
                Shops
              </Typography>
            </FlexBox>

            {productList.map((brand, i) => (
              <StyledProductCategory
                key={i}
                mb="0.75rem"
                onClick={handleCategoryClick(brand.slug)}
                shadow={selected.match(brand.slug) ? 4 : null}
                bg={selected.match(brand.slug) ? "white" : "gray.100"}
              >
                <Box width={20} height={20}>
                  <NextImage
                    width={20}
                    height={20}
                    alt="brand"
                    src={
                      type === "shops"
                        ? `/assets/images/shops/${brand.thumbnail}.png`
                        : brand.image
                    }
                  />
                </Box>
                <span className="product-category-title">{brand.name}</span>
              </StyledProductCategory>
            ))}

            <StyledProductCategory
              mt="4rem"
              onClick={handleCategoryClick(`all-${type}`)}
              shadow={selected.match(`all-${type}`) ? 4 : null}
              bg={selected.match(`all-${type}`) ? "white" : "gray.100"}
            >
              <span className="product-category-title show-all">
                View All {type}
              </span>
            </StyledProductCategory>
          </Box>
        </Hidden>

        <Box flex="1 1 0" minWidth="0px">
          <CategorySectionHeader title={title} seeMoreLink="#" />

          {products.length > 0 ? (
  <Grid container spacing={6}>
    {products.map((item, ind) => (
      <Grid item lg={4} sm={6} xs={12} key={ind}>
        <ProductCard1
          hoverEffect
          id={item.id}
          slug={item.slug}
          title={item.title}
          price={item.price}
          off={item.discount}
          rating={item.rating}
          images={item.images}
          imgUrl={item.thumbnail}
        />
      </Grid>
    ))}
  </Grid>
) : (
  <Grid container spacing={6}>
    {Array.from({ length: 6 }).map((_, index) => (
      <Grid item lg={4} sm={6} xs={12} key={index}>
        <SkeletonProductCard />
      </Grid>
    ))}
  </Grid>
)}

        </Box>
      </FlexBox>
    </Container>
  );
}
