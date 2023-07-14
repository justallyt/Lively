
import AboutSection from "./components/AboutSection";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ScrolledHeader from "./components/Navbar/ScrolledHeader";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
           <ScrolledHeader />
           <HeroSection />
           <AboutSection />
           <Testimonials />
           <CallToAction />
           <Footer />
    </>
  )
}
