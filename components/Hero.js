import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[700px] md:h-[750px] overflow-hidden bg-[#011d11]">
      {/* Asset 1: Green pixelated background (centered stripe) */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[55%] w-full max-w-[1400px] h-[520px] z-0">
        <Image
          src="/assets/asset_1.png"
          alt="Green Background"
          fill
          className="object-cover"
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
        width={240}
        height={450}
        className="absolute top-[54%] left-[-40px] -translate-y-1/2 z-20"
      />

      {/* Asset 9: Right green dildo with cigar and glasses */}
      <Image
        src="/assets/asset_9.png"
        alt="Right Dildo"
        width={270}
        height={500}
        className="absolute top-[54%] right-[-40px] -translate-y-1/2 z-20"
      />

      {/* Asset 7: Central grayscale image */}
      <div className="relative w-full flex justify-center pt-32 z-30">
        <Image
          src="/assets/asset_7.png"
          alt="Central Image"
          width={800}
          height={500}
          className="z-30"
        />
      </div>

      {/* Asset 2: Logo */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-40">
        <Image
          src="/assets/asset_2.png"
          alt="Logo"
          width={360}
          height={90}
        />
      </div>

      {/* Asset 3–6: Buttons */}
      <div className="absolute top-28 left-1/2 transform -translate-x-1/2 z-40 flex gap-4">
        <Image src="/assets/asset_3.png" alt="Buy $DILDO" width={160} height={46} />
        <Image src="/assets/asset_4.png" alt="Community" width={160} height={46} />
        <Image src="/assets/asset_5.png" alt="NFT" width={160} height={46} />
        <Image src="/assets/asset_6.png" alt="Dildo Shop" width={160} height={46} />
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
