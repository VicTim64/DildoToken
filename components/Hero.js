import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[850px] overflow-hidden bg-[#013018]">
      {/* Asset 1: Green pixelated background (centered stripe) */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[50%] w-[1100px] h-[550px] z-0">
        <Image
          src="/assets/asset_1.png"
          alt="Green Background"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Asset 10: Subtle symbol overlay behind logo */}
      <Image
        src="/assets/asset_10.png"
        alt="Symbol Overlay"
        width={260}
        height={260}
        className="absolute top-[60px] right-[60px] z-10 opacity-10"
      />

      {/* Asset 8: Left green dildo with pixel glasses */}
      <Image
        src="/assets/asset_8.png"
        alt="Left Dildo"
        width={320}
        height={580}
        className="absolute top-[53%] left-[-40px] -translate-y-1/2 z-20"
      />

      {/* Asset 9: Right green dildo with cigar and glasses */}
      <Image
        src="/assets/asset_9.png"
        alt="Right Dildo"
        width={340}
        height={580}
        className="absolute top-[53%] right-[-40px] -translate-y-1/2 z-20"
      />

      {/* Asset 7: Central grayscale image */}
      <div className="relative w-full flex justify-center pt-40 z-30">
        <Image
          src="/assets/asset_7.png"
          alt="Central Image"
          width={820}
          height={520}
          className="z-30"
        />
      </div>

      {/* Asset 2: Logo */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-40">
        <Image
          src="/assets/asset_2.png"
          alt="Logo"
          width={460}
          height={120}
        />
      </div>

      {/* Asset 3–6: Buttons */}
      <div className="absolute top-40 left-1/2 transform -translate-x-1/2 z-40 flex gap-x-5 mt-4">
        <Image src="/assets/asset_3.png" alt="Buy $DILDO" width={190} height={54} />
        <Image src="/assets/asset_4.png" alt="Community" width={190} height={54} />
        <Image src="/assets/asset_5.png" alt="NFT" width={190} height={54} />
        <Image src="/assets/asset_6.png" alt="Dildo Shop" width={190} height={54} />
      </div>

      {/* Asset 11: Logo top-left */}
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
