import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-10 space-y-6">
      {/* Logo sus */}
      <Image
        src="/assets/asset_1.png"
        alt="Dildo Token Logo"
        width={250}
        height={250}
        priority
      />

      {/* Butoane placeholder */}
      <div className="flex flex-wrap gap-4 mt-4">
        <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold">
          HOME
        </button>
        <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold">
          STORE
        </button>
        <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold">
          NFT
        </button>
        <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold">
          COMMUNITY
        </button>
      </div>
    </section>
  );
}
