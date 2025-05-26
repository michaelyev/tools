"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Avatar from "@component/avatar";
import Hidden from "@component/hidden";
import Icon from "@component/icon/Icon";
import FlexBox from "@component/FlexBox";
import TableRow from "@component/TableRow";
import Pagination from "@component/pagination";
import { IconButton } from "@component/buttons";
import Typography, { H5 } from "@component/Typography";

import { calculateDiscount, currency } from "@utils/utils";
import Product from "@models/product.model";
import { Meta } from "interfaces";

// ==============================================================
interface Props {
  meta: Meta;
  products: Product[];
}
// ==============================================================

export default function ProductsList({ meta, products }: Props) {
  const { push } = useRouter();
  const [page, setPage] = useState<number | null>(null);

  useEffect(() => {
    if (page) {
      push(`/vendor/products?page=${page}`);
      setPage(null);
    }
  }, [page]);

  return (
    <>
      {products.map((item) => (
        <TableRow key={item.id} my="1rem" padding="6px 18px">
          <FlexBox alignItems="center" m="6px" flex="2 2 220px !important">
            <Avatar src={item.thumbnail} size={36} />
            <Typography textAlign="left" ml="20px">
              {item.title}
            </Typography>
          </FlexBox>

          <H5 m="6px" textAlign="left" fontWeight="400">
            {currency(item.price)}
          </H5>

          <H5 m="6px" textAlign="left" fontWeight="400">
            {calculateDiscount(item.price, item.discount)}
          </H5>

          <Hidden flex="0 0 0 !important" down={769}>
            <Typography textAlign="center" color="text.muted">
              <IconButton onClick={() => push(`/vendor/products/edit/${item._id}`)}>
                <Icon variant="small" defaultcolor="currentColor">
                  arrow-right
                </Icon>
              </IconButton>
            </Typography>
          </Hidden>
        </TableRow>
      ))}

      <FlexBox justifyContent="center" mt="2.5rem">
        <Pagination pageCount={meta?.totalPage || 1} onChange={(data) => setPage(data + 1)} />
      </FlexBox>
    </>
  );
}
