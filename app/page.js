import About from "@/components/About";
import Abiut from "@/components/About";
import Founder from "@/components/Founder";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Review from "@/components/Review";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center h-full">
      <Hero />
      <Founder />
      <About />
      <Services />
      <Review />
    </section>
  );
}
