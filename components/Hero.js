import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#021a0f] overflow-hidden px-4 pb-12">
      {/* Background pixel grid */}
      <div className="absolute top-[220px] left-1/2 transform -translate-x-1/2 w-full max-w-[1440px] h-[500px] z-10">
        <Image
          src="/assets/asset_1.png"
          alt="Green Background"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Symbol background overlay (brighter & smaller) */}
      <Image
        src="/assets/asset_10.png"
        alt="Symbol Overlay"
        width={240}
        height={240}
        className="absolute top-[120px] right-[40px] z-20 opacity-100 brightness-[2.6] hidden md:block"
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
      <div className="absolute top-[30px] left-1/2 transform -translate-x-1/2 z-40">
        <Image src="/assets/asset_2.png" alt="Logo" width={300} height={90} />
      </div>

      {/* Navigation buttons - responsive */}
      <div className="absolute top-[140px] md:top-[170px] left-1/2 transform -translate-x-1/2 z-40 flex flex-col md:flex-row justify-center items-center gap-3 md:gap-4 w-full px-4 md:px-0 max-w-[350px] md:max-w-none">
        <Image src="/assets/asset_3.png" alt="Buy $DILDO" width={160} height={44} />
        <Image src="/assets/asset_4.png" alt="Community" width={160} height={44} />
        <Image src="/assets/asset_5.png" alt="NFT" width={160} height={44} />
        <Image src="/assets/asset_6.png" alt="Dildo Shop" width={160} height={44} />
      </div>

      {/* Central image with frame - responsive */}
      <div className="absolute top-[260px] md:top-[280px] left-1/2 transform -translate-x-1/2 z-40 w-full max-w-[880px] px-2">
        <div className="border-[6px] border-[#00FF00]">
          <Image
            src="/assets/asset_7.png"
            alt="Central Image"
            className="w-full h-auto"
            width={880}
            height={520}
          />
        </div>
      </div>

      {/* Left dildo - responsive positioning */}
      <Image
        src="/assets/asset_8.png"
        alt="Left Dildo"
        width={288}
        height={552}
        className="absolute bottom-[10px] md:bottom-[60px] left-[10px] md:left-[40px] z-30 w-[120px] md:w-[288px] h-auto"
      />

      {/* Right dildo - responsive positioning */}
      <Image
        src="/assets/asset_9.png"
        alt="Right Dildo"
        width={288}
        height={552}
        className="absolute bottom-[10px] md:bottom-[60px] right-[10px] md:right-[60px] z-50 w-[120px] md:w-[288px] h-auto"
      />
    </section>
  );
}