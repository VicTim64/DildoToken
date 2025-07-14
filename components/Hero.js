import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-12 px-6 bg-[#013220] text-white">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-6">
        {/* Logo */}
        <Image
          src="/assets/asset_5.png"
          alt="Dildo Token Logo"
          width={200}
          height={100}
        />

        {/* Navbar */}
        <div className="flex gap-6">
          <Image src="/assets/asset_6.png" alt="Btn 1" width={120} height={40} />
          <Image src="/assets/asset_7.png" alt="Btn 2" width={120} height={40} />
          <Image src="/assets/asset_8.png" alt="Btn 3" width={120} height={40} />
          <Image src="/assets/asset_9.png" alt="Btn 4" width={120} height={40} />
        </div>

        {/* Background + Token Display */}
        <div className="relative w-full flex flex-col items-center">
          <Image
            src="/assets/asset_4.png"
            alt="Hero Background"
            width={1200}
            height={600}
            className="w-full h-auto"
          />

          {/* Contract field (copyable) */}
          <div className="absolute bottom-8 bg-white text-black px-4 py-2 rounded-xl cursor-pointer text-sm font-mono">
            0x000000000000000000000000000000000000d1ldo
          </div>
        </div>
      </div>
    </section>
  );
}
