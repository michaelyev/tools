import Link from "next/link";
import Box from "@component/Box";
import Card from "@component/Card";
import FlexBox from "@component/FlexBox";
import HoverBox from "@component/HoverBox";
import { H4 } from "@component/Typography";
import NextImage from "@component/NextImage";
import { Carousel } from "@component/carousel";
import CategorySectionCreator from "@component/CategorySectionCreator";
import { calculateDiscount, currency } from "@utils/utils";
// API FUNCTIONS
import { getProducts } from "@utils/data_fetch/allTools";

export default async function Section13() {

  const data = await getProducts({
        page: 1,
        pageSize: 4
      })
      const bigDiscountList = data.products

  const responsive = [
    { breakpoint: 1024, settings: { slidesToShow: 5 } },
    { breakpoint: 959, settings: { slidesToShow: 4 } },
    { breakpoint: 650, settings: { slidesToShow: 2 } },
    { breakpoint: 370, settings: { slidesToShow: 1 } }
  ];

  return (
    <CategorySectionCreator
      iconName="gift"
      title="Big Discounts"
      seeMoreLink="#"
    >
      <Box my="-0.25rem">
        <Carousel dots slidesToShow={6} responsive={responsive}>
          {bigDiscountList.map((item) => (
            <Box py="0.25rem" key={item.id}>
              <Card p="1rem" borderRadius={8}>
                <Link href={`/product/${item.slug}`}>
                  <HoverBox borderRadius={8} mb="0.5rem" display="flex">
                    <NextImage
                    style={{height: 152}}
                      width={152}
                      height={152}
                      alt={item.title}
                      src={item.thumbnail}
                    />
                  </HoverBox>

                  <H4 style={{height: 90, overflowY: 'hidden'}} fontWeight="600" fontSize="14px" mb="0.25rem">
                    {item.title}
                  </H4>

                  <FlexBox>
                    <H4
                      fontWeight="600"
                      fontSize="14px"
                      color="primary.main"
                      mr="0.5rem"
                    >
                      {calculateDiscount(item.price, item.discount)}
                    </H4>

                    <H4 fontWeight="600" fontSize="14px" color="text.muted">
                      <del>{currency(item.price)}</del>
                    </H4>
                  </FlexBox>
                </Link>
              </Card>
            </Box>
          ))}
        </Carousel>
      </Box>
    </CategorySectionCreator>
  );
}
