"use client";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Tracks from "./components/tracks";
import FAQ from "./components/faq";
import Schedule from "./components/schedule";
import Contributors from "./components/contributors";
import Resources from "./components/resources";
import Carousel from "./components/carousel/carousel";
import Footer from "./components/footer";

export default function Home() {
  return (
    // Set base background and text color for the whole page
    <div className="cursor-default bg-background text-foreground font-dmSerif">
      <Navbar />
      <Hero />
      <About />
      <Tracks />
      <FAQ />
      <Schedule />
      <Contributors />
      <Resources />
      <Carousel />
      <Footer />
    </div>
  );
}
