import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[700px] md:h-[750px] overflow-hidden bg-black">
      {/* Asset 1: Green pixelated background (centered stripe) */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[55%] w-full max-w-[1400px] h-[480px] z-0">
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
        width={180}
        height={380}
        className="absolute top-[50%] left-0 -translate-y-1/2 z-20"
      />

      {/* Asset 9: Right green dildo with cigar and glasses */}
      <Image
        src="/assets/asset_9.png"
        alt="Right Dildo"
        width={230}
        height={420}
        className="absolute top-[50%] right-0 -translate-y-1/2 z-20"
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
          width={300}
          height={80}
        />
      </div>

      {/* Asset 3–6: Buttons */}
      <div className="absolute top-24 left-1/2 transform -translate-x-1/2 z-40 flex gap-3">
        <Image src="/assets/asset_3.png" alt="Buy $DILDO" width={140} height={40} />
        <Image src="/assets/asset_4.png" alt="Community" width={140} height={40} />
        <Image src="/assets/asset_5.png" alt="NFT" width={140} height={40} />
        <Image src="/assets/asset_6.png" alt="Dildo Shop" width={140} height={40} />
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