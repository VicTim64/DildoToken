import Hero from "../components/Hero";
import GoGreen from "../components/GoGreen";
import NFTSection from "../components/NFTSection";
import Store from "../components/Store";
import Memes from "../components/Memes";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <main className="bg-[#013220] text-white min-h-screen">
        <Hero />
        {/* Urmează și celelalte componente */}

        <GoGreen />
        <NFTSection />
        <Store />
        <Memes />
        <Footer />
      </main>
    </>
  );
}
