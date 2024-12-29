import FlexBox from "@component/FlexBox";
import Grid from "@component/grid/Grid";
import Pagination from "@component/pagination";
import { ProductCard1 } from "@component/product-cards";
import { SemiSpan } from "@component/Typography";
import Product from "@models/product.model";

// ==========================================================
type Props = { products: Product[] };
// ==========================================================

export default function ProductGridView({ products, total }: Props) {
  return (
    <div>
      <Grid container spacing={2}>
        {products.map((item) => (
          <Grid item lg={4} sm={6} xs={6} key={item.id}>
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
          </Grid>
        ))}
      </Grid>

      <FlexBox
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        mt="32px"
      >
        <SemiSpan>
          Showing 1-{products.length} of {total} products
        </SemiSpan>
        <Pagination pageCount={Math.ceil(total / 12)} />
      </FlexBox>
    </div>
  );
}
