import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#021a0f] overflow-hidden px-4 pb-12">
      {/* Background pixel grid */}
      <div className="absolute top-[160px] left-1/2 transform -translate-x-1/2 w-full max-w-[1440px] h-[500px] z-10">
        <Image
          src="/assets/asset_1.png"
          alt="Green Background"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Symbol background overlay (brighter) */}
      <Image
        src="/assets/asset_10.png"
        alt="Symbol Overlay"
        width={460}
        height={460}
        className="absolute top-[140px] right-[40px] z-30 opacity-100 brightness-[2.2]"
      />

      {/* Corner icon */}
      <Image
        src="/assets/asset_11.png"
        alt="Corner Logo"
        width={48}
        height={48}
        className="absolute top-5 left-5 z-50"
      />

      {/* Logo */}
      <div className="absolute top-[40px] left-1/2 transform -translate-x-1/2 z-40">
        <Image src="/assets/asset_2.png" alt="Logo" width={480} height={120} />
      </div>

      {/* Navigation buttons */}
      <div className="absolute top-[140px] left-1/2 transform -translate-x-1/2 z-40 flex flex-wrap justify-center gap-2">
        <Image src="/assets/asset_3.png" alt="Buy $DILDO" width={70} height={24} />
        <Image src="/assets/asset_4.png" alt="Community" width={70} height={24} />
        <Image src="/assets/asset_5.png" alt="NFT" width={70} height={24} />
        <Image src="/assets/asset_6.png" alt="Dildo Shop" width={70} height={24} />
      </div>

      {/* Characters left & right */}
      <Image
        src="/assets/asset_8.png"
        alt="Left Dildo"
        width={90}
        height={180}
        className="absolute bottom-0 left-0 z-30"
      />
      <Image
        src="/assets/asset_9.png"
        alt="Right Dildo"
        width={90}
        height={180}
        className="absolute bottom-0 right-0 z-50"
      />

      {/* Center image in bordered frame */}
      <div className="absolute top-[220px] left-1/2 transform -translate-x-1/2 z-40">
        <div className="border-[6px] border-[#00FF00]">
          <Image
            src="/assets/asset_7.png"
            alt="Central Image"
            width={420}
            height={240}
          />
        </div>
      </div>
    </section>
  );
}
