import Navbar from "./components/Navbar";
import LandingSection from "./components/LandingSection";
import PayoutSection from "./components/PayoutSection";
import VideoSection from "./components/VideoSection";

export default function Home() {
  return (
   <div className="bg-black">
   <Navbar />
   <LandingSection />
   <PayoutSection />
   <VideoSection />
   </div>
  );
}
