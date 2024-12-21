const navigations = [
  {
    icon: "dress",
    title: "Earthmoving",
    href: "/earthmoving",
    menuComponent: "MegaMenu1",
    menuData: {
      categories: [
        {
          title: "Skid Steers",
          href: "/rental/skid-steers",
          subCategories: [
            {
              title: "Compact",
              href: "/rental/skid-steer/compact",
              imgUrl: "/images/skid-steer/compact.png",
            },
            {
              title: "Mini",
              href: "/rental/skid-steer/mini",
              imgUrl: "/images/skid-steer/mini.png",
            },
            {
              title: "Walk-Behind",
              href: "/rental/skid-steer/walk-behind",
              imgUrl: "/images/skid-steer/walk-behind.png",
            },
            {
              title: "Track",
              href: "/rental/skid-steer/track",
              imgUrl: "/images/skid-steer/track.png",
            },
            {
              title: "Wheeled",
              href: "/rental/skid-steer/wheeled",
              imgUrl: "/images/skid-steer/wheeled.png",
            },
          ],
        },
        {
          title: "Excavator Rentals",
          href: "/rental/excavators",
          subCategories: [
            {
              title: "Mini Excavators",
              href: "/rental/excavators/mini",
              imgUrl: "/images/excavators/mini.png",
            },
            {
              title: "Standard Excavators",
              href: "/rental/excavators/standard",
              imgUrl: "/images/excavators/standard.png",
            },
            {
              title: "Long Reach Excavators",
              href: "/rental/excavators/long-reach",
              imgUrl: "/images/excavators/long-reach.png",
            },
            {
              title: "Specialty Excavators",
              href: "/rental/excavators/specialty",
              imgUrl: "/images/excavators/specialty.png",
            },
            {
              title: "Excavator Attachments",
              href: "/rental/excavators/attachments",
              imgUrl: "/images/excavators/attachments.png",
            },
          ],
        },
        {
          title: "Backhoes",
          href: "/rental/backhoes",
          subCategories: [
            {
              title: "Backhoe Attachments",
              href: "/rental/backhoes/attachments",
              imgUrl: "/images/backhoes/attachments.png",
            },
            {
              title: "Mini Backhoes",
              href: "/rental/backhoes/mini",
              imgUrl: "/images/backhoes/mini.png",
            },
            {
              title: "Midsize Backhoes",
              href: "/rental/backhoes/midsize",
              imgUrl: "/images/backhoes/midsize.png",
            },
            {
              title: "Standard Backhoes",
              href: "/rental/backhoes/standard",
              imgUrl: "/images/backhoes/standard.png",
            },
            {
              title: "Extendahoe Backhoes",
              href: "/rental/backhoes/extendahoe",
              imgUrl: "/images/backhoes/extendahoe.png",
            },
          ],
        },

        {
          title: "Trenchers",
          href: "/rental/trenchers",
          subCategories: [
            {
              title: "Walk-Behind Trenchers",
              href: "/rental/trenchers/walk-behind",
              imgUrl: "/images/trenchers/walk-behind.png",
            },
            {
              title: "Ride-On Trenchers",
              href: "/rental/trenchers/ride-on",
              imgUrl: "/images/trenchers/ride-on.png",
            },
            {
              title: "Skid Steer Trenchers",
              href: "/rental/trenchers/skid-steer",
              imgUrl: "/images/trenchers/skid-steer.png",
            },
            {
              title: "Mini Trenchers",
              href: "/rental/trenchers/mini",
              imgUrl: "/images/trenchers/mini.png",
            },
            {
              title: "Specialty Trenchers",
              href: "/rental/trenchers/specialty",
              imgUrl: "/images/trenchers/specialty.png",
            },
          ],
        },
        {
          title: "Wheel Loaders",
          href: "/rental/wheel-loaders",
          subCategories: [
            {
              title: "Compact Wheel Loaders",
              href: "/rental/wheel-loaders/compact",
              imgUrl: "/images/wheel-loaders/compact.png",
            },
            {
              title: "Articulating Wheel Loaders",
              href: "/rental/wheel-loaders/articulating",
              imgUrl: "/images/wheel-loaders/articulating.png",
            },
            {
              title: "Mini Wheel Loaders",
              href: "/rental/wheel-loaders/mini",
              imgUrl: "/images/wheel-loaders/mini.png",
            },
            {
              title: "Front End Loaders",
              href: "/rental/wheel-loaders/front-end",
              imgUrl: "/images/wheel-loaders/front-end.png",
            },
            {
              title: "Specialty Wheel Loaders",
              href: "/rental/wheel-loaders/specialty",
              imgUrl: "/images/wheel-loaders/specialty.png",
            },
          ],
        },
        {
          title: "Bulldozers",
          href: "/rental/bulldozers",
          subCategories: [
            {
              title: "Mini Bulldozers",
              href: "/rental/bulldozers/mini",
              imgUrl: "/images/bulldozers/mini.png",
            },
            {
              title: "Small Bulldozers",
              href: "/rental/bulldozers/small",
              imgUrl: "/images/bulldozers/small.png",
            },
            {
              title: "Standard Bulldozers",
              href: "/rental/bulldozers/standard",
              imgUrl: "/images/bulldozers/standard.png",
            },
            {
              title: "Large Bulldozers",
              href: "/rental/bulldozers/large",
              imgUrl: "/images/bulldozers/large.png",
            },
            {
              title: "Specialty Bulldozers",
              href: "/rental/bulldozers/specialty",
              imgUrl: "/images/bulldozers/specialty.png",
            },
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
    href: "/rental/trailers",
    menuComponent: "MegaMenu1",
    menuData: {
      categories: [
        {
          title: "Utility Trailers",
          href: "/rental/trailers/utility",
          subCategories: [
            {
              title: "Small Utility Trailers",
              href: "/rental/trailers/utility/small",
              imgUrl: "/assets/images/trailers/small-utility.png",
            },
            {
              title: "Flatbed Trailers",
              href: "/rental/trailers/utility/flatbed",
              imgUrl: "/assets/images/trailers/flatbed.png",
            },
            {
              title: "Dump Trailers",
              href: "/rental/trailers/utility/dump",
              imgUrl: "/assets/images/trailers/dump.png",
            },
          ],
        },
        {
          title: "Enclosed Trailers",
          href: "/rental/trailers/enclosed",
          subCategories: [
            {
              title: "Cargo Trailers",
              href: "/rental/trailers/enclosed/cargo",
              imgUrl: "/assets/images/trailers/cargo.png",
            },
            {
              title: "Refrigerated Trailers",
              href: "/rental/trailers/enclosed/refrigerated",
              imgUrl: "/assets/images/trailers/refrigerated.png",
            },
            {
              title: "Storage Trailers",
              href: "/rental/trailers/enclosed/storage",
              imgUrl: "/assets/images/trailers/storage.png",
            },
          ],
        },
        {
          title: "Vehicle Trailers",
          href: "/rental/trailers/vehicle",
          subCategories: [
            {
              title: "Car Hauler Trailers",
              href: "/rental/trailers/vehicle/car-hauler",
              imgUrl: "/assets/images/trailers/car-hauler.png",
            },
            {
              title: "Motorcycle Trailers",
              href: "/rental/trailers/vehicle/motorcycle",
              imgUrl: "/assets/images/trailers/motorcycle.png",
            },
            {
              title: "Tow Trailers",
              href: "/rental/trailers/vehicle/tow",
              imgUrl: "/assets/images/trailers/tow.png",
            },
          ],
        },
        {
          title: "Heavy-Duty Trailers",
          href: "/rental/trailers/heavy-duty",
          subCategories: [
            {
              title: "Gooseneck Trailers",
              href: "/rental/trailers/heavy-duty/gooseneck",
              imgUrl: "/assets/images/trailers/gooseneck.png",
            },
            {
              title: "Lowboy Trailers",
              href: "/rental/trailers/heavy-duty/lowboy",
              imgUrl: "/assets/images/trailers/lowboy.png",
            },
            {
              title: "Flatbed Trailers",
              href: "/rental/trailers/heavy-duty/flatbed",
              imgUrl: "/assets/images/trailers/flatbed-heavy.png",
            },
          ],
        },
        {
          title: "Specialty Trailers",
          href: "/rental/trailers/specialty",
          subCategories: [
            {
              title: "Dry Van Trailers",
              href: "/rental/trailers/specialty/dry-van",
              imgUrl: "/assets/images/trailers/dry-van.png",
            },
            {
              title: "Reefer Trailers",
              href: "/rental/trailers/specialty/reefer",
              imgUrl: "/assets/images/trailers/reefer.png",
            },
            {
              title: "Forklift Trailers",
              href: "/rental/trailers/specialty/forklift",
              imgUrl: "/assets/images/trailers/forklift.png",
            },
          ],
        },
      ],
      bottomImage: {
        imgUrl: "/assets/images/promotion/offer-5.png",
        href: "/",
      },
    },
  },
  {
    icon: "forklift",
    title: "Forklifts",
    href: "/rental/forklifts",
    menuComponent: "MegaMenu2",
    menuData: [
      {
        icon: "indoor",
        title: "Indoor Forklifts",
        href: "/rental/forklifts/indoor",
        megaMenu: "MegaMenu1",
        menuData: {
          categories: [
            {
              title: "Warehouse Forklifts",
              href: "/rental/forklifts/warehouse",
              subCategories: [
                {
                  title: "Standard Warehouse",
                  href: "/rental/forklifts/warehouse/standard",
                  imgUrl: "/assets/images/forklifts/warehouse.png",
                },
                {
                  title: "Compact Warehouse",
                  href: "/rental/forklifts/warehouse/compact",
                  imgUrl: "/assets/images/forklifts/compact.png",
                },
              ],
            },
            {
              title: "Walkie Stackers",
              href: "/rental/forklifts/walkie-stackers",
              subCategories: [
                {
                  title: "Electric Walkie",
                  href: "/rental/forklifts/walkie-stackers/electric",
                  imgUrl: "/assets/images/forklifts/walkie-electric.png",
                },
                {
                  title: "Manual Walkie",
                  href: "/rental/forklifts/walkie-stackers/manual",
                  imgUrl: "/assets/images/forklifts/walkie-manual.png",
                },
              ],
            },
          ],
        },
      },
      {
        icon: "outdoor",
        title: "Outdoor Forklifts",
        href: "/rental/forklifts/outdoor",
        megaMenu: "MegaMenu2",
        menuData: {
          categories: [
            {
              title: "Rough Terrain",
              href: "/rental/forklifts/rough-terrain",
              subCategories: [
                {
                  title: "4x4 Rough Terrain",
                  href: "/rental/forklifts/rough-terrain/4x4",
                  imgUrl: "/assets/images/forklifts/rough-terrain.png",
                },
                {
                  title: "Diesel Rough Terrain",
                  href: "/rental/forklifts/rough-terrain/diesel",
                  imgUrl: "/assets/images/forklifts/diesel.png",
                },
              ],
            },
            {
              title: "Telehandlers",
              href: "/rental/forklifts/telehandlers",
              subCategories: [
                {
                  title: "Rotating Telehandler",
                  href: "/rental/forklifts/telehandlers/rotating",
                  imgUrl: "/assets/images/forklifts/telehandler.png",
                },
                {
                  title: "Fixed Boom Telehandler",
                  href: "/rental/forklifts/telehandlers/fixed-boom",
                  imgUrl: "/assets/images/forklifts/fixed-boom.png",
                },
              ],
            },
          ],
        },
      },
      {
        icon: "versatile",
        title: "Versatile Forklifts",
        href: "/rental/forklifts/versatile",
        megaMenu: "MegaMenu2",
        menuData: {
          categories: [
            {
              title: "Counterbalance Forklifts",
              href: "/rental/forklifts/counterbalance",
              subCategories: [
                {
                  title: "Electric Counterbalance",
                  href: "/rental/forklifts/counterbalance/electric",
                  imgUrl:
                    "/assets/images/forklifts/counterbalance-electric.png",
                },
                {
                  title: "Diesel Counterbalance",
                  href: "/rental/forklifts/counterbalance/diesel",
                  imgUrl: "/assets/images/forklifts/counterbalance-diesel.png",
                },
              ],
            },
          ],
        },
      },
      {
        icon: "specialized",
        title: "Specialized Forklifts",
        href: "/rental/forklifts/specialized",
        megaMenu: "MegaMenu1",
        menuData: {
          categories: [
            {
              title: "Side Loaders",
              href: "/rental/forklifts/side-loaders",
              subCategories: [
                {
                  title: "Standard Side Loaders",
                  href: "/rental/forklifts/side-loaders/standard",
                  imgUrl: "/assets/images/forklifts/side-loader.png",
                },
              ],
            },
            {
              title: "Narrow-Aisle Forklifts",
              href: "/rental/forklifts/narrow-aisle",
              subCategories: [
                {
                  title: "Reach Trucks",
                  href: "/rental/forklifts/narrow-aisle/reach-trucks",
                  imgUrl: "/assets/images/forklifts/reach-truck.png",
                },
              ],
            },
          ],
        },
      },
    ],
  },
  {
    icon: "compactor",
    title: "Compaction Equipment",
    href: "/rental/compaction-equipment",
    menuComponent: "MegaMenu2",
    menuData: [
      {
        icon: "plate",
        title: "Plate Compactors",
        href: "/rental/compaction-equipment/plate-compactors",
        megaMenu: "MegaMenu1",
        menuData: {
          categories: [
            {
              title: "Standard Plate Compactors",
              href: "/rental/compaction-equipment/plate-compactors/standard",
              subCategories: [
                {
                  title: "Vibratory Plate Compactors",
                  href: "/rental/compaction-equipment/plate-compactors/vibratory",
                  imgUrl: "/assets/images/compaction/plate-vibratory.png",
                },
                {
                  title: "Reversible Plate Compactors",
                  href: "/rental/compaction-equipment/plate-compactors/reversible",
                  imgUrl: "/assets/images/compaction/plate-reversible.png",
                },
              ],
            },
          ],
        },
      },
      {
        icon: "jumping-jack",
        title: "Jumping Jack Compactors",
        href: "/rental/compaction-equipment/jumping-jack",
        megaMenu: "MegaMenu2",
        menuData: {
          categories: [
            {
              title: "Rammer Compactors",
              href: "/rental/compaction-equipment/jumping-jack/rammers",
              subCategories: [
                {
                  title: "Standard Rammers",
                  href: "/rental/compaction-equipment/jumping-jack/rammers/standard",
                  imgUrl: "/assets/images/compaction/jumping-jack-standard.png",
                },
              ],
            },
          ],
        },
      },
      {
        icon: "roller",
        title: "Roller Compactors",
        href: "/rental/compaction-equipment/rollers",
        megaMenu: "MegaMenu1",
        menuData: {
          categories: [
            {
              title: "Vibratory Rollers",
              href: "/rental/compaction-equipment/rollers/vibratory",
              subCategories: [
                {
                  title: "Smooth Drum Rollers",
                  href: "/rental/compaction-equipment/rollers/vibratory/smooth-drum",
                  imgUrl: "/assets/images/compaction/roller-smooth-drum.png",
                },
                {
                  title: "Padfoot Rollers",
                  href: "/rental/compaction-equipment/rollers/vibratory/padfoot",
                  imgUrl: "/assets/images/compaction/roller-padfoot.png",
                },
              ],
            },
          ],
        },
      },
      {
        icon: "trash",
        title: "Trash Compactors",
        href: "/rental/compaction-equipment/trash-compactors",
        megaMenu: "MegaMenu2",
        menuData: {
          categories: [
            {
              title: "Industrial Trash Compactors",
              href: "/rental/compaction-equipment/trash-compactors/industrial",
              subCategories: [
                {
                  title: "Portable Trash Compactors",
                  href: "/rental/compaction-equipment/trash-compactors/portable",
                  imgUrl: "/assets/images/compaction/trash-portable.png",
                },
                {
                  title: "Freestanding Trash Compactors",
                  href: "/rental/compaction-equipment/trash-compactors/freestanding",
                  imgUrl: "/assets/images/compaction/trash-freestanding.png",
                },
              ],
            },
          ],
        },
      },
      {
        icon: "trench",
        title: "Trench Compactors",
        href: "/rental/compaction-equipment/trench-compactors",
        megaMenu: "MegaMenu1",
        menuData: {
          categories: [
            {
              title: "Walk-Behind Trench Compactors",
              href: "/rental/compaction-equipment/trench-compactors/walk-behind",
              subCategories: [
                {
                  title: "Smooth Drum",
                  href: "/rental/compaction-equipment/trench-compactors/walk-behind/smooth-drum",
                  imgUrl: "/assets/images/compaction/trench-smooth-drum.png",
                },
                {
                  title: "Padfoot",
                  href: "/rental/compaction-equipment/trench-compactors/walk-behind/padfoot",
                  imgUrl: "/assets/images/compaction/trench-padfoot.png",
                },
              ],
            },
          ],
        },
      },
    ],
  },
  {
    icon: "saw",
    title: "Saws",
    href: "/rental/saws",
    menuComponent: "MegaMenu1",
    menuData: {
      categories: [
        {
          title: "Concrete Saws",
          href: "/rental/saws/concrete",
          subCategories: [
            {
              title: "Electric Concrete Saws",
              href: "/rental/saws/concrete/electric",
              imgUrl: "/images/saws/concrete-electric.png",
            },
            {
              title: "Gas Concrete Saws",
              href: "/rental/saws/concrete/gas",
              imgUrl: "/images/saws/concrete-gas.png",
            },
            {
              title: "Walk-Behind Floor Saws",
              href: "/rental/saws/concrete/floor",
              imgUrl: "/images/saws/concrete-floor.png",
            },
          ],
        },
        {
          title: "Tile and Masonry Saws",
          href: "/rental/saws/tile-masonry",
          subCategories: [
            {
              title: "Tile Saws",
              href: "/rental/saws/tile-masonry/tile",
              imgUrl: "/images/saws/tile.png",
            },
            {
              title: "Brick and Paver Saws",
              href: "/rental/saws/tile-masonry/brick-paver",
              imgUrl: "/images/saws/brick-paver.png",
            },
          ],
        },
        {
          title: "Chainsaws and Pole Saws",
          href: "/rental/saws/chainsaws-polesaws",
          subCategories: [
            {
              title: "Chainsaws",
              href: "/rental/saws/chainsaws-polesaws/chainsaws",
              imgUrl: "/images/saws/chainsaws.png",
            },
            {
              title: "Pole Saws",
              href: "/rental/saws/chainsaws-polesaws/polesaws",
              imgUrl: "/images/saws/polesaws.png",
            },
          ],
        },
        {
          title: "Circular and Reciprocating Saws",
          href: "/rental/saws/circular-reciprocating",
          subCategories: [
            {
              title: "Circular Saws",
              href: "/rental/saws/circular-reciprocating/circular",
              imgUrl: "/images/saws/circular.png",
            },
            {
              title: "Reciprocating Saws",
              href: "/rental/saws/circular-reciprocating/reciprocating",
              imgUrl: "/images/saws/reciprocating.png",
            },
          ],
        },
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
    href: "/general-tools",
    menuComponent: "MegaMenu1",
    menuData: {
      categories: [
        {
          title: "Hand Tools",
          href: "/general-tools/hand-tools",
          subCategories: [
            {
              title: "Cutting Tools",
              href: "/general-tools/hand-tools/cutting-tools",
              imgUrl: "/images/general-tools/cutting-tools.png",
            },
            {
              title: "Fastening Tools",
              href: "/general-tools/hand-tools/fastening-tools",
              imgUrl: "/images/general-tools/fastening-tools.png",
            },
            {
              title: "Measuring Tools",
              href: "/general-tools/hand-tools/measuring-tools",
              imgUrl: "/images/general-tools/measuring-tools.png",
            },
            {
              title: "Wrenches & Ratchets",
              href: "/general-tools/hand-tools/wrenches",
              imgUrl: "/images/general-tools/wrenches.png",
            },
            {
              title: "Hammers & Mallets",
              href: "/general-tools/hand-tools/hammers",
              imgUrl: "/images/general-tools/hammers.png",
            },
          ],
        },
        {
          title: "Power Tools",
          href: "/general-tools/power-tools",
          subCategories: [
            {
              title: "Drills & Drivers",
              href: "/general-tools/power-tools/drills",
              imgUrl: "/images/general-tools/drills.png",
            },
            {
              title: "Saws",
              href: "/general-tools/power-tools/saws",
              imgUrl: "/images/general-tools/saws.png",
            },
            {
              title: "Grinders & Sanders",
              href: "/general-tools/power-tools/grinders-sanders",
              imgUrl: "/images/general-tools/grinders-sanders.png",
            },
            {
              title: "Vacuum Systems",
              href: "/general-tools/power-tools/vacuum-systems",
              imgUrl: "/images/general-tools/vacuum-systems.png",
            },
          ],
        },
        {
          title: "Measuring Tools",
          href: "/general-tools/measuring-tools",
          subCategories: [
            {
              title: "Laser Levels",
              href: "/general-tools/measuring-tools/laser-levels",
              imgUrl: "/images/general-tools/laser-levels.png",
            },
            {
              title: "Measuring Tapes",
              href: "/general-tools/measuring-tools/measuring-tapes",
              imgUrl: "/images/general-tools/measuring-tapes.png",
            },
            {
              title: "Stud Finders",
              href: "/general-tools/measuring-tools/stud-finders",
              imgUrl: "/images/general-tools/stud-finders.png",
            },
          ],
        },
        {
          title: "Demolition Tools",
          href: "/general-tools/demolition-tools",
          subCategories: [
            {
              title: "Jack Hammers",
              href: "/general-tools/demolition-tools/jack-hammers",
              imgUrl: "/images/general-tools/jack-hammers.png",
            },
            {
              title: "Electric Breakers",
              href: "/general-tools/demolition-tools/electric-breakers",
              imgUrl: "/images/general-tools/electric-breakers.png",
            },
          ],
        },
        {
          title: "Fastening Tools",
          href: "/general-tools/fastening-tools",
          subCategories: [
            {
              title: "Screwdrivers",
              href: "/general-tools/fastening-tools/screwdrivers",
              imgUrl: "/images/general-tools/screwdrivers.png",
            },
            {
              title: "Nail Guns",
              href: "/general-tools/fastening-tools/nail-guns",
              imgUrl: "/images/general-tools/nail-guns.png",
            },
            {
              title: "Staple Guns",
              href: "/general-tools/fastening-tools/staple-guns",
              imgUrl: "/images/general-tools/staple-guns.png",
            },
          ],
        },
        {
          title: "Cutting Tools",
          href: "/general-tools/cutting-tools",
          subCategories: [
            {
              title: "Bolt Cutters",
              href: "/general-tools/cutting-tools/bolt-cutters",
              imgUrl: "/images/general-tools/bolt-cutters.png",
            },
            {
              title: "Utility Knives",
              href: "/general-tools/cutting-tools/utility-knives",
              imgUrl: "/images/general-tools/utility-knives.png",
            },
            {
              title: "Hand Saws",
              href: "/general-tools/cutting-tools/hand-saws",
              imgUrl: "/images/general-tools/hand-saws.png",
            },
          ],
        },
        {
          title: "Specialty Tools",
          href: "/general-tools/specialty-tools",
          subCategories: [
            {
              title: "Paint Sprayers",
              href: "/general-tools/specialty-tools/paint-sprayers",
              imgUrl: "/images/general-tools/paint-sprayers.png",
            },
            {
              title: "Heat Guns",
              href: "/general-tools/specialty-tools/heat-guns",
              imgUrl: "/images/general-tools/heat-guns.png",
            },
            {
              title: "Rotary Hammers",
              href: "/general-tools/specialty-tools/rotary-hammers",
              imgUrl: "/images/general-tools/rotary-hammers.png",
            },
          ],
        },
        {
          title: "Vacuum & Cleanup Tools",
          href: "/general-tools/cleanup-tools",
          subCategories: [
            {
              title: "Wet/Dry Vacuums",
              href: "/general-tools/cleanup-tools/wet-dry-vacuums",
              imgUrl: "/images/general-tools/wet-dry-vacuums.png",
            },
            {
              title: "Shop Vacs",
              href: "/general-tools/cleanup-tools/shop-vacs",
              imgUrl: "/images/general-tools/shop-vacs.png",
            },
          ],
        },
      ],
      rightImage: {
        imgUrl: "/assets/images/promotion/general-tools-promo.png",
        href: "/promotions/general-tools",
      },
    },
  },
  {
    icon: "dumpster",
    title: "Dumpsters",
    href: "/dumpsters",
    menuComponent: "MegaMenu1",
    menuData: {
      categories: [
        {
          title: "All Dumpsters",
          href: "/dumpsters/options",
          subCategories: [
            {
              title: "10-Yard Dumpster",
              href: "/dumpsters/10-yard",
              imgUrl: "/images/dumpsters/10-yard.png",
            },
            {
              title: "15-Yard Dumpster",
              href: "/dumpsters/15-yard",
              imgUrl: "/images/dumpsters/15-yard.png",
            },
            {
              title: "20-Yard Dumpster",
              href: "/dumpsters/20-yard",
              imgUrl: "/images/dumpsters/20-yard.png",
            },
            {
              title: "30-Yard Dumpster",
              href: "/dumpsters/30-yard",
              imgUrl: "/images/dumpsters/30-yard.png",
            },
            {
              title: "40-Yard Dumpster",
              href: "/dumpsters/40-yard",
              imgUrl: "/images/dumpsters/40-yard.png",
            },
          ],
        },
      ],
      rightImage: {
        imgUrl: "/assets/images/promotions/dumpsters-promo.png",
        href: "/promotions/dumpsters",
      },
    },
  },

  {
    icon: "track",
    title: "Pets",
    href: "/product/search/pets",
    menuComponent: "MegaMenu1",
  },
  {
    icon: "teddy-bear",
    title: "Baby Toys",
    href: "/product/search/baby-toys",
    menuComponent: "MegaMenu1",
  },
  {
    icon: "food",
    title: "Groceries",
    href: "/product/search/groceries",
    menuComponent: "MegaMenu1",
  },
  {
    icon: "car",
    title: "Automotive",
    href: "/product/search/automotive",
    menuComponent: "MegaMenu1",
  },
];

export default navigations;
