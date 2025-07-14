// Hero.js (actualizat cu layout fluid si elemente in procente)
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#021a0f] overflow-hidden px-[5vw] pb-[10vh]">
      {/* Background pixel grid */}
      <div className="absolute top-[25vh] left-1/2 transform -translate-x-1/2 w-full max-w-[90vw] h-[35vh] z-10">
        <Image
          src="/assets/asset_1.png"
          alt="Green Background"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Symbol overlay */}
      <div className="absolute top-[10vh] right-[3vw] z-20 w-[12vw] max-w-[120px]">
        <Image
          src="/assets/asset_10.png"
          alt="Symbol Overlay"
          width={240}
          height={240}
          className="w-full h-auto opacity-100 brightness-[2.6]"
        />
      </div>

      {/* Corner icon */}
      <div className="absolute top-[2vh] left-[2vw] z-50 w-[4vw] max-w-[48px]">
        <Image
          src="/assets/asset_11.png"
          alt="Corner Logo"
          width={48}
          height={48}
          className="w-full h-auto"
        />
      </div>

      {/* Logo */}
      <div className="absolute top-[5vh] left-1/2 transform -translate-x-1/2 z-40 w-[30vw] max-w-[300px]">
        <Image
          src="/assets/asset_2.png"
          alt="Logo"
          width={300}
          height={90}
          className="w-full h-auto"
        />
      </div>

      {/* Navigation buttons */}
      <div className="absolute top-[18vh] left-1/2 transform -translate-x-1/2 z-40 flex flex-wrap justify-center gap-[1vw] w-full max-w-[90vw]">
        <Image src="/assets/asset_3.png" alt="Buy $DILDO" width={160} height={44} className="w-[20vw] max-w-[160px] h-auto" />
        <Image src="/assets/asset_4.png" alt="Community" width={160} height={44} className="w-[20vw] max-w-[160px] h-auto" />
        <Image src="/assets/asset_5.png" alt="NFT" width={160} height={44} className="w-[20vw] max-w-[160px] h-auto" />
        <Image src="/assets/asset_6.png" alt="Dildo Shop" width={160} height={44} className="w-[20vw] max-w-[160px] h-auto" />
      </div>

      {/* Central image with frame */}
      <div className="absolute top-[28vh] left-1/2 transform -translate-x-1/2 z-40 w-[60vw] max-w-[880px]">
        <div className="border-[0.6vw] border-[#00FF00]">
          <Image src="/assets/asset_7.png" alt="Central Image" width={880} height={520} className="w-full h-auto" />
        </div>
      </div>

      {/* Left dildo (desktop only) */}
      <div className="hidden sm:block absolute bottom-[10vh] left-[calc(50%-34vw)] z-30 w-[20vw] max-w-[288px]">
        <Image src="/assets/asset_8.png" alt="Left Dildo" width={288} height={552} className="w-full h-auto" />
      </div>

      {/* Right dildo (desktop only) */}
      <div className="hidden sm:block absolute bottom-[10vh] right-[calc(50%-34vw)] z-50 w-[20vw] max-w-[288px]">
        <Image src="/assets/asset_9.png" alt="Right Dildo" width={288} height={552} className="w-full h-auto" />
      </div>
    </section>
  );
}