import { getServerSession } from 'next-auth';

import api from "@utils/__api__/market-1";
import api2 from "@utils/__api__/fashion-1";
import api3 from "@utils/__api__/gadget";

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

import Facts from "@component/facts/Facts";
import { getProducts } from "@utils/data_fetch/allTools";
import Projects from "@component/Orders/Projects";
import { authOptions } from './api/auth/[...nextauth]/route';
import { fetchAllProjects } from '@utils/data_fetch/projectFetch';

export default async function Home() {
  const session = await getServerSession(authOptions);
  const user = session?.user || null;

  const data = await getProducts({ page: 1, pageSize: 6 });
  const projects = await fetchAllProjects()

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
      <Section1 />
      <Facts />
      <Section10 />

      {/* Projects from DB */}
      <Projects user={user} projects={projects} />

      <Section2 />
      <Section4 />
      <Section5 />
      <Section13 />

      <Section7
        shops={mobileShops}
        brands={mobileBrands}
        title="Excavators"
        productCategory="earthmoving"
        productList={mobileList}
      />

      <Section8 />

      <Section7
        shops={mobileShops}
        brands={mobileBrands}
        title="Mobile Phones"
        productList={mobileList}
      />

      <Section11 />
      <Section3 />
      <Section12 />
    </main>
  );
}
