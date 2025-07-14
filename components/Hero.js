import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
      {/* Asset 1: Green pixelated background */}
      <Image
        src="/assets/asset_1.png"
        alt="Green Background"
        fill
        className="object-cover z-0"
        priority
      />

      {/* Asset 10: Subtle symbol overlay behind content */}
      <Image
        src="/assets/asset_10.png"
        alt="Symbol Overlay"
        width={250}
        height={250}
        className="absolute top-10 right-10 z-10 opacity-10"
      />

      {/* Asset 8: Left green dildo with pixel glasses */}
      <Image
        src="/assets/asset_8.png"
        alt="Left Dildo"
        width={220}
        height={420}
        className="absolute bottom-4 left-2 z-20"
      />

      {/* Asset 9: Right green dildo with cigar and glasses */}
      <Image
        src="/assets/asset_9.png"
        alt="Right Dildo"
        width={270}
        height={470}
        className="absolute bottom-4 right-2 z-20"
      />

      {/* Asset 7: Central grayscale image with green arrow */}
      <div className="relative w-full flex justify-center items-center pt-32 z-30">
        <Image
          src="/assets/asset_7.png"
          alt="Central Image"
          width={720}
          height={460}
          className="z-30"
        />
      </div>

      {/* Asset 2: Logo center top */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-40">
        <Image
          src="/assets/asset_2.png"
          alt="Logo"
          width={280}
          height={80}
        />
      </div>

      {/* Asset 3, 4, 5, 6: Buttons under logo */}
      <div className="absolute top-24 left-1/2 transform -translate-x-1/2 z-40 flex gap-3">
        <Image src="/assets/asset_3.png" alt="Buy $DILDO" width={130} height={40} />
        <Image src="/assets/asset_4.png" alt="Community" width={130} height={40} />
        <Image src="/assets/asset_5.png" alt="NFT" width={130} height={40} />
        <Image src="/assets/asset_6.png" alt="Dildo Shop" width={130} height={40} />
      </div>

      {/* Asset 11: Top-left corner logo icon */}
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
