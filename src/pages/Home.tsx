import PageWrapper from "../components/PageWrapper";
import FullscreenCarousel from "../components/FullscreenCarousel";
import OurFigures from "../components/OurFigures";
import ChairmanMessage from "../components/ChairmanMessage";

const HomePage = () => {
  return (
    <PageWrapper>
      <FullscreenCarousel />
      <OurFigures />
      <ChairmanMessage />
    </PageWrapper>
  );
};

export default HomePage;
