"use client";

import { useEffect, useState } from "react";
import Box from "@component/Box";
import { Carousel } from "@component/carousel";
import ProductCard1 from "@component/product-cards/ProductCard1";
import CategorySectionCreator from "@component/CategorySectionCreator";
import { getProducts } from "@utils/data_fetch/allTools";
import { SkeletonProductCard } from "@component/product-cards/SkeletonProductCard1";

export default function Section2() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts({ page: 1, pageSize: 12 });
        setProducts(response.products);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const responsive = [
    { breakpoint: 1279, settings: { slidesToShow: 4 } },
    { breakpoint: 959, settings: { slidesToShow: 3 } },
    { breakpoint: 650, settings: { slidesToShow: 2 } },
    { breakpoint: 500, settings: { slidesToShow: 1 } },
  ];

  return (
    <CategorySectionCreator iconName="light" title="Popular Items" seeMoreLink="#">
      <Box mt="-0.25rem" mb="-0.25rem">
        <Carousel slidesToShow={4} responsive={responsive}>
          {loading
            ? Array.from({ length: 4 }).map((_, index) => (
                <Box py="0.25rem" key={index}>
                  <SkeletonProductCard />
                </Box>
              ))
            : products.map((item, ind) => (
                <Box py="0.25rem" key={ind}>
                  <ProductCard1
                    id={item.id}
                    slug={item.slug}
                    price={item.price}
                    title={item.title}
                    off={item.discount}
                    images={item.images}
                    imgUrl={item.thumbnail}
                    rating={item.rating || 4}
                  />
                </Box>
              ))}
        </Carousel>
      </Box>
    </CategorySectionCreator>
  );
}
