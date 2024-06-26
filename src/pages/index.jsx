import { useRef, useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Video from "@/components/Video";
import About from "@/components/About";
import Marque2 from "@/components/Marque2";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";
import Clock from "@/components/Clock";
import Map from "@/components/Map";
import gsap from "gsap";
import RitModel from "@/components/RitModel";
import EventSlider from "@/components/EventSlider";
import Title from "@/components/Head";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    gsap.fromTo(
      stagger.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.5 }
    );
  }, []);

  const stagger = useRef(null);

  return (
    <div className="bg-black h-fit">
      <Title />

      <Header id="navbar" />

      <section id="hero">
        <div
          ref={stagger}
          className="hidden xl:block relative w-full text-center top-[7rem] z-[10]"
        >
          <p className="text-white pl-[1.5rem] top-[6rem] uppercase font-clash font-bold text-[2.5rem] tracking-wide">
            ST. THOMAS INSTITUTE FOR SCIENCE & TECHNOLOGY
          </p>
          <p className="text-white font-clash italic text-xl">PRESENTS</p>
        </div>

        <div>
          <Hero />
          <Video />
        </div>
      </section>

      {isLoaded && <Clock />}

      <EventSlider />

      {/* <Partical/> */}

      <div className="bg-gradient-to-b from-primary to-transparent">
        <RitModel />
        <section id="about">
          <About />
        </section>
      </div>

      <Marque2 />

      <section id="faq">
        <Faq />
      </section>

      <Map />
      <Footer />
    </div>
  );
};

export default Home;

