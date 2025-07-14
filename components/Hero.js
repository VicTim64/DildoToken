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
        className="absolute top-[100px] right-[20px] z-20 opacity-100 brightness-[2.6] hidden md:block"
      />

      {/* Corner icon */}
      <Image
        src="/assets/asset_11.png"
        alt="Corner Logo"
        width={40}
        height={40}
        className="absolute top-5 left-5 z-50"
      />

      {/* Logo */}
      <div className="absolute top-[20px] left-1/2 transform -translate-x-1/2 z-40">
        <Image src="/assets/asset_2.png" alt="Logo" width={200} height={70} />
      </div>

      {/* Navigation buttons */}
      <div className="absolute top-[100px] left-1/2 transform -translate-x-1/2 z-40 flex flex-wrap justify-center gap-2 md:gap-4">
        <Image src="/assets/asset_3.png" alt="Buy $DILDO" width={120} height={36} />
        <Image src="/assets/asset_4.png" alt="Community" width={120} height={36} />
        <Image src="/assets/asset_5.png" alt="NFT" width={120} height={36} />
        <Image src="/assets/asset_6.png" alt="Dildo Shop" width={120} height={36} />
      </div>

      {/* Center image */}
      <div className="absolute top-[200px] left-1/2 transform -translate-x-1/2 z-40 w-[90%] max-w-[880px]">
        <div className="border-[4px] border-[#00FF00]">
          <Image
            src="/assets/asset_7.png"
            alt="Central Image"
            width={880}
            height={520}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Left dildo */}
      <Image
        src="/assets/asset_8.png"
        alt="Left Dildo"
        width={160}
        height={300}
        className="absolute bottom-[40px] left-0 z-30 md:bottom-[60px] md:left-[40px] md:w-[288px] md:h-[552px]"
      />

      {/* Right dildo */}
      <Image
        src="/assets/asset_9.png"
        alt="Right Dildo"
        width={160}
        height={300}
        className="absolute bottom-[40px] right-0 z-50 md:bottom-[60px] md:right-[60px] md:w-[288px] md:h-[552px]"
      />
    </section>
  );
}
