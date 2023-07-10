import MainNav from "../../components/MainNav";
import Features from "./Features";
import Footer from "./Footer";
import Genres from "./Genres";
import AnimatedPage from '../../components/AnimatedPage'
import HeroSection from "./HeroSection";
const Index = () => {
  return (
    <AnimatedPage>
      <MainNav />
      <HeroSection />
      <Genres />
      <Features />
      <Footer />
    </AnimatedPage>
  );
};

export default Index;

