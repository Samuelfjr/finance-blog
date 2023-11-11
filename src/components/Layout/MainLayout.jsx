import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Footer from "@/components/Footer/Footer";
import Copy from "@/components/Copy/Copy";
import React from "react";

import { roboto } from "@/styles/fonts";

const MainLayout = ({ children }) => {
  const [menuIsVisible, setMenuIsVisible] = React.useState(false);

  return (
    <>
      <header className={roboto.className}>
        <Header setMenuIsVisible={setMenuIsVisible} />
        <Hero />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
        <Copy />
      </footer>
    </>
  );
};

export default MainLayout;
