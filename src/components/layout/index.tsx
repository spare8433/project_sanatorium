import Footer from "@components/footer";
import Header from "@components/header";
import { Container } from "@styles/common";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default Layout;
