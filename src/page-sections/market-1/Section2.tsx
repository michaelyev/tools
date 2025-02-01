import Box from "@component/Box";
import { Carousel } from "@component/carousel";
import ProductCard1 from "@component/product-cards/ProductCard1";
import CategorySectionCreator from "@component/CategorySectionCreator";
// API FUNCTIONS
import { getProducts } from "@utils/data_fetch/allTools";

export default async function Section2() {
  /* const products = await api.getFlashDeals(); */

  const responsive = [
    { breakpoint: 1279, settings: { slidesToShow: 4 } },
    { breakpoint: 959, settings: { slidesToShow: 3 } },
    { breakpoint: 650, settings: { slidesToShow: 2 } },
    { breakpoint: 500, settings: { slidesToShow: 1 } }
  ];

  const products = await getProducts({
    page: 1,
    pageSize: 12
  })

  const discounted = products.products

  console.log(products.products)
  return (
    <CategorySectionCreator iconName="light" title="Popular Items" seeMoreLink="#">
      <Box mt="-0.25rem" mb="-0.25rem">
        <Carousel slidesToShow={4} responsive={responsive}>
          {discounted.map((item, ind) => (
            <Box py="0.25rem" key={ind}>
              <ProductCard1
                key={ind}
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
