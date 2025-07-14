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

      {/* Symbol background overlay */}
      <Image
        src="/assets/asset_10.png"
        alt="Symbol Overlay"
        width={180}
        height={180}
        className="absolute top-[80px] right-[20px] z-20 opacity-100 brightness-[2.6] sm:top-[120px] sm:right-[40px] sm:w-[240px] sm:h-[240px]"
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
      <div className="absolute top-[20px] left-1/2 transform -translate-x-1/2 z-40 sm:top-[30px]">
        <Image src="/assets/asset_2.png" alt="Logo" width={200} height={60} className="sm:w-[300px] sm:h-[90px]" />
      </div>

      {/* Navigation buttons */}
      <div className="absolute top-[100px] left-1/2 transform -translate-x-1/2 z-40 flex flex-col sm:flex-row sm:top-[170px] gap-3 sm:gap-4">
        <Image src="/assets/asset_3.png" alt="Buy $DILDO" width={160} height={44} />
        <Image src="/assets/asset_4.png" alt="Community" width={160} height={44} />
        <Image src="/assets/asset_5.png" alt="NFT" width={160} height={44} />
        <Image src="/assets/asset_6.png" alt="Dildo Shop" width={160} height={44} />
      </div>

      {/* Central image with frame */}
      <div className="absolute top-[220px] left-1/2 transform -translate-x-1/2 z-40 sm:top-[280px]">
        <div className="border-[4px] border-[#00FF00] sm:border-[6px]">
          <Image
            src="/assets/asset_7.png"
            alt="Central Image"
            width={320}
            height={200}
            className="sm:w-[880px] sm:h-[520px]"
          />
        </div>
      </div>

      {/* Left dildo */}
      <Image
        src="/assets/asset_8.png"
        alt="Left Dildo"
        width={120}
        height={230}
        className="absolute bottom-[20px] left-[10px] z-30 sm:bottom-[60px] sm:left-[40px] sm:w-[288px] sm:h-[552px]"
      />

      {/* Right dildo */}
      <Image
        src="/assets/asset_9.png"
        alt="Right Dildo"
        width={120}
        height={230}
        className="absolute bottom-[20px] right-[10px] z-50 sm:bottom-[60px] sm:right-[60px] sm:w-[288px] sm:h-[552px]"
      />
    </section>
  );
}