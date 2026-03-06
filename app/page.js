import Navbar from "./components/Navbar";
import LandingSection from "./components/LandingSection";
import TrustStrip from "./components/TrustStrip";
import PayoutSection from "./components/PayoutSection";
import VideoSection from "./components/VideoSection";
import CertificateSection from "./components/CertificateSection";
import ReliableCardsSection from "./components/ReliableCardsSection";
import Community from "./components/Community";
import PerformanceChart from "./components/PerformanceChart";
import ChooseYourAccount from "./components/ChooseYourAccount";
import JoinTeam from "./components/JoinTeam";
import Testimonial from "./components/Testimonial";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import Revaloution from "./components/Revaloution";
import TradersTogether from "./components/TradersTogether";

export default function Home() {
  return (
    <div className="theme-shell">
      <Navbar />
      <LandingSection />
      <PayoutSection />
      <VideoSection />
      <ReliableCardsSection />
      <TrustStrip />
      <CertificateSection />
      <Community />
      <PerformanceChart />
      <ChooseYourAccount />
      <Revaloution />
      <Testimonial />
      <JoinTeam />
      <Faqs />
      <TradersTogether />
      <Footer />
    </div>
  );
}
