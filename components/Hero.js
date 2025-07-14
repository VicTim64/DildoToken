import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-[#0d3b1e] to-[#043017] overflow-hidden px-4 pb-12">
      {/* Background pixel grid */}
      <div className="absolute top-[280px] left-1/2 transform -translate-x-1/2 w-full max-w-[1440px] h-[550px] z-10">
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
        width={460}
        height={460}
        className="absolute top-[60px] right-[60px] z-20 opacity-40"
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
      <div className="absolute top-[60px] left-1/2 transform -translate-x-1/2 z-40">
        <Image src="/assets/asset_2.png" alt="Logo" width={480} height={120} />
      </div>

      {/* Navigation buttons */}
      <div className="absolute top-[160px] left-1/2 transform -translate-x-1/2 z-40 flex flex-wrap justify-center gap-4">
        <Image src="/assets/asset_3.png" alt="Buy $DILDO" width={190} height={56} />
        <Image src="/assets/asset_4.png" alt="Community" width={190} height={56} />
        <Image src="/assets/asset_5.png" alt="NFT" width={190} height={56} />
        <Image src="/assets/asset_6.png" alt="Dildo Shop" width={190} height={56} />
      </div>

      {/* Characters left & right */}
      <Image
        src="/assets/asset_8.png"
        alt="Left Dildo"
        width={460}
        height={740}
        className="absolute bottom-0 left-0 z-30"
      />
      <Image
        src="/assets/asset_9.png"
        alt="Right Dildo"
        width={460}
        height={740}
        className="absolute bottom-0 right-0 z-30"
      />

      {/* Center image in bordered frame */}
      <div className="relative z-40 flex justify-center mt-[380px]">
        <div className="border-[6px] border-[#00FF00]">
          <Image
            src="/assets/asset_7.png"
            alt="Central Image"
            width={960}
            height={560}
          />
        </div>
      </div>
    </section>
  );
}
