import React from "react";
import ContentLoader from "react-content-loader";

export const SkeletonProductCard = () => (
  <ContentLoader
    speed={2}
    width={277}
    height={370}
    viewBox="0 0 277 370"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="8" ry="8" width="277" height="270" />
    <rect x="0" y="280" rx="4" ry="4" width="180" height="20" />
    <rect x="0" y="310" rx="4" ry="4" width="120" height="15" />
    <rect x="0" y="340" rx="4" ry="4" width="100" height="20" />
  </ContentLoader>
);
