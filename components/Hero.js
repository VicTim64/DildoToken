import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#021a0f] overflow-hidden px-4 pb-12">
      {/* Background pixel grid */}
      <div className="absolute top-[15vw] left-1/2 transform -translate-x-1/2 w-full max-w-[1440px] h-[35vw] z-10">
        <Image src="/assets/asset_1.png" alt="Green Background" fill className="object-contain" priority />
      </div>

      {/* Symbol background overlay */}
      <Image src="/assets/asset_10.png" alt="Symbol Overlay" width={"16vw"} height={"16vw"} className="absolute top-[8vw] right-[2vw] z-20 opacity-100 brightness-[2.6]" />

      {/* Corner icon */}
      <Image src="/assets/asset_11.png" alt="Corner Logo" width={48} height={48} className="absolute top-5 left-5 z-50" />

      {/* Logo */}
      <div className="absolute top-[2vw] left-1/2 transform -translate-x-1/2 z-40">
        <Image src="/assets/asset_2.png" alt="Logo" width={"20vw"} height={"6vw"} />
      </div>

      {/* Navigation buttons */}
      <div className="absolute top-[12vw] left-1/2 transform -translate-x-1/2 z-40 flex flex-wrap justify-center gap-4">
        <Image src="/assets/asset_3.png" alt="Buy $DILDO" width={"11vw"} height={"3vw"} />
        <Image src="/assets/asset_4.png" alt="Community" width={"11vw"} height={"3vw"} />
        <Image src="/assets/asset_5.png" alt="NFT" width={"11vw"} height={"3vw"} />
        <Image src="/assets/asset_6.png" alt="Dildo Shop" width={"11vw"} height={"3vw"} />
      </div>

      {/* Central image with frame */}
      <div className="absolute top-[20vw] left-1/2 transform -translate-x-1/2 z-40">
        <div className="border-[0.4vw] border-[#00FF00]">
          <Image src="/assets/asset_7.png" alt="Central Image" width={"60vw"} height={"35vw"} />
        </div>
      </div>

      {/* Left dildo - under central image */}
      <Image
        src="/assets/asset_8.png"
        alt="Left Dildo"
        width={"20vw"}
        height={"38vw"}
        className="absolute bottom-[8vw] left-[calc(50%-34vw)] z-30"
      />

      {/* Right dildo - over central image */}
      <Image
        src="/assets/asset_9.png"
        alt="Right Dildo"
        width={"20vw"}
        height={"38vw"}
        className="absolute bottom-[8vw] right-[calc(50%-34vw)] z-50"
      />
    </section>
  );
}