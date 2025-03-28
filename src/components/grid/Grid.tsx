"use client";

import { Children, cloneElement } from "react";
import { FlexboxProps } from "styled-system";
// STYLED COMPONENT
import StyledGrid from "./styles";
// PROPS TYPES
import { GridProps } from "./types";

export default function Grid({
  children,
  spacing = 0,
  vertical_spacing,
  horizontal_spacing,
  containerHeight = "unset",
  ...props
}: GridProps & FlexboxProps) {
  let childList = children;

  if (props.container) {
    // Filter out null or undefined children before cloning them
    childList = Children.map(children, (child) => {
      if (child) {
        return cloneElement(child, {
          spacing: spacing,
          vertical_spacing: vertical_spacing,
          horizontal_spacing: horizontal_spacing,
        });
      }
      return null; // If child is null or undefined, return null
    });
  }

  return (
    <StyledGrid
      spacing={spacing}
      containerHeight={containerHeight}
      vertical_spacing={vertical_spacing}
      horizontal_spacing={horizontal_spacing}
      {...props}>
      {childList}
    </StyledGrid>
  );
}
