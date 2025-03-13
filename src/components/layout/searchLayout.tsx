import Footer from "@components/footer";
import SearchHeader from "@components/header/searchHeader";
import { Container } from "@styles/common";
import { Outlet } from "react-router-dom";

const SearchLayout = () => {
  return (
    <Container>
      <SearchHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Container>
  );
};

export default SearchLayout;
