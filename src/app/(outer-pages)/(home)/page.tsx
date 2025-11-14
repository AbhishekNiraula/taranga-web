import { HeroSection } from "./_components/hero-section";
import { HighlightImages } from "./_components/highlight-images";
import { WelcomeMessageSection } from "./_components/welcome-message-section";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <HighlightImages />
      <WelcomeMessageSection />
    </div>
  );
};

export default Home;
