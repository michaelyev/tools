"use client";

import ReactPaginate from "react-paginate";
import { SpaceProps } from "styled-system";

import Icon from "@component/icon/Icon";
import { Button } from "@component/buttons";
import { StyledPagination } from "./styled";
import { useRouter, useSearchParams } from "next/navigation";

// ==============================================================
// Props Interface
export interface PaginationProps extends SpaceProps {
  pageCount: number;
  pageRangeDisplayed?: number;
  marginPagesDisplayed?: number;
}
// ==============================================================

// ...

export default function Pagination({
  pageCount,
  pageRangeDisplayed = 3,
  marginPagesDisplayed = 2,
  ...props
}: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page") || 1);

  // Update URL and reload the page
  const handlePageChange = (page: any) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", (page.selected + 1).toString()); // ReactPaginate uses 0-based index
    const newUrl = `?${params.toString()}`;
    window.location.href = newUrl; // Full page reload
  };

  // Custom Buttons for Pagination
  const PREVIOUS_BUTTON = (
    <Button
      height="auto"
      padding="6px"
      color="primary"
      overflow="hidden"
      borderRadius="50%"
      className="control-button"
    >
      <Icon defaultcolor="currentColor" variant="small">
        chevron-left
      </Icon>
    </Button>
  );

  const NEXT_BUTTON = (
    <Button
      height="auto"
      padding="6px"
      color="primary"
      overflow="hidden"
      borderRadius="50%"
      className="control-button"
    >
      <Icon defaultcolor="currentColor" variant="small">
        chevron-right
      </Icon>
    </Button>
  );

  const BREAK_LABEL = (
    <Icon defaultcolor="currentColor" variant="small">
      triple-dot
    </Icon>
  );

  return (
    <StyledPagination {...props}>
      <ReactPaginate
        pageCount={pageCount}
        forcePage={currentPage - 1} // Sync current page
        nextLabel={NEXT_BUTTON}
        breakLabel={BREAK_LABEL}
        activeClassName="active"
        disabledClassName="disabled"
        containerClassName="pagination"
        previousLabel={PREVIOUS_BUTTON}
        onPageChange={handlePageChange}
        pageRangeDisplayed={pageRangeDisplayed}
        marginPagesDisplayed={marginPagesDisplayed}
      />
    </StyledPagination>
  );
}
