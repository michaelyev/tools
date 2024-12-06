// FOLLOWING CODES ARE MOCK SERVER IMPLEMENTATION
// YOU NEED TO BUILD YOUR OWN SERVER
// IF YOU NEED HELP ABOUT SERVER SIDE IMPLEMENTATION
// CONTACT US AT support@ui-lib.com
import type MockAdapter from "axios-mock-adapter";
import { shuffle } from "lodash";
import { productList, slugs } from "./data";

export const productApiEndpoints = (Mock: MockAdapter) => {
  Mock.onGet("/api/products").reply(async (config) => {
    try {
      const page = config.params?.page || 1;
      const pageSize = config.params?.pageSize || 28;
      const reversedOrder = productList.reverse();
      const products = reversedOrder.slice((page - 1) * pageSize, page * pageSize);

      const meta = {
        page,
        pageSize,
        total: reversedOrder.length,
        totalPage: Math.ceil(reversedOrder.length / pageSize)
      };

      return [200, { meta, result: products }];
    } catch (err) {
      console.error(err);
      return [500, { message: "Internal server error" }];
    }
  });

  // single product based on slug
  Mock.onGet("/api/products/slug").reply(async (config) => {
    try {
      if (config?.params?.slug) {
        const product = productList.find((item) => item.slug === config.params.slug);
        return [200, product];
      }

      return [200, shuffle(productList)[0]];
    } catch (err) {
      console.error(err);
      return [500, { message: "Internal server error" }];
    }
  });

  //all products slug list
  Mock.onGet("/api/products/slug-list").reply(async () => {
    try {
      return [200, slugs];
    } catch (err) {
      console.error(err);
      return [500, { message: "Internal server error" }];
    }
  });
};
