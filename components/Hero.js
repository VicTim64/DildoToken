import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[860px] overflow-hidden bg-[#004223]">
      {/* Asset 1: Green pixelated background */}
      <div className="absolute top-[200px] left-0 w-full h-[540px] z-0">
        <Image
          src="/assets/asset_1.png"
          alt="Green Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Asset 10: Subtle overlay */}
      <Image
        src="/assets/asset_10.png"
        alt="Symbol Overlay"
        width={260}
        height={260}
        className="absolute top-[60px] right-[60px] z-10 opacity-10"
      />

      {/* Asset 8: Left dildo */}
      <Image
        src="/assets/asset_8.png"
        alt="Left Dildo"
        width={360}
        height={620}
        className="absolute top-[50%] left-[-20px] -translate-y-1/2 z-20"
      />

      {/* Asset 9: Right dildo */}
      <Image
        src="/assets/asset_9.png"
        alt="Right Dildo"
        width={360}
        height={620}
        className="absolute top-[50%] right-[-20px] -translate-y-1/2 z-20"
      />

      {/* Asset 2: Main logo */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-40">
        <Image
          src="/assets/asset_2.png"
          alt="Logo"
          width={480}
          height={120}
        />
      </div>

      {/* Asset 3–6: Menu buttons */}
      <div className="absolute top-[160px] left-1/2 transform -translate-x-1/2 z-40 flex gap-x-5">
        <Image src="/assets/asset_3.png" alt="Buy $DILDO" width={200} height={56} />
        <Image src="/assets/asset_4.png" alt="Community" width={200} height={56} />
        <Image src="/assets/asset_5.png" alt="NFT" width={200} height={56} />
        <Image src="/assets/asset_6.png" alt="Dildo Shop" width={200} height={56} />
      </div>

      {/* Asset 7: Main central image */}
      <div className="relative w-full flex justify-center pt-[280px] z-30">
        <Image
          src="/assets/asset_7.png"
          alt="Main image"
          width={840}
          height={520}
          className="z-30"
        />
      </div>

      {/* Asset 11: Corner logo */}
      <Image
        src="/assets/asset_11.png"
        alt="Corner Logo"
        width={50}
        height={50}
        className="absolute top-4 left-4 z-50"
      />
    </section>
  );
}
