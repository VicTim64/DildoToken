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
        width={240}
        height={240}
        className="absolute top-[120px] right-[40px] z-20 opacity-100 brightness-[2.6]"
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

      {/* Navigation buttons */}
      <div className="absolute top-[170px] left-1/2 transform -translate-x-1/2 z-40 flex flex-wrap justify-center gap-4">
        <Image src="/assets/asset_3.png" alt="Buy $DILDO" width={160} height={44} />
        <Image src="/assets/asset_4.png" alt="Community" width={160} height={44} />
        <Image src="/assets/asset_5.png" alt="NFT" width={160} height={44} />
        <Image src="/assets/asset_6.png" alt="Dildo Shop" width={160} height={44} />
      </div>

      {/* Central image with frame */}
      <div className="absolute top-[280px] left-1/2 transform -translate-x-1/2 z-40">
        <div className="border-[6px] border-[#00FF00]">
          <Image
            src="/assets/asset_7.png"
            alt="Central Image"
            width={880}
            height={520}
          />
        </div>
      </div>

      {/* Left dildo - under central image */}
      <Image
        src="/assets/asset_8.png"
        alt="Left Dildo"
        width={240}
        height={460}
        className="absolute bottom-[80px] left-[calc(50%-500px)] z-30"
      />

      {/* Right dildo - over central image */}
      <Image
        src="/assets/asset_9.png"
        alt="Right Dildo"
        width={240}
        height={460}
        className="absolute bottom-[80px] right-[calc(50%-500px)] z-50"
      />
    </section>
  );
}
