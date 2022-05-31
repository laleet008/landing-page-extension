import React from "react";
import Features from "../../components/Features";
import Hero from "../../components/Hero";

import Layout from "../../components/Layout";
import "./Home.css";

const Home = () => {
  return (
    <Layout>
      <div className="home">
        <Hero />
        <Features />
      </div>
    </Layout>
  );
};

export default Home;
