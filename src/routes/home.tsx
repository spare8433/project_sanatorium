import CareGradeBanner from "@components/careGradeBanner";
import TabMenu from "@components/mainTabMenu";
import ShortCutList from "@components/shortCutList";

const Home = () => {
  return (
    <>
      <ShortCutList />
      <CareGradeBanner />
      <TabMenu />
    </>
  );
};

export default Home;
