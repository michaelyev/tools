const navigations = [
  {
    icon: "dress",
    title: "Earthmoving",
    href: "/products/earthmoving",
    menuComponent: "MegaMenu1",
    menuData: {
      categories: [
        {
          title: "Skid Steers",
          href: "/products/earthmoving/skid-steers",
          subCategories: [
            {
              title: "Compact",
              href: "/products/earthmoving/skid-steers/compact",
              imgUrl: "/images/skid-steer/compact.png",
            },
            {
              title: "Mini",
              href: "/products/earthmoving/skid-steers/mini",
              imgUrl: "/images/skid-steer/mini.png",
            },
            {
              title: "Walk-Behind",
              href: "/products/earthmoving/skid-steers/walk-behind",
              imgUrl: "/images/skid-steer/walk-behind.png",
            },
            {
              title: "Track",
              href: "/products/earthmoving/skid-steers/track",
              imgUrl: "/images/skid-steer/track.png",
            },
            {
              title: "Wheeled",
              href: "/products/earthmoving/skid-steers/wheeled",
              imgUrl: "/images/skid-steer/wheeled.png",
            },
          ],
        },
        {
          title: "Excavator Rentals",
          href: "/products/earthmoving/excavators",
          subCategories: [
            {
              title: "Mini Excavators",
              href: "/products/earthmoving/excavators/mini",
              imgUrl: "/images/excavators/mini.png",
            },
            {
              title: "Standard Excavators",
              href: "/products/earthmoving/excavators/standard",
              imgUrl: "/images/excavators/standard.png",
            },
            {
              title: "Long Reach Excavators",
              href: "/products/earthmoving/excavators/long-reach",
              imgUrl: "/images/excavators/long-reach.png",
            },
            {
              title: "Excavator Attachments",
              href: "/products/earthmoving/excavators/attachments",
              imgUrl: "/images/excavators/attachments.png",
            },
          ],
        },
        {
          title: "Backhoes",
          href: "/products/earthmoving/backhoes",
          subCategories: [
            
            {
              title: "Mini Backhoes",
              href: "/products/earthmoving/backhoes/mini",
              imgUrl: "/images/backhoes/mini.png",
            },
            {
              title: "Standard Backhoes",
              href: "/products/earthmoving/backhoes/standard",
              imgUrl: "/images/backhoes/standard.png",
            },
            {
              title: "Extendahoe Backhoes",
              href: "/products/earthmoving/backhoes/extendahoe",
              imgUrl: "/images/backhoes/extendahoe.png",
            },
            {
              title: "Backhoe Attachments",
              href: "/products/earthmoving/backhoes/attachments",
              imgUrl: "/images/backhoes/attachments.png",
            }
          ],
        },

        {
          title: "Trenchers",
          href: "/products/earthmoving/trenchers",
          subCategories: [
            {
              title: "Walk-Behind Trenchers",
              href: "/products/earthmoving/trenchers/walk-behind",
              imgUrl: "/products/earthmoving/trenchers/walk-behind.png",
            },
            {
              title: "Ride-On Trenchers",
              href: "/products/earthmoving/trenchers/ride-on",
              imgUrl: "/images/trenchers/ride-on.png",
            },
            {
              title: "Skid Steer Trenchers",
              href: "/products/earthmoving/trenchers/skid-steer",
              imgUrl: "/images/trenchers/skid-steer.png",
            },
            {
              title: "Mini Trenchers",
              href: "/products/earthmoving/trenchers/mini",
              imgUrl: "/images/trenchers/mini.png",
            }
          ],
        },
        {
          title: "Wheel Loaders",
          href: "/products/earthmoving/wheel-loaders",
          subCategories: [
            {
              title: "Wheel Loaders 1-2 Cubic Yards",
              href: "/products/earthmoving/wheel-loaders/1-2-cubic-yards",
              imgUrl: "/images/wheel-loaders/1-2-cubic-yards.png",
            },
            {
              title: "Wheel Loaders 2-4 Cubic Yards",
              href: "/products/earthmoving/wheel-loaders/2-4-cubic-yards",
              imgUrl: "/images/wheel-loaders/2-4-cubic-yards.png",
            },
            {
              title: "Wheel Loaders 4-6 Cubic Yards",
              href: "/products/earthmoving/wheel-loaders/4-6-cubic-yards",
              imgUrl: "/images/wheel-loaders/4-6-cubic-yards.png",
            }
          ]          
        },
        {
          title: "Bulldozers",
          href: "/products/earthmoving//bulldozers",
          subCategories: [
            {
              title: "Compact",
              href: "/products/earthmoving/bulldozers/mini",
              imgUrl: "/images/bulldozers/mini.png",
            },
            {
              title: "Standard",
              href: "/products/earthmoving/bulldozers/standard",
              imgUrl: "/images/bulldozers/standard.png",
            }
          ],
        },
      ],
      rightImage: {
        imgUrl: "/assets/images/promotion/offer-1.png",
        href: "/sale-page-1",
      },
    },
  },
  {
    icon: "trailer",
    title: "Trailers",
    href: "/products/trailers",
    menuComponent: "MegaMenu1",
    menuData: {
      categories: [
        {
          title: "Utility Trailers",
          href: "/products/trailers/utility",
          subCategories: [
            {
              title: "Small Utility Trailers",
              href: "/products/trailers/utility/small",
              imgUrl: "/assets/images/trailers/small-utility.png",
            },
            {
              title: "Flatbed Trailers",
              href: "/products/trailers/utility/flatbed",
              imgUrl: "/assets/images/trailers/flatbed.png",
            },
            {
              title: "Dump Trailers",
              href: "/products/trailers/utility/dump",
              imgUrl: "/assets/images/trailers/dump.png",
            },
          ],
        },
        {
          title: "Enclosed Trailers",
          href: "/products/trailers/enclosed",
          subCategories: [
            {
              title: "Cargo Trailers",
              href: "/products/trailers/cargo",
              imgUrl: "/assets/images/trailers/cargo.png",
            },
            {
              title: "Refrigerated Trailers",
              href: "/products/trailers//products/trailers/refrigerated",
              imgUrl: "/assets/images/trailers/refrigerated.png",
            },
            {
              title: "Storage Trailers",
              href: "/products/trailers/storage",
              imgUrl: "/assets/images/trailers/storage.png",
            },
          ],
        },
        {
          title: "Vehicle Trailers",
          href: "/products/trailers/vehicle",
          subCategories: [
            {
              title: "Car Hauler Trailers",
              href: "/products/trailers/vehicle/car-hauler",
              imgUrl: "/assets/images/trailers/car-hauler.png",
            },
            {
              title: "Motorcycle Trailers",
              href: "/products/trailers/vehicle/motorcycle",
              imgUrl: "/assets/images/trailers/motorcycle.png",
            },
            {
              title: "Tow Trailers",
              href: "/products/trailers/vehicle/tow",
              imgUrl: "/assets/images/trailers/tow.png",
            },
          ],
        },
        {
          title: "Heavy-Duty Trailers",
          href: "/products/trailers/heavy-duty",
          subCategories: [
            {
              title: "Gooseneck Trailers",
              href: "/products/trailers/heavy-duty/gooseneck",
              imgUrl: "/assets/images/trailers/gooseneck.png",
            },
            {
              title: "Lowboy Trailers",
              href: "/products/trailers/heavy-duty/lowboy",
              imgUrl: "/assets/images/trailers/lowboy.png",
            },
            {
              title: "Flatbed Trailers",
              href: "/products/trailers/heavy-duty/flatbed",
              imgUrl: "/assets/images/trailers/flatbed-heavy.png",
            },
          ],
        }
      ],
      bottomImage: {
        imgUrl: "/assets/images/promotion/offer-5.png",
        href: "/",
      },
    },
  },
  {
    "icon": "forklift",
    "title": "Forklifts",
    "href": "/products/forklifts",
    "menuComponent": "MegaMenu1",
    "menuData": {
      "categories": [
        {
          "title": "Indoor Forklifts",
          "href": "/products/forklifts/indoor",
          "subCategories": [
            {
              "title": "Warehouse Forklifts",
              "href": "/products/forklifts/indoor/warehouse",
              "imgUrl": "/assets/images/forklifts/warehouse.png"
            },
            {
              "title": "Compact Forklifts",
              "href": "/products/forklifts/indoor/compact",
              "imgUrl": "/assets/images/forklifts/compact.png"
            }
          ]
        },
        {
          "title": "Outdoor Forklifts",
          "href": "/products/forklifts/outdoor",
          "subCategories": [
            {
              "title": "Rough Terrain Forklifts",
              "href": "/products/forklifts/outdoor/rough-terrain",
              "imgUrl": "/assets/images/forklifts/rough-terrain.png"
            },
            {
              "title": "Diesel Forklifts",
              "href": "/products/forklifts/outdoor/diesel",
              "imgUrl": "/assets/images/forklifts/diesel.png"
            }
          ]
        },
        {
          "title": "Specialized Forklifts",
          "href": "/products/forklifts/specialized",
          "subCategories": [
            {
              "title": "Side Loaders",
              "href": "/products/forklifts/specialized/side-loaders",
              "imgUrl": "/assets/images/forklifts/side-loader.png"
            },
            {
              "title": "Narrow-Aisle Forklifts",
              "href": "/products/forklifts/specialized/narrow-aisle",
              "imgUrl": "/assets/images/forklifts/narrow-aisle.png"
            }
          ]
        },
        {
          "title": "Versatile Forklifts",
          "href": "/products/forklifts/versatile",
          "subCategories": [
            {
              "title": "Electric Counterbalance",
              "href": "/products/forklifts/versatile/electric-counterbalance",
              "imgUrl": "/assets/images/forklifts/counterbalance-electric.png"
            },
            {
              "title": "Diesel Counterbalance",
              "href": "/products/forklifts/versatile/diesel-counterbalance",
              "imgUrl": "/assets/images/forklifts/counterbalance-diesel.png"
            }
          ]
        }
      ],
      "rightImage": {
        "imgUrl": "/assets/images/promotion/forklift-offer.png",
        "href": "/sale-page-forklifts"
      }
    }
  },
  {
    "icon": "water-damage",
    "title": "Water Damage Equipment",
    "href": "/products/water-remediation",
    "menuComponent": "MegaMenu1",
    "menuData": {
      "categories": [
        {
          "title": "Water Extraction Equipment",
          "href": "/products/water-remediation/water-extraction",
          "subCategories": [
            {
              "title": "Portable Water Extractors",
              "href": "/products/water-remediation/water-extraction/portable",
              "imgUrl": "/images/water-damage/portable-extractor.png"
            },
            {
              "title": "Truck-Mounted Extractors",
              "href": "/products/water-remediation/water-extraction/truck-mounted",
              "imgUrl": "/images/water-damage/truck-mounted-extractor.png"
            }
          ]
        },
        {
          "title": "Drying and Dehumidification",
          "href": "/products/water-remediation/drying-dehumidification",
          "subCategories": [
            {
              "title": "High-Capacity Dehumidifiers",
              "href": "/products/water-remediation/drying-dehumidification/high-capacity",
              "imgUrl": "/images/water-damage/high-capacity-dehumidifier.png"
            },
            {
              "title": "Commercial Air Movers",
              "href": "/products/water-remediation/drying-dehumidification/air-movers",
              "imgUrl": "/images/water-damage/air-movers.png"
            }
          ]
        },
        {
          "title": "Mold Mitigation Equipment",
          "href": "/products/water-remediation/mold-mitigation",
          "subCategories": [
            {
              "title": "HEPA Air Scrubbers",
              "href": "/products/water-remediation/mold-mitigation/hepa-air-scrubbers",
              "imgUrl": "/images/water-damage/hepa-air-scrubber.png"
            },
            {
              "title": "Antimicrobial Foggers",
              "href": "/products/water-remediation/mold-mitigation/antimicrobial-foggers",
              "imgUrl": "/images/water-damage/antimicrobial-fogger.png"
            }
          ]
        },
        {
          "title": "Inspection Tools",
          "href": "/products/water-remediation/inspection-tools",
          "subCategories": [
            {
              "title": "Moisture Meters",
              "href": "/products/water-remediation/inspection-tools/moisture-meters",
              "imgUrl": "/images/water-damage/moisture-meter.png"
            },
            {
              "title": "Thermal Imaging Cameras",
              "href": "/products/water-remediation/inspection-tools/thermal-cameras",
              "imgUrl": "/images/water-damage/thermal-camera.png"
            }
          ]
        },
        {
          "title": "Specialized Equipment",
          "href": "/products/water-remediation/specialized",
          "subCategories": [
            {
              "title": "Wall Injectors",
              "href": "/products/water-remediation/specialized/wall-injectors",
              "imgUrl": "/images/water-damage/wall-injector.png"
            },
            {
              "title": "Floor Drying Systems",
              "href": "/products/water-remediation/specialized/floor-drying",
              "imgUrl": "/images/water-damage/floor-drying-system.png"
            }
          ]
        }
      ],
      "rightImage": {
        "imgUrl": "/assets/images/promotions/water-remediation.png",
        "href": "/sale-page-water-remediation"
      }
    }
  },
  {
    "icon": "compactor",
    "title": "Compaction Equipment",
    "href": "/products/compaction",
    "menuComponent": "MegaMenu1",
    "menuData": {
      "categories": [
        {
          "title": "Plate Compactors",
          "href": "/products/compaction/plate-compactors",
          "subCategories": [
            {
              "title": "Standard Plate Compactors",
              "href": "/rental/compaction-equipment/plate-compactors/standard",
              "imgUrl": "/assets/images/compaction/plate-vibratory.png"
            },
            {
              "title": "Reversible Plate Compactors",
              "href": "/rental/compaction-equipment/plate-compactors/reversible",
              "imgUrl": "/assets/images/compaction/plate-reversible.png"
            }
          ]
        },
        {
          "title": "Jumping Jack Compactors",
          "href": "/rental/compaction-equipment/jumping-jack",
          "subCategories": [
            {
              "title": "Rammer Compactors",
              "href": "/rental/compaction-equipment/jumping-jack/rammers",
              "imgUrl": "/assets/images/compaction/jumping-jack-standard.png"
            }
          ]
        },
        {
          "title": "Roller Compactors",
          "href": "/rental/compaction-equipment/rollers",
          "subCategories": [
            {
              "title": "Smooth Drum Rollers",
              "href": "/rental/compaction-equipment/rollers/vibratory/smooth-drum",
              "imgUrl": "/assets/images/compaction/roller-smooth-drum.png"
            },
            {
              "title": "Padfoot Rollers",
              "href": "/rental/compaction-equipment/rollers/vibratory/padfoot",
              "imgUrl": "/assets/images/compaction/roller-padfoot.png"
            }
          ]
        },
        {
          "title": "Trash Compactors",
          "href": "/rental/compaction-equipment/trash-compactors",
          "subCategories": [
            {
              "title": "Portable Trash Compactors",
              "href": "/rental/compaction-equipment/trash-compactors/portable",
              "imgUrl": "/assets/images/compaction/trash-portable.png"
            },
            {
              "title": "Freestanding Trash Compactors",
              "href": "/rental/compaction-equipment/trash-compactors/freestanding",
              "imgUrl": "/assets/images/compaction/trash-freestanding.png"
            }
          ]
        },
        {
          "title": "Trench Compactors",
          "href": "/rental/compaction-equipment/trench-compactors",
          "subCategories": [
            {
              "title": "Smooth Drum",
              "href": "/rental/compaction-equipment/trench-compactors/walk-behind/smooth-drum",
              "imgUrl": "/assets/images/compaction/trench-smooth-drum.png"
            },
            {
              "title": "Padfoot",
              "href": "/rental/compaction-equipment/trench-compactors/walk-behind/padfoot",
              "imgUrl": "/assets/images/compaction/trench-padfoot.png"
            }
          ]
        }
      ],
      "rightImage": {
        "imgUrl": "/assets/images/promotion/compaction-offer.png",
        "href": "/sale-page-compaction"
      }
    }
  },
  {
    icon: "saw",
    title: "Saws",
    href: "/products/saws",
    menuComponent: "MegaMenu1",
    menuData: {
      categories: [
        {
          title: "Concrete Saws",
          href: "/products/saws/concrete",
          subCategories: [
            {
              title: "Electric Concrete Saws",
              href: "/products/saws/concrete/electric",
              imgUrl: "/images/saws/concrete-electric.png",
            },
            {
              title: "Gas Concrete Saws",
              href: "/products/saws/concrete/gas",
              imgUrl: "/images/saws/concrete-gas.png",
            },
            {
              title: "Walk-Behind Floor Saws",
              href: "/products/saws/concrete/floor",
              imgUrl: "/images/saws/concrete-floor.png",
            },
          ],
        },
        {
          title: "Tile and Masonry Saws",
          href: "/products/saws/tile-masonry",
          subCategories: [
            {
              title: "Tile Saws",
              href: "/products/saws/tile-masonry/tile",
              imgUrl: "/images/saws/tile.png",
            },
            {
              title: "Brick and Paver Saws",
              href: "/products/saws/tile-masonry/brick-paver",
              imgUrl: "/images/saws/brick-paver.png",
            },
          ],
        },
        {
          title: "Chainsaws",
          href: "/products/saws/chainsaws-polesaws/chainsaws",
          imgUrl: "/images/saws/chainsaws.png",
        },
        {
          title: "Pole Saws",
          href: "/products/saws/chainsaws-polesaws/polesaws",
          imgUrl: "/images/saws/polesaws.png",
        },
        {
          title: "Circular Saws",
          href: "/rental/saws/circular-reciprocating/circular",
          imgUrl: "/images/saws/circular.png",
        },
        {
          title: "Reciprocating Saws",
          href: "/rental/saws/circular-reciprocating/reciprocating",
          imgUrl: "/images/saws/reciprocating.png",
        }
        ,
        {
          title: "Specialty Saws",
          href: "/rental/saws/specialty",
          subCategories: [
            {
              title: "Band Saws",
              href: "/rental/saws/specialty/band",
              imgUrl: "/images/saws/band.png",
            },
            {
              title: "Jamb and Toe Kick Saws",
              href: "/rental/saws/specialty/jamb-toekick",
              imgUrl: "/images/saws/jamb-toekick.png",
            },
          ],
        },
      ],
      rightImage: {
        imgUrl: "/assets/images/promotion/offer-1.png",
        href: "/sale-page-saws",
      },
    },
  },
  {
    icon: "tools",
    title: "General Tools",
    href: "/tools",
    menuComponent: "MegaMenu1",
    menuData: {
      categories: [
        {
          title: "Hand Tools",
          href: "/tools/hand-tools",
          subCategories: [
            {
              title: "Cutting Tools",
              href: "/tools/hand-tools/cutting-tools",
              imgUrl: "/images/tools/cutting-tools.png",
            },
            {
              title: "Fastening Tools",
              href: "/tools/hand-tools/fastening-tools",
              imgUrl: "/images/tools/fastening-tools.png",
            },
            {
              title: "Measuring Tools",
              href: "/tools/hand-tools/measuring-tools",
              imgUrl: "/images/tools/measuring-tools.png",
            },
            {
              title: "Wrenches & Ratchets",
              href: "/tools/hand-tools/wrenches",
              imgUrl: "/images/tools/wrenches.png",
            },
            {
              title: "Hammers & Mallets",
              href: "/tools/hand-tools/hammers",
              imgUrl: "/images/tools/hammers.png",
            },
          ],
        },
        {
          title: "Power Tools",
          href: "/tools/power-tools",
          subCategories: [
            {
              title: "Drills & Drivers",
              href: "/tools/power-tools/drills",
              imgUrl: "/images/tools/drills.png",
            },
            {
              title: "Saws",
              href: "/tools/power-tools/saws",
              imgUrl: "/images/tools/saws.png",
            },
            {
              title: "Grinders & Sanders",
              href: "/tools/power-tools/grinders-sanders",
              imgUrl: "/images/tools/grinders-sanders.png",
            },
            {
              title: "Vacuum Systems",
              href: "/tools/power-tools/vacuum-systems",
              imgUrl: "/images/tools/vacuum-systems.png",
            },
          ],
        },
        {
          title: "Measuring Tools",
          href: "/tools/measuring-tools",
          subCategories: [
            {
              title: "Laser Levels",
              href: "/tools/measuring-tools/laser-levels",
              imgUrl: "/images/tools/laser-levels.png",
            },
            {
              title: "Measuring Tapes",
              href: "/tools/measuring-tools/measuring-tapes",
              imgUrl: "/images/tools/measuring-tapes.png",
            },
            {
              title: "Stud Finders",
              href: "/tools/measuring-tools/stud-finders",
              imgUrl: "/images/tools/stud-finders.png",
            },
          ],
        },
        {
          title: "Demolition Tools",
          href: "/tools/demolition-tools",
          subCategories: [
            {
              title: "Jack Hammers",
              href: "/tools/demolition-tools/jack-hammers",
              imgUrl: "/images/tools/jack-hammers.png",
            },
            {
              title: "Electric Breakers",
              href: "/tools/demolition-tools/electric-breakers",
              imgUrl: "/images/tools/electric-breakers.png",
            },
          ],
        },
        {
          title: "Fastening Tools",
          href: "/tools/fastening-tools",
          subCategories: [
            {
              title: "Screwdrivers",
              href: "/tools/fastening-tools/screwdrivers",
              imgUrl: "/images/tools/screwdrivers.png",
            },
            {
              title: "Nail Guns",
              href: "/tools/fastening-tools/nail-guns",
              imgUrl: "/images/tools/nail-guns.png",
            },
            {
              title: "Staple Guns",
              href: "/tools/fastening-tools/staple-guns",
              imgUrl: "/images/tools/staple-guns.png",
            },
          ],
        },
        {
          title: "Cutting Tools",
          href: "/tools/cutting-tools",
          subCategories: [
            {
              title: "Bolt Cutters",
              href: "/tools/cutting-tools/bolt-cutters",
              imgUrl: "/images/tools/bolt-cutters.png",
            },
            {
              title: "Utility Knives",
              href: "/tools/cutting-tools/utility-knives",
              imgUrl: "/images/tools/utility-knives.png",
            },
            {
              title: "Hand Saws",
              href: "/tools/cutting-tools/hand-saws",
              imgUrl: "/images/tools/hand-saws.png",
            },
          ],
        },
        {
          title: "Specialty Tools",
          href: "/tools/specialty-tools",
          subCategories: [
            {
              title: "Paint Sprayers",
              href: "/tools/specialty-tools/paint-sprayers",
              imgUrl: "/images/tools/paint-sprayers.png",
            },
            {
              title: "Heat Guns",
              href: "/tools/specialty-tools/heat-guns",
              imgUrl: "/images/tools/heat-guns.png",
            },
            {
              title: "Rotary Hammers",
              href: "/tools/specialty-tools/rotary-hammers",
              imgUrl: "/images/tools/rotary-hammers.png",
            },
          ],
        },
        {
          title: "Vacuum & Cleanup Tools",
          href: "/tools/cleanup-tools",
          subCategories: [
            {
              title: "Wet/Dry Vacuums",
              href: "/tools/cleanup-tools/wet-dry-vacuums",
              imgUrl: "/images/tools/wet-dry-vacuums.png",
            },
            {
              title: "Shop Vacs",
              href: "/tools/cleanup-tools/shop-vacs",
              imgUrl: "/images/tools/shop-vacs.png",
            },
          ],
        },
      ],
      rightImage: {
        imgUrl: "/assets/images/promotion/tools-promo.png",
        href: "/promotions/tools",
      },
    },
  },
  {
    icon: "dumpster",
    title: "Dumpsters",
    href: "/products/dumpsters",
    menuComponent: "MegaMenu1",
    menuData: {
      categories: [
        {
          title: "10-Yard Dumpster",
          href: "/products/dumpsters/10-yard",
          imgUrl: "/images/dumpsters/10-yard.png",
        },
        {
          title: "15-Yard Dumpster",
          href: "/products/dumpsters/15-yard",
          imgUrl: "/images/dumpsters/15-yard.png",
        },
        {
          title: "20-Yard Dumpster",
          href: "/products/dumpsters/20-yard",
          imgUrl: "/images/dumpsters/20-yard.png",
        },
        {
          title: "30-Yard Dumpster",
          href: "/products/dumpsters/30-yard",
          imgUrl: "/images/dumpsters/30-yard.png",
        },
        {
          title: "40-Yard Dumpster",
          href: "/products/dumpsters/40-yard",
          imgUrl: "/images/dumpsters/40-yard.png",
        }
      ],
      rightImage: {
        imgUrl: "/assets/images/promotions/dumpsters-promo.png",
        href: "/promotions/dumpsters",
      },
    },
  },
  {
    icon: "electricity",
    title: "Electrical",
    href: "/products/electrical",
    menuComponent: "MegaMenu1",
    menuData: {
      categories: [
        {
          title: "Portable Generators",
          href: "/products/electrical/generators",
          subCategories: [
            {
              title: "Small Portable Generators",
              href: "/products/electrical/generators/small",
              imgUrl: "/images/electrical-power/small-portable-generators.png",
            },
            {
              title: "Medium Portable Generators",
              href: "/products/electrical/generators/medium",
              imgUrl: "/images/electrical-power/medium-portable-generators.png",
            },
            {
              title: "Inverter Generators",
              href: "/products/electrical/generators/inverter",
              imgUrl: "/images/electrical-power/inverter-generators.png",
            }
          ],
        },
        {
          title: "Trailer-Mounted Generators",
          href: "/products/electrical/trailer-generators",
          subCategories: [
            {
              title: "Diesel Trailer Generators",
              href: "/products/electrical/trailer-generators/diesel",
              imgUrl: "/images/electrical-power/diesel-trailer-generators.png",
            },
            {
              title: "High-Capacity Generators",
              href: "/products/electrical/trailer-generators/high-capacity",
              imgUrl: "/images/electrical-power/high-capacity-generators.png",
            },
            {
              title: "Event Generators",
              href: "/products/electrical/trailer-generators/event",
              imgUrl: "/images/electrical-power/event-generators.png",
            },
            {
              title: "Construction Site Generators",
              href: "/products/electrical/trailer-generators/construction",
              imgUrl: "/images/electrical-power/construction-generators.png",
            },
          ],
        },
        {
          title: "Battery Systems",
          href: "/products/batteries",
          subCategories: [
            {
              title: "Portable Battery Packs",
              href: "/products/electrical/batteries/battery-systems/portable",
              imgUrl: "/images/electrical-power/portable-battery-packs.png",
            },
            {
              title: "Rechargeable Batteries",
              href: "/products/electrical/batteries/rechargeable",
              imgUrl: "/images/electrical-power/rechargeable-batteries.png",
            },
            {
              title: "UPS Systems (Uninterruptible Power Supply)",
              href: "c/batteries/ups",
              imgUrl: "/images/electrical-power/ups-systems.png",
            },
          ],
        },
        {
          title: "Power Distribution",
          href: "/products/electrical/power-distribution",
          subCategories: [
            {
              title: "Temporary Power Boxes",
              href: "/products/electrical/power-distribution/temporary-boxes",
              imgUrl: "/images/electrical-power/temporary-power-boxes.png",
            },
            {
              title: "Extension Cords & Cables",
              href: "/products/electrical/power-distribution/extension-cords",
              imgUrl: "/images/electrical-power/extension-cords.png",
            },
            {
              title: "Load Banks",
              href: "/products/electrical/power-distribution/load-banks",
              imgUrl: "/images/electrical-power/load-banks.png",
            },
            {
              title: "Transfer Switches",
              href: "/products/electrical/power-distribution/transfer-switches",
              imgUrl: "/images/electrical-power/transfer-switches.png",
            },
          ],
        },
      ],
      rightImage: {
        imgUrl: "/assets/images/promotions/electrical-power.png",
        href: "/promotions/electrical-power",
      },
    },
  },
  {
    icon: "lightbulb",
    title: "Lighting Rentals",
    href: "/products/lighting",
    menuComponent: "MegaMenu1",
    menuData: {
      categories: [
        {
          title: "Work & Construction Lighting",
          href: "/products/lighting/construction-lighting",
          subCategories: [
            {
              title: "Light Towers",
              href: "/products/lighting/construction-lighting/light-towers",
              imgUrl: "/images/products/lighting/light-towers.png",
            },
            {
              title: "Portable Work Lights",
              href: "/products/lighting/construction-lighting/portable-lights",
              imgUrl: "/images/products/lighting/portable-lights.png",
            },
            {
              title: "Solar Light Towers",
              href: "/products/lighting/construction-lighting/solar-towers",
              imgUrl: "/images/products/lighting/solar-towers.png",
            },
            {
              title: "Balloon Lights",
              href: "/products/lighting/construction-lighting/balloon-lights",
              imgUrl: "/images/products/lighting/balloon-lights.png",
            },
            {
              title: "Towable Light Towers",
              href: "/products/lighting/construction-lighting/towable-towers",
              imgUrl: "/images/products/lighting/towable-towers.png",
            },
          ],
        },
        {
          title: "Event & Decorative Lighting",
          href: "/products/lighting/event-lighting",
          subCategories: [
            {
              title: "LED Dance Floors",
              href: "/products/lighting/event-lighting/led-dance-floors",
              imgUrl: "/images/products/lighting/led-dance-floors.png",
            },
            {
              title: "Uplighting",
              href: "/products/lighting/event-lighting/uplighting",
              imgUrl: "/images/products/lighting/uplighting.png",
            },
            {
              title: "String & Party Lights",
              href: "/products/lighting/event-lighting/string-party-lights",
              imgUrl: "/images/products/lighting/string-party-lights.png",
            },
            {
              title: "Neon Signs",
              href: "/products/lighting/event-lighting/neon-signs",
              imgUrl: "/images/products/lighting/neon-signs.png",
            },
            {
              title: "Stage Lighting",
              href: "/products/lighting/event-lighting/stage-lighting",
              imgUrl: "/images/products/lighting/stage-lighting.png",
            },
          ],
        },
        {
          title: "Specialty Lighting",
          href: "/products/lighting/specialty-lighting",
          subCategories: [
            {
              title: "Gobo Projectors",
              href: "/products/lighting/specialty-lighting/gobo-projectors",
              imgUrl: "/images/products/lighting/gobo-projectors.png",
            },
            {
              title: "Black Lights",
              href: "/products/lighting/specialty-lighting/black-lights",
              imgUrl: "/images/products/lighting/black-lights.png",
            },
            {
              title: "Stack Lights",
              href: "/products/lighting/specialty-lighting/stack-lights",
              imgUrl: "/images/products/lighting/stack-lights.png",
            },
            {
              title: "Andon Lights",
              href: "/products/lighting/specialty-lighting/andon-lights",
              imgUrl: "/images/products/lighting/andon-lights.png",
            },
            {
              title: "DJ Lighting",
              href: "/products/lighting/specialty-lighting/dj-lighting",
              imgUrl: "/images/products/lighting/dj-lighting.png",
            },
          ],
        },
      ],
      rightImage: {
        imgUrl: "/assets/images/promotions/products/lighting-promo.png",
        href: "/promotions/products/lighting",
      },
    },
  },
  {
    icon: "office",
    title: "Office & Storage Rentals",
    href: "/products/office-storage",
    menuComponent: "MegaMenu1",
    menuData: {
      categories: [
        {
          title: "Office Rentals",
          href: "/products/office-storage/office-rentals",
          subCategories: [
            {
              title: "Mobile Office Trailers",
              href: "/products/office-storage/office-rentals/mobile-trailers",
              imgUrl: "/images/products/office-storage/mobile-trailers.png",
            },
            {
              title: "Portable Office Buildings",
              href: "/products/office-storage/office-rentals/portable-buildings",
              imgUrl: "/images/products/office-storage/portable-buildings.png",
            },
            {
              title: "Construction Office Trailers",
              href: "/products/office-storage/office-rentals/construction-trailers",
              imgUrl:
                "/images/products/office-storage/construction-trailers.png",
            },
            {
              title: "Temporary Office Spaces",
              href: "/products/office-storage/office-rentals/temporary-spaces",
              imgUrl: "/images/products/office-storage/temporary-spaces.png",
            },
          ],
        },
        {
          title: "Storage Containers",
          href: "/products/office-storage/storage-containers",
          subCategories: [
            {
              title: "On-Site Storage Containers",
              href: "/products/office-storage/storage-containers/on-site",
              imgUrl: "/images/products/office-storage/on-site.png",
            },
            {
              title: "Driveway Storage Containers",
              href: "/products/office-storage/storage-containers/driveway",
              imgUrl: "/images/products/office-storage/driveway.png",
            },
            {
              title: "Temporary Storage Containers",
              href: "/products/office-storage/storage-containers/temporary",
              imgUrl: "/images/products/office-storage/temporary.png",
            },
            {
              title: "Large Storage Containers",
              href: "/products/office-storage/storage-containers/large",
              imgUrl: "/images/products/office-storage/large.png",
            },
          ],
        },
        {
          title: "Specialty Office & Storage",
          href: "/products/office-storage/specialty",
          subCategories: [
            {
              title: "Modular Office Trailers",
              href: "/products/office-storage/specialty/modular-trailers",
              imgUrl: "/images/products/office-storage/modular-trailers.png",
            },
            {
              title: "Jobsite Office Trailers",
              href: "/products/office-storage/specialty/jobsite-trailers",
              imgUrl: "/images/products/office-storage/jobsite-trailers.png",
            },
            {
              title: "Portable Office Units",
              href: "/products/office-storage/specialty/portable-units",
              imgUrl: "/images/products/office-storage/portable-units.png",
            },
          ],
        },
      ],
      rightImage: {
        imgUrl: "/assets/images/promotions/products/office-storage-promo.png",
        href: "/promotions/products/office-storage",
      },
    },
  },
  {
    "icon": "platform",
    "title": "Work Platforms",
    "href": "/products/products/work-platforms",
    "menuComponent": "MegaMenu1",
    "menuData": {
        "categories": [
            {
                "title": "Scissor Lifts",
                "href": "/products/work-platforms/scissor-lifts",
                "subCategories": [
                    {
                        "title": "Electric Scissor Lifts",
                        "href": "/products/work-platforms/scissor-lifts/electric",
                        "imgUrl": "/images/products/work-platforms/scissor-lifts-electric.png"
                    },
                    {
                        "title": "Rough Terrain Scissor Lifts",
                        "href": "/products/work-platforms/scissor-lifts/rough-terrain",
                        "imgUrl": "/images/products/work-platforms/scissor-lifts-rough-terrain.png"
                    }
                ]
            },
            {
                "title": "Boom Lifts",
                "href": "/products/work-platforms/boom-lifts",
                "subCategories": [
                    {
                        "title": "Articulating Boom Lifts",
                        "href": "/products/work-platforms/boom-lifts/articulating",
                        "imgUrl": "/images/products/work-platforms/boom-lifts-articulating.png"
                    },
                    {
                        "title": "Telescopic Boom Lifts",
                        "href": "/products/work-platforms/boom-lifts/telescopic",
                        "imgUrl": "/images/products/work-platforms/boom-lifts-telescopic.png"
                    }
                ]
            },
            {
                "title": "Material Lifts",
                "href": "/products/work-platforms/material-lifts",
                "subCategories": [
                    {
                        "title": "Portable Material Lifts",
                        "href": "/products/work-platforms/material-lifts/portable",
                        "imgUrl": "/images/products/work-platforms/material-lifts-portable.png"
                    },
                    {
                        "title": "Heavy-Duty Material Lifts",
                        "href": "/products/work-platforms/material-lifts/heavy-duty",
                        "imgUrl": "/images/products/work-platforms/material-lifts-heavy-duty.png"
                    }
                ]
            },
            {
                "title": "Siding Pump Jacks",
                "href": "/products/work-platforms/siding-pump-jacks",
                "subCategories": [
                    {
                        "title": "Adjustable Pump Jacks",
                        "href": "/products/work-platforms/siding-pump-jacks/adjustable",
                        "imgUrl": "/images/products/work-platforms/siding-pump-jacks-adjustable.png"
                    },
                    {
                        "title": "Heavy-Duty Pump Jacks",
                        "href": "/products/work-platforms/siding-pump-jacks/heavy-duty",
                        "imgUrl": "/images/products/work-platforms/siding-pump-jacks-heavy-duty.png"
                    }
                ]
            },
            {
                "title": "Aerial Platforms",
                "href": "/products/work-platforms/aerial-platforms",
                "subCategories": [
                    {
                        "title": "Push-Around Platforms",
                        "href": "/products/work-platforms/aerial-platforms/push-around",
                        "imgUrl": "/images/products/work-platforms/aerial-platforms-push-around.png"
                    },
                    {
                        "title": "Vertical Mast Lifts",
                        "href": "/products/work-platforms/aerial-platforms/vertical-mast",
                        "imgUrl": "/images/products/work-platforms/aerial-platforms-vertical-mast.png"
                    }
                ]
            }
        ],
        "rightImage": {
            "imgUrl": "/assets/images/promotions/products/work-platforms-promo.png",
            "href": "/promotions/products/work-platforms"
        }
    }
}
,
{
  "icon": "climate-control",
  "title": "Cooling, Heating, Drying, Air Quality",
  "href": "/products/climate",
  "menuComponent": "MegaMenu1",
  "menuData": {
    "categories": [
      {
        "title": "Heaters",
        "href": "/products/climate/heaters",
        "subCategories": [
          {
            "title": "Propane Heaters",
            "href": "/products/climate/heaters/propane",
            "imgUrl": "/images/climate-control/heaters-propane.png"
          },
          {
            "title": "Electric Heaters",
            "href": "/products/climate/heaters/electric",
            "imgUrl": "/images/climate-control/heaters-electric.png"
          },
          {
            "title": "Diesel Heaters",
            "href": "/products/climate/heaters/diesel",
            "imgUrl": "/images/climate-control/heaters-diesel.png"
          },
          {
            "title": "Patio & Tent Heaters",
            "href": "/products/climate/heaters/patio-tent",
            "imgUrl": "/images/climate-control/heaters-patio-tent.png"
          },
          {
            "title": "Construction Heaters",
            "href": "/products/climate/heaters/construction",
            "imgUrl": "/images/climate-control/heaters-construction.png"
          }
        ]
      },
      {
        "title": "Ventilation & Air Movers",
        "href": "/products/climate/ventilation",
        "subCategories": [
          {
            "title": "Fans & Blowers",
            "href": "/products/climate/ventilation/fans-blowers",
            "imgUrl": "/images/climate-control/fans-blowers.png"
          },
          {
            "title": "Air Movers",
            "href": "/products/climate/ventilation/air-movers",
            "imgUrl": "/images/climate-control/air-movers.png"
          },
          {
            "title": "Exhaust Fans",
            "href": "/products/climate/ventilation/exhaust-fans",
            "imgUrl": "/images/climate-control/exhaust-fans.png"
          }
        ]
      },
      {
        "title": "Cooling Equipment",
        "href": "/products/climate/cooling",
        "subCategories": [
          {
            "title": "Evaporative Coolers",
            "href": "/products/climate/cooling/evaporative-coolers",
            "imgUrl": "/images/climate-control/cooling-evaporative.png"
          },
          {
            "title": "Misting Fans",
            "href": "/products/climate/cooling/misting-fans",
            "imgUrl": "/images/climate-control/cooling-misting-fans.png"
          },
          {
            "title": "Portable Air Conditioners",
            "href": "/products/climate/cooling/portable-air-conditioners",
            "imgUrl": "/images/climate-control/cooling-portable-ac.png"
          }
        ]
      },
      {
        "title": "Specialty Climate Equipment",
        "href": "/products/climate/specialty",
        "subCategories": [
          {
            "title": "Ground Thaw Units",
            "href": "/products/climate/specialty/ground-thaw",
            "imgUrl": "/images/climate-control/specialty-ground-thaw.png"
          },
          {
            "title": "Temporary Water Heaters",
            "href": "/products/climate/specialty/temp-water-heaters",
            "imgUrl": "/images/climate-control/specialty-temp-water-heaters.png"
          },
          {
            "title": "Heat Lamps",
            "href": "/products/climate/specialty/heat-lamps",
            "imgUrl": "/images/climate-control/specialty-heat-lamps.png"
          }
        ]
      }
    ],
    "rightImage": {
      "imgUrl": "/assets/images/promotions/products/climate.png",
      "href": "/promotions/climate-control"
    }
  }
},
{
  "icon": "construction",
  "title": "Concrete & Masonry Tools",
  "href": "/products/products/concrete-masonry",
  "menuComponent": "MegaMenu1",
  "menuData": {
    "categories": [
      {
        "title": "Mixing Tools",
        "href": "/products/concrete-masonry-tools/mixing-tools",
        "subCategories": [
          {
            "title": "Mud Mixers",
            "href": "/products/concrete-masonry-tools/mixing-tools/mud-mixers",
            "imgUrl": "/images/products/concrete-masonry/mud-mixer.png"
          },
          {
            "title": "Cement Mixers",
            "href": "/products/concrete-masonry-tools/mixing-tools/cement-mixers",
            "imgUrl": "/images/products/concrete-masonry/cement-mixer.png"
          }
        ]
      },
      {
        "title": "Cutting Tools",
        "href": "/products/concrete-masonry-tools/cutting-tools",
        "subCategories": [
          {
            "title": "Concrete Saws",
            "href": "/products/concrete-masonry-tools/cutting-tools/concrete-saws",
            "imgUrl": "/images/products/concrete-masonry/concrete-saw.png"
          },
          {
            "title": "Core Drills",
            "href": "/products/concrete-masonry-tools/cutting-tools/core-drills",
            "imgUrl": "/images/products/concrete-masonry/core-drill.png"
          }
        ]
      },
      {
        "title": "Grinding & Polishing",
        "href": "/products/concrete-masonry-tools/grinding-polishing",
        "subCategories": [
          {
            "title": "Concrete Grinders",
            "href": "/products/concrete-masonry-tools/grinding-polishing/concrete-grinders",
            "imgUrl": "/images/products/concrete-masonry/concrete-grinder.png"
          },
          {
            "title": "Scarifiers",
            "href": "/products/concrete-masonry-tools/grinding-polishing/scarifiers",
            "imgUrl": "/images/products/concrete-masonry/scarifier.png"
          }
        ]
      },
      {
        "title": "Placement Tools",
        "href": "/products/concrete-masonry-tools/placement-tools",
        "subCategories": [
          {
            "title": "Concrete Buggies",
            "href": "/products/concrete-masonry-tools/placement-tools/concrete-buggies",
            "imgUrl": "/images/products/concrete-masonry/concrete-buggy.png"
          },
          {
            "title": "Power Screeds",
            "href": "/products/concrete-masonry-tools/placement-tools/power-screeds",
            "imgUrl": "/images/products/concrete-masonry/power-screed.png"
          },
          {
            "title": "Trowel Machines",
            "href": "/products/concrete-masonry-tools/placement-tools/trowel-machines",
            "imgUrl": "/images/products/concrete-masonry/trowel-machine.png"
          }
        ]
      },
      {
        "title": "Demolition Tools",
        "href": "/products/concrete-masonry-tools/demolition-tools",
        "subCategories": [
          {
            "title": "Concrete Breakers",
            "href": "/products/concrete-masonry-tools/demolition-tools/concrete-breakers",
            "imgUrl": "/images/products/concrete-masonry/concrete-breaker.png"
          }
        ]
      }
      
    ],
    "rightImage": {
      "imgUrl": "/assets/images/promotions/products/concrete-masonry-tools-promo.png",
      "href": "/promotions/products/concrete-masonry-tools"
    }
  }
},
{
  "icon": "paint-tools",
  "title": "Paint Tools Rental",
  "href": "/products/paint-tools",
  "menuComponent": "MegaMenu1",
  "menuData": {
    "categories": [
      {
        "title": "Paint and Texture Sprayers",
        "href": "/products/paint-tools/paint-texture-sprayers",
        "subCategories": [
          {
            "title": "Medium Duty Paint Sprayer",
            "href": "/products/paint-tools/paint-texture-sprayers/medium-duty",
            "imgUrl": "/images/paint-tools/medium-duty-paint-sprayer.png"
          },
          {
            "title": "PRO Paint Sprayer",
            "href": "/products/paint-tools/paint-texture-sprayers/pro-paint",
            "imgUrl": "/images/paint-tools/pro-paint-sprayer.png"
          },
          {
            "title": "Gun & Hopper",
            "href": "/products/paint-tools/paint-texture-sprayers/gun-and-hopper",
            "imgUrl": "/images/paint-tools/gun-and-hopper.png"
          },
          {
            "title": "Texture Sprayer",
            "href": "/products/paint-tools/paint-texture-sprayers/texture",
            "imgUrl": "/images/paint-tools/texture-sprayer.png"
          },
          {
            "title": "PRO Texture Sprayer",
            "href": "/products/paint-tools/paint-texture-sprayers/pro-texture",
            "imgUrl": "/images/paint-tools/pro-texture-sprayer.png"
          }
        ]
      },
      {
        "title": "Wall Tools",
        "href": "/products/paint-tools/wall-tools",
        "subCategories": [
          {
            "title": "Electric Wallpaper Steamers",
            "href": "/products/paint-tools/wall-tools/electric-wallpaper-steamers",
            "imgUrl": "/images/paint-tools/electric-wallpaper-steamer.png"
          },
          {
            "title": "Drywall Sander",
            "href": "/products/paint-tools/wall-tools/drywall-sander",
            "imgUrl": "/images/paint-tools/drywall-sander.png"
          }
        ]
      }
    ],
    "rightImage": {
      "imgUrl": "/assets/images/promotions/paint-tools.png",
      "href": "/sale-page-paint-tools"
    }
  }
}





];

export default navigations;
