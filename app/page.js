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
import Testimonial from "./components/Testimonial";
import Faqs from "./components/Faqs";

export default function Home() {
  return (
   <div className="bg-black">
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

   <Testimonial />
   <Faqs />
   </div>
  );
}
