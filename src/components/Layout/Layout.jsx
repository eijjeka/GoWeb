import { Header } from "../Header/Header";
import { Footer } from "components/Footer";
import { Hero } from "../../components/Hero/Hero";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Hero />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
