"use client";
 
import { useCallback, useState } from "react";

import Box from "@component/Box";
import Card from "@component/Card";
import Select from "@component/Select";
import Icon from "@component/icon/Icon";
import Grid from "@component/grid/Grid";
import FlexBox from "@component/FlexBox";
import { IconButton } from "@component/buttons";
import Sidenav from "@component/sidenav/Sidenav";
import { H5, Paragraph } from "@component/Typography";

import ProductGridView from "@component/products/ProductCard1List";
import ProductListView from "@component/products/ProductCard9List";
import ProductFilterCard from "@component/products/ProductFilterCard";
import useWindowSize from "@hook/useWindowSize";

type Props = {
  sortOptions: { label: string; value: string }[];
  products: any[]; // Receive products from the server
};

export default function SearchResult({ sortOptions, products }: Props) {
  const width = useWindowSize();
  const [view, setView] = useState<"grid" | "list">("grid");

  const isTablet = width < 1025;
  const toggleView = useCallback((v: "grid" | "list") => () => setView(v), []);

  return (
    <>
      <FlexBox
        as={Card}
        mb="55px"
        p="1.25rem"
        elevation={5}
        flexWrap="wrap"
        borderRadius={8}
        alignItems="center"
        justifyContent="space-between"
      >
        <div>
          <H5>Searching for “ products ”</H5>
          <Paragraph color="text.muted">{products.length} results found</Paragraph>
        </div>

        <FlexBox alignItems="center" flexWrap="wrap">
          <Paragraph color="text.muted" mr="1rem">
            Sort by:
          </Paragraph>

          <Box flex="1 1 0" mr="1.75rem" minWidth="150px">
            <Select placeholder="Sort by" defaultValue={sortOptions[0]} options={sortOptions} />
          </Box>

          <Paragraph color="text.muted" mr="0.5rem">
            View:
          </Paragraph>

          <IconButton onClick={toggleView("grid")}>
            <Icon
              variant="small"
              defaultcolor="auto"
              color={view === "grid" ? "primary" : "inherit"}
            >
              grid
            </Icon>
          </IconButton>

          <IconButton onClick={toggleView("list")}>
            <Icon
              variant="small"
              defaultcolor="auto"
              color={view === "list" ? "primary" : "inherit"}
            >
              menu
            </Icon>
          </IconButton>

          {isTablet && (
            <Sidenav
              position="left"
              scroll={true}
              handle={
                <IconButton>
                  <Icon>options</Icon>
                </IconButton>
              }
            >
              <ProductFilterCard />
            </Sidenav>
          )}
        </FlexBox>
      </FlexBox>

      <Grid container spacing={6}>
        <Grid item lg={3} xs={12}>
          <ProductFilterCard />
        </Grid>

        <Grid item lg={9} xs={12}>
          {view === "grid" ? (
            <ProductGridView products={products} />
          ) : (
            <ProductListView products={products} />
          )}
        </Grid>
      </Grid>
    </>
  );
}
