import Cards from "@/components/home/Cards";
import Community from "@/components/home/Community";
import Future from "@/components/home/Future";
import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import Navigate from "@/components/home/Navigate";
import Writers from "@/components/home/Writers";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black">
      <Hero />
      <Future />
      <Cards />
      <Marquee />
      <Community />
      <Writers />
      <Navigate />
    </div>
  );
}
