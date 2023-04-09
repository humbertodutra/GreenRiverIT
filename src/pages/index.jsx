import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import HeroArea from "@containers/hero/layout-12";

import { normalizedData } from "@utils/methods";
import AboutArea from "@containers/about/layout-02";
import { Link, Element } from "react-scroll";

// Demo Data
import homepageData from "../data/homepages/home-12.json";
import homepageDataPT from "../data/homepages/home-12-pt.json";
import productData from "../data/products.json";
// import sellerData from "../data/sellers.json";
// import collectionsData from "../data/collections.json";
import aboutData from "../data/innerpages/about.json";
import Particles from "@ui/particles";
import ServiceArea from "@containers/services/layout-01";
import BlogArea from "@components/blogArea";
import Contact from "@components/user-dropdown/contact";
import getConfig from "next/config";
import { useIntl } from "react-intl";
import React, { useState } from "react";
import { set } from "react-hook-form";

export async function getStaticProps() {
  return {
    props: { className: "template-color-1 nft-body-connect" },
  };
}

const Home = () => {
  const [locale, setLocale] = useState("pt-BR");
  
  let contentData = homepageDataPT;
  
  if (locale === "en-US") {
    contentData = homepageData;
  }else if (locale === "pt-BR") {
    contentData = homepageDataPT;}
  
  const content = normalizedData(contentData?.content || []);

  return (
    <Wrapper>
      
      <SEO pageTitle="Green River" />
      <main id="main-content">
        <HeroArea
          data={{
            ...content["hero-section"],
          }}
        />
        <Header setLocale={setLocale} locale={locale} />

        <Element name="about" offset={50} />
        <AboutArea data={content["about-section"]} />
        <Element name="focus" offset={50}  />
        <ServiceArea data={content["service-section"]} />
        <Element name="solutions" offset={50} />
        <BlogArea data={content["services"]} />
        <Element name="contact" offset={50}  />
        <Contact data={content["contact-section"]} />
      </main>
      {/* <Footer data={content["brand-section"]} space={3} /> */}
    </Wrapper>
  );
};

export default Home;
