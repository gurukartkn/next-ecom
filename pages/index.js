import Head from "next/head";

import { Product, FooterBanner, HeroBanner } from "../components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ecommerce</title>
        <meta
          name="description"
          content="Ecommerce website generated by create next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroBanner />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {["Product1 ", "Product2"].map((product) => product)}
      </div>
      <FooterBanner />
    </div>
  );
}
