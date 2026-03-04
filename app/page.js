import Navbar from "./components/Navbar";
import LandingSection from "./components/LandingSection";
import TrustStrip from "./components/TrustStrip";
import PayoutSection from "./components/PayoutSection";
import VideoSection from "./components/VideoSection";
import CertificateSection from "./components/CertificateSection";
import ReliableCardsSection from "./components/ReliableCardsSection";

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
   </div>
  );
}
