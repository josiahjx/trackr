import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Process from "./components/Process";
import TrustTestimonials from "./components/TrustTestimonials";
import TrustIndicators from "./components/TrustIndicators";
import Contact from "./components/Contact";
// import Services from "./components/Services";

export default function Home() {
  return (
   <>
                <Hero />
                <TrustIndicators />
                <Services />
                <About />
                <Process/>
                <TrustTestimonials />
                <Contact/>
   </>
  );
}
