"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Card from "@component/Card";
import Avatar from "@component/avatar";
import Rating from "@component/rating";
import Divider from "@component/Divider";
import FlexBox from "@component/FlexBox";
import CheckBox from "@component/CheckBox";
import TextField from "@component/text-field";
import { Accordion, AccordionHeader } from "@component/accordion";
import { H5, H6, Paragraph, SemiSpan } from "@component/Typography";
import { Button } from "@component/buttons";
import { usePathname } from 'next/navigation'

export default function ProductFilterCard() {
  const pathname = usePathname()
  const pageCategory = pathname.split('/')[2]
  console.log(pageCategory)


  const [isMobile, setIsMobile] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([pageCategory]);
  const [showAllCategories, setShowAllCategories] = useState(false);

  console.log(expandedCategories)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleAccordionToggle = (category: string) => {
    setExpandedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const renderFilters = () => (
    <Card p="18px 27px" elevation={5} borderRadius={8}>
      <H6 mb="10px">Categories</H6>
      <H6 mb="10px">
        <Button variant="outlined" color="primary">
          <Link href="/products" passHref>
            All Products
          </Link>
        </Button>
      </H6>
      {categoryList.slice(0, showAllCategories ? categoryList.length : 5).map((item) =>
        item.child ? (
          <Accordion
            key={item.title}
            expanded={expandedCategories.includes(item.category)}
          >
            <AccordionHeader
              px="0px"
              py="6px"
              color="text.muted"
              onClick={() => handleAccordionToggle(item.title)}
            >
              <SemiSpan className="cursor-pointer" mr="9px">
                {item.title}
              </SemiSpan>
            </AccordionHeader>
            {item.child.map((subItem) => (
              <Paragraph
                py="6px"
                pl="22px"
                key={subItem.title}
                fontSize="14px"
                color="text.muted"
                className="cursor-pointer"
              >
                <Link href={subItem.href} passHref>
                  {subItem.title}
                </Link>
              </Paragraph>
            ))}
          </Accordion>
        ) : (
          <Paragraph
            py="6px"
            fontSize="14px"
            key={item.title}
            color="text.muted"
            className="cursor-pointer"
          >
            <Link href={item.href || "#"} passHref>
              {item.title}
            </Link>
          </Paragraph>
        )
      )}
      {!showAllCategories && categoryList.length > 5 && (
        <Button
          variant="outlined"
          color="primary"
          onClick={() => setShowAllCategories(true)}
          style={{ marginTop: "10px" }}
        >
          Show More
        </Button>
      )}
      {showAllCategories && (
        <Button
          variant="outlined"
          color="primary"
          onClick={() => setShowAllCategories(false)}
          style={{ marginTop: "10px" }}
        >
          Show Less
        </Button>
      )}
      <Divider mt="18px" mb="24px" />
      {/* PRICE RANGE FILTER */}
      <H6 mb="16px">Price Range</H6>
      <FlexBox justifyContent="space-between" alignItems="center">
        <TextField placeholder="0" type="number" fullwidth />
        <H5 color="text.muted" px="0.5rem">
          -
        </H5>
        <TextField placeholder="250" type="number" fullwidth />
      </FlexBox>
      <Divider my="24px" />
      {/* BRANDS FILTER */}
      <H6 mb="16px">Brands</H6>
      {brandList.map((item) => (
        <CheckBox
          my="10px"
          key={item}
          name={item}
          value={item}
          color="secondary"
          label={<SemiSpan color="inherit">{item}</SemiSpan>}
          onChange={(e) => console.log(e.target.value, e.target.checked)}
        />
      ))}
      <Divider my="24px" />
      {/* STOCK AND SALES FILTERS */}
      {otherOptions.map((item) => (
        <CheckBox
          my="10px"
          key={item}
          name={item}
          value={item}
          color="secondary"
          label={<SemiSpan color="inherit">{item}</SemiSpan>}
          onChange={(e) => console.log(e.target.value, e.target.checked)}
        />
      ))}
      <Divider my="24px" />
      {/* RATING FILTER */}
      <H6 mb="16px">Ratings</H6>
      {[5, 4, 3, 2, 1].map((item) => (
        <CheckBox
          my="10px"
          key={item}
          value={item}
          color="secondary"
          label={<Rating value={item} outof={5} color="warn" />}
          onChange={(e) => console.log(e.target.value, e.target.checked)}
        />
      ))}
      <Divider my="24px" />
      {/* COLORS FILTER */}
      <H6 mb="16px">Colors</H6>
      <FlexBox mb="1rem">
        {colorList.map((item, ind) => (
          <Avatar
            key={ind}
            bg={item}
            size={25}
            mr="10px"
            style={{ cursor: "pointer" }}
          />
        ))}
      </FlexBox>
    </Card>
  );

  return isMobile ? (
    <>
      <Button variant="contained" color="primary" onClick={() => setShowFilters(!showFilters)}>
        {showFilters ? "Hide Filters" : "Show Filters"}
      </Button>
      {showFilters && renderFilters()}
    </>
  ) : (
    renderFilters()
  );
}



const categoryList = [
  {
    title: "Earthmoving",
    category: 'earthmoving',
    child: [
      { title: "All Earthmoving", href: "/products/earthmoving" },
      { title: "Skid Steers", href: "/products/earthmoving/skid-steers" },
      { title: "Excavator Rentals", href: "/products/earthmoving/excavators" },
      { title: "Backhoes", href: "/products/earthmoving/backhoes" },
      { title: "Trenchers", href: "/products/earthmoving/trenchers" },
      { title: "Wheel Loaders", href: "/products/earthmoving/wheel-loaders" },
      { title: "Bulldozers", href: "/products/earthmoving/bulldozers" },
    ],
  },
  {
    title: "Trailers",
    category: 'trailers',
    child: [
      { title: "All Trailers", href: "/products/trailers" },
      { title: "Utility Trailers", href: "/products/trailers/utility" },
      { title: "Enclosed Trailers", href: "/products/trailers/enclosed" },
      { title: "Vehicle Trailers", href: "/products/trailers/vehicle" },
      { title: "Heavy-Duty Trailers", href: "/products/trailers/heavy-duty" },
    ],
  },
  {
    title: "Forklifts",
    category: "forklifts",
    child: [
      { title: "All Forklifts", href: "/products/forklifts" },
      { title: "Indoor Forklifts", href: "/products/forklifts/indoor" },
      { title: "Outdoor Forklifts", href: "/products/forklifts/outdoor" },
      { title: "Specialized Forklifts", href: "/products/forklifts/specialized" },
      { title: "Versatile Forklifts", href: "/products/forklifts/versatile" },
    ],
  },
  {
    title: "Water Damage Equipment",
    category: 'water_damage_equipment',
    child: [
      { title: "All Water Damage Equipment", href: "/products/water-remediation" },
      { title: "Water Extraction", href: "/products/water-remediation/water-extraction" },
      { title: "Drying & Dehumidification", href: "/products/water-remediation/drying-dehumidification" },
      { title: "Mold Mitigation", href: "/products/water-remediation/mold-mitigation" },
      { title: "Inspection Tools", href: "/products/water-remediation/inspection-tools" },
      { title: "Specialized Equipment", href: "/products/water-remediation/specialized" },
    ],
  },
  {
    title: "Compaction Equipment",
    category:'compaction',
    child: [
      { title: "All Compaction Equipment", href: "/products/compaction" },
      { title: "Plate Compactors", href: "/products/compaction/plate-compactors" },
      { title: "Jumping Jack Compactors", href: "/rental/compaction-equipment/jumping-jack" },
      { title: "Roller Compactors", href: "/rental/compaction-equipment/rollers" },
      { title: "Trash Compactors", href: "/rental/compaction-equipment/trash-compactors" },
      { title: "Trench Compactors", href: "/rental/compaction-equipment/trench-compactors" },
    ],
  },
  {
    title: "Saws",
    category: 'saws',
    child: [
      { title: "All Saws", href: "/products/saws" },
      { title: "Concrete Saws", href: "/products/saws/concrete" },
      { title: "Tile & Masonry Saws", href: "/products/saws/tile-masonry" },
      { title: "Chainsaws", href: "/products/saws/chainsaws-polesaws/chainsaws" },
      { title: "Pole Saws", href: "/products/saws/chainsaws-polesaws/polesaws" },
      { title: "Circular Saws", href: "/rental/saws/circular-reciprocating/circular" },
      { title: "Reciprocating Saws", href: "/rental/saws/circular-reciprocating/reciprocating" },
      { title: "Specialty Saws", href: "/rental/saws/specialty" },
    ],
  },
  {
    title: "General Tools",
    category: 'general_tools',
    child: [
      { title: "All General Tools", href: "/tools" },
      { title: "Hand Tools", href: "/tools/hand-tools" },
      { title: "Power Tools", href: "/tools/power-tools" },
      { title: "Measuring Tools", href: "/tools/measuring-tools" },
      { title: "Demolition Tools", href: "/tools/demolition-tools" },
      { title: "Fastening Tools", href: "/tools/fastening-tools" },
      { title: "Cutting Tools", href: "/tools/cutting-tools" },
      { title: "Specialty Tools", href: "/tools/specialty-tools" },
      { title: "Vacuum & Cleanup Tools", href: "/tools/cleanup-tools" },
    ],
  },
  {
    title: "Dumpsters",
    category: 'dumpsters',
    child: [
      { title: "All Dumpsters", href: "/products/dumpsters" },
      { title: "10-Yard Dumpster", href: "/products/dumpsters/10-yard" },
      { title: "15-Yard Dumpster", href: "/products/dumpsters/15-yard" },
      { title: "20-Yard Dumpster", href: "/products/dumpsters/20-yard" },
      { title: "30-Yard Dumpster", href: "/products/dumpsters/30-yard" },
      { title: "40-Yard Dumpster", href: "/products/dumpsters/40-yard" },
    ],
  },
  {
    title: "Electrical",
    category: 'electrical',
    child: [
      { title: "All Electrical", href: "/products/electrical" },
      { title: "Portable Generators", href: "/products/electrical/generators" },
      { title: "Trailer-Mounted Generators", href: "/products/electrical/trailer-generators" },
      { title: "Battery Systems", href: "/products/electrical/batteries" },
      { title: "Power Distribution", href: "/products/electrical/power-distribution" },
    ],
  },
  {
    title: "Lighting Rentals",
    category: 'lighting',
    child: [
      { title: "All Lighting Rentals", href: "/products/lighting" },
      { title: "Construction Lighting", href: "/products/lighting/construction-lighting" },
      { title: "Event & Decorative Lighting", href: "/products/lighting/event-lighting" },
      { title: "Specialty Lighting", href: "/products/lighting/specialty-lighting" },
    ],
  },
  {
    title: "Office & Storage Rentals",
    category: 'storage',
    child: [
      { title: "All Office & Storage Rentals", href: "/products/office-storage" },
      { title: "Office Rentals", href: "/products/office-storage/office-rentals" },
      { title: "Storage Containers", href: "/products/office-storage/storage-containers" },
      { title: "Specialty Office & Storage", href: "/products/office-storage/specialty" },
    ],
  },
  {
    title: "Work Platforms",
    category: 'work_platforms',
    child: [
      { title: "All Work Platforms", href: "/products/work-platforms" },
      { title: "Scissor Lifts", href: "/products/work-platforms/scissor-lifts" },
      { title: "Boom Lifts", href: "/products/work-platforms/boom-lifts" },
      { title: "Material Lifts", href: "/products/work-platforms/material-lifts" },
      { title: "Siding Pump Jacks", href: "/products/work-platforms/siding-pump-jacks" },
      { title: "Aerial Platforms", href: "/products/work-platforms/aerial-platforms" },
    ],
  },
  {
    title: "Climate Control",
    category: 'climate_control',
    child: [
      { title: "All Climate Control", href: "/products/climate" },
      { title: "Heaters", href: "/products/climate/heaters" },
      { title: "Ventilation & Air Movers", href: "/products/climate/ventilation" },
      { title: "Cooling Equipment", href: "/products/climate/cooling" },
      { title: "Specialty Climate Equipment", href: "/products/climate/specialty" },
    ],
  },
  {
    title: "Concrete & Masonry Tools",
    category: 'concrete_and_masonry',
    child: [
      { title: "All Concrete & Masonry Tools", href: "/products/concrete-masonry-tools" },
      { title: "Mixing Tools", href: "/products/concrete-masonry-tools/mixing-tools" },
      { title: "Cutting Tools", href: "/products/concrete-masonry-tools/cutting-tools" },
      { title: "Grinding & Polishing", href: "/products/concrete-masonry-tools/grinding-polishing" },
      { title: "Placement Tools", href: "/products/concrete-masonry-tools/placement-tools" },
      { title: "Demolition Tools", href: "/products/concrete-masonry-tools/demolition-tools" },
    ],
  },
  {
    title: "Paint Tools Rental",
    category: 'paint',
    child: [
      { title: "All Paint Tools Rental", href: "/products/paint-tools" },
      { title: "Paint & Texture Sprayers", href: "/products/paint-tools/paint-texture-sprayers" },
      { title: "Wall Tools", href: "/products/paint-tools/wall-tools" },
    ],
  },
];

const brandList = ["Maccs", "Karts", "Baars", "Bukks", "Luasis"];
const colorList = ["#1C1C1C", "#FF7A7A", "#FFC672", "#84FFB5", "#70F6FF", "#6B7AFF"];
const otherOptions = ["On Sale", "In Stock", "Featured"];
