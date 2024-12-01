// API FUNCTIONS
import api from "@utils/__api__/market-1";
import api2 from "@utils/__api__/fashion-1";
import api3 from "@utils/__api__/gadget";

// PAGE SECTION COMPONENTS
import Section1 from "@sections/market-1/Section1";
import Section2 from "@sections/market-1/Section2";
import Section3 from "@sections/market-1/Section3";
import Section4 from "@sections/market-1/Section4";
import Section5 from "@sections/market-1/Section5";
import Section6 from "@sections/market-1/Section6";
import Section7 from "@sections/market-1/Section7";
import Section8 from "@sections/market-1/Section8";
import Section10 from "@sections/market-1/Section10";
import Section11 from "@sections/market-1/Section11";
import Section12 from "@sections/market-1/Section12";
import Section13 from "@sections/market-1/Section13";


export default async function Home() {
  const carList = await api.getCarList();
  const carBrands = await api.getCarBrands();
  const mobileList = await api.getMobileList();
  const opticsList = await api.getOpticsList();
  const mobileShops = await api.getMobileShops();
  const opticsShops = await api.getOpticsShops();
  const mobileBrands = await api.getMobileBrands();
  const opticsBrands = await api.getOpticsBrands();
  const trendingItems = await api2.getTrendingItems();
  const blogLists = await api3.getBlogLists();

  return (
    <main>
      {/* HERO CAROUSEL AREA */}
      <Section1 />

      {/* CATEGORIES AREA */}
      <Section10 />

      {/* FLASH DEAL PRODUCTS AREA */}
      <Section2 />

      {/* TOP RATING AND BRANDS AREA */}
      <Section4 />

      {/* NEW ARRIVALS AREA */}
      <Section5 />

      {/* BIG DISCOUNT AREA */}
      <Section13 />

      {/* CAR LIST AREA */}
      <Section6 carBrands={carBrands} carList={carList} />
      {/* DISCOUNT BANNERS AREA */}
      <Section8 />
      {/* MOBILE PHONES AREA */}
      <Section7
        shops={mobileShops}
        brands={mobileBrands}
        title="Mobile Phones"
        productList={mobileList}
      />

      {/* TRENDING PRODUCTS AREA */}
      {/* <TopTrending products={trendingItems} /> */}

      {/* MORE PRODUCTS AREA */}
      <Section11 />

      {/* TOP CATEGORIES AREA */}
      <Section3 />

      
      

      {/* SERVICES AREA */}
      <Section12 />
    </main>
  );
}