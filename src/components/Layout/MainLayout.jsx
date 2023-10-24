import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Footer from "@/components/Footer/Footer";
import Copy from "@/components/Copy/Copy";

import { roboto } from "@/styles/fonts";

const MainLayout = ({ children }) => {
  return (
    <>
      <header className={roboto.className}>
        <Header />
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
