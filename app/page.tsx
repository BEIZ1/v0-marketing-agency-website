import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Portfolio } from "@/components/portfolio";
import { Team } from "@/components/team";
import { Process } from "@/components/process";
import { BriefForm } from "@/components/brief-form";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Team />
        <Process />
        <BriefForm />
      </main>
      <Footer />
    </>
  );
}
