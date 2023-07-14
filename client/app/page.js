"use client"
import { useState } from "react";
import AboutSection from "./components/Home/AboutSection";
import CallToAction from "./components/Home/CallToAction";
import Footer from "./components/Footer";
import HeroSection from "./components/Home/HeroSection";
import ScrolledHeader from "./components/ScrolledHeader";
import Sidebar from "./components/Sidebar";
import Testimonials from "./components/Home/Testimonials";
import { navcontext } from "./utils/navcontext";
export default function Home() {
  const [ navStatus, setNavStatus] = useState(false);
  return (
    <>
            <navcontext.Provider value={[navStatus, setNavStatus]}>
                    <ScrolledHeader />
                    <Sidebar />
                    <HeroSection />
            </navcontext.Provider>
           <AboutSection />
           <Testimonials />
           <CallToAction />
           <Footer />
    </>
  )
}
