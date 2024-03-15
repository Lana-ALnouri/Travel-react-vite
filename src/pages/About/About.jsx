import Header from "../../components/Header/Header";
import PromotionSection from "../../components/PromotionSection/PromotionSection";
import TourPlans from "../../components/TourPlans/TourPlans";
import VideoSection from "../../components/VideoSection/VideoSection";
import about_bg from "./../../assets/images/about-bg.png";

export default function About() {
  return (
    <>
      <Header src={about_bg} desc="About Us" />
      <PromotionSection />
      <VideoSection />
      <TourPlans/>
    </>
  );
}
