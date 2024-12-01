"use client";

import { useRef, useState, useEffect, cloneElement, ReactElement } from "react";
import CategoryDropdown from "./CategoryDropdown";
import { StyledCategory } from "./styles";

// =====================================================================
type CategoriesProps = { children: ReactElement };
// =====================================================================

export default function Categories({ children }: CategoriesProps) {
  const [open, setOpen] = useState<boolean>(false); // Дефолтное состояние закрыто
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpen((prev) => !prev);
  };

  const handleDocumentClick = (e: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleDocumentClick);
    return () => window.removeEventListener("click", handleDocumentClick);
  }, []);

  return (
    <StyledCategory ref={containerRef} open={open}>
      {cloneElement(children, {
        open,
        onClick: toggleMenu,
        className: `${children.props.className} cursor-pointer`,
      })}
      <CategoryDropdown open={open} />
    </StyledCategory>
  );
}
