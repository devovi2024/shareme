import FeaturedProducts from "@/components/landing-page/featured-products";
import HeroSection from "@/components/landing-page/hero-section";
import RecentlyLaunchedProducts from "@/components/landing-page/recentlyLaunched-products";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <FeaturedProducts/>
      <RecentlyLaunchedProducts/>
    </div>
  );
}
