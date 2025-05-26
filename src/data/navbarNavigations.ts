const navbarNavigations = [
  { title: "Home", url: "/" },
  { title: "All Items", url: "/products" },
  {
    title: "Pages",
    child: [
      {
        title: "Sale Page",
        child: [
          { title: "Version 1", url: "/sale-page-1" },
          { title: "Version 2", url: "/sale-page-2" },
        ],
      },
      {
        title: "Vendor",
        child: [
          { title: "All vendors", url: "/shops" },
          { title: "Vendor store", url: "/shops/scarlett-beauty" },
        ],
      },
      {
        title: "Shop",
        child: [
          { title: "Search product", url: "/product/search/mobile phone" },
          { title: "Single product", url: "/product/lord-2019" },
          { title: "Cart", url: "/cart" },
          { title: "Checkout", url: "/checkout" },
          { title: "Alternative Checkout", url: "/checkout-alternative" },
        ],
      },
      {
        title: "Auth",
        child: [
          { title: "Sign In", url: "/login" },
          { title: "Sign Up", url: "/signup" },
        ],
      },
    ],
  },
  {
    title: "Vendor Account",
    child: [
      { title: "Dashboard", url: "/vendor/dashboard" },
      {
        title: "Products",
        child: [
          { title: "All products", url: "/vendor/products" },
          { title: "Add/Edit product", url: "/vendor/products/248104" },
        ],
      },
      {
        title: "Orders",
        child: [
          { title: "All orders", url: "/vendor/orders" },
          { title: "Order details", url: "/vendor/orders/248104" },
        ],
      },
      { title: "Profile", url: "/vendor/account-settings" },
    ],
  },
  { title: "Track My Orders", url: "/orders" },
  // {
  //   title: "Documentation",
  //   url:
  //     "https://docs.google.com/document/d/13Bnyugzcty75hzi9GdbVh01YV75a7AhViZws0qGf5yo/edit?usp=sharing",
  //   extLink: true,
  // },
];

export default navbarNavigations;
