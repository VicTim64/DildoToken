import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-[#013220] text-white overflow-hidden">
      {/* Fundal pixelat */}
      <Image
        src="/assets/asset_1.png"
        alt="Green Pixel Background"
        fill
        className="object-cover opacity-100 -z-10"
      />

      {/* Element decorativ masonic în fundal */}
      <Image
        src="/assets/asset_10.png"
        alt="Subtle Background Logo"
        width={400}
        height={400}
        className="absolute right-10 top-0 opacity-10 z-0"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 flex flex-col items-center">
        {/* Logo mic colț stânga sus */}
        <div className="absolute top-4 left-4">
          <Image src="/assets/asset_11.png" alt="Mini Logo" width={32} height={32} />
        </div>

        {/* Logo central */}
        <Image src="/assets/asset_2.png" alt="DILDO Logo" width={200} height={80} className="mb-6" />

        {/* Butoane navigație */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Image src="/assets/asset_3.png" alt="Buy Dildo" width={140} height={40} />
          <Image src="/assets/asset_4.png" alt="Community" width={140} height={40} />
          <Image src="/assets/asset_5.png" alt="NFT" width={140} height={40} />
          <Image src="/assets/asset_6.png" alt="Dildo Shop" width={140} height={40} />
        </div>

        {/* Imagine principală alb-negru */}
        <Image src="/assets/asset_7.png" alt="Main Hero Image" width={700} height={350} className="rounded-xl shadow-lg" />
      </div>

      {/* Dildouri laterale */}
      <Image
        src="/assets/asset_8.png"
        alt="Left Dildo"
        width={200}
        height={300}
        className="absolute bottom-0 left-0 hidden md:block"
      />
      <Image
        src="/assets/asset_9.png"
        alt="Right Dildo"
        width={200}
        height={300}
        className="absolute bottom-0 right-0 hidden md:block"
      />
    </section>
  );
}
