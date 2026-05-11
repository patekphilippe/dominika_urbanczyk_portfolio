import Bento from "@/sections/Bento";
import Closing from "@/sections/Closing";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import IconButtonGrid from "@/sections/IconButtonGrid";
import LoconiIntro from "@/sections/LoconiIntro";
import SelectedWorkIntro from "@/sections/SelectedWorkIntro";
import Showreel from "@/sections/Showreel";
import TheHow from "@/sections/TheHow";
import Testimonials from "@/sections/Testimonials";
import WorkHistory from "@/sections/WorkHistory";
import Workshops from "@/sections/Workshops";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WorkHistory />
        <Showreel />
        <TheHow />
        <LoconiIntro />
        <Bento />
        <SelectedWorkIntro />
        <IconButtonGrid />
        <Workshops />
        <Testimonials />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
