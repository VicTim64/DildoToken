import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#021a0f] overflow-hidden px-4 pb-12">
      {/* Background pixel grid */}
      <div className="absolute top-[15vh] left-1/2 transform -translate-x-1/2 w-full max-w-[1440px] h-[35vh] z-10">
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
        className="absolute top-[8vh] right-[5vw] z-20 opacity-100 brightness-[2.6] hidden sm:block"
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
      <div className="absolute top-[3vh] left-1/2 transform -translate-x-1/2 z-40 w-[200px] sm:w-[300px]">
        <Image src="/assets/asset_2.png" alt="Logo" width={300} height={90} />
      </div>

      {/* Navigation buttons */}
      <div className="absolute top-[13vh] left-1/2 transform -translate-x-1/2 z-40 flex gap-2 sm:gap-4 flex-wrap justify-center sm:flex-nowrap w-full max-w-[90vw] sm:max-w-none">
        <Image src="/assets/asset_3.png" alt="Buy $DILDO" width={160} height={44} />
        <Image src="/assets/asset_4.png" alt="Community" width={160} height={44} />
        <Image src="/assets/asset_5.png" alt="NFT" width={160} height={44} />
        <Image src="/assets/asset_6.png" alt="Dildo Shop" width={160} height={44} />
      </div>

      {/* Central image with frame */}
      <div className="absolute top-[22vh] left-1/2 transform -translate-x-1/2 z-40 w-[90vw] sm:w-auto">
        <div className="border-[4px] sm:border-[6px] border-[#00FF00]">
          <Image
            src="/assets/asset_7.png"
            alt="Central Image"
            width={880}
            height={520}
          />
        </div>
      </div>

      {/* Left dildo */}
      <div className="absolute bottom-[4vh] left-[2vw] z-30 w-[90px] sm:w-[288px]">
        <Image src="/assets/asset_8.png" alt="Left Dildo" width={288} height={552} />
      </div>

      {/* Right dildo */}
      <div className="absolute bottom-[4vh] right-[2vw] z-50 w-[90px] sm:w-[288px]">
        <Image src="/assets/asset_9.png" alt="Right Dildo" width={288} height={552} />
      </div>
    </section>
  );
}