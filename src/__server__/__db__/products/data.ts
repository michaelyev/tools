import dbProducts from "@data/db";
import { products as gift } from "../gift/data";
import { products as gadget } from "../gadget/data";
import { products as market1 } from "../market-1/data";
import { products as market2 } from "../market-2/data";
import { products as fashion1 } from "../fashion-1/data";
import { products as fashion2 } from "../fashion-2/data";
import { products as fashion3 } from "../fashion-3/data";
import { products as grocery1 } from "../grocery-1/data";
import { products as grocery2 } from "../grocery-2/data";
import { products as grocery3 } from "../grocery-3/data";
import { products as furniture } from "../furniture/data";
import { products as healthBeauty } from "../health-beauty/data";
import {
  relatedProducts,
  frequentlyBoughtData,
} from "../related-products/data";

// all used products in the bazaar template
const productList = [
  ...dbProducts/* ,
  ...gift,
  ...gadget,
  ...market1,
  ...market2,
  ...fashion1,
  ...fashion2,
  ...fashion3,
  ...grocery1,
  ...grocery2,
  ...grocery3,
  ...furniture,
  ...healthBeauty,
  ...relatedProducts,
  ...frequentlyBoughtData */
];

// get the all slugs
const slugs = productList.map((item) => ({ params: { slug: item.slug } }));

export { productList, slugs };

