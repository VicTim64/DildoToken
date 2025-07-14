import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[900px] bg-gradient-to-b from-[#013018] to-[#014422] overflow-hidden">
      {/* Background asset - center stripe */}
      <div className="absolute top-[130px] left-1/2 transform -translate-x-1/2 w-[1300px] h-[550px] z-0">
        <Image
          src="/assets/asset_1.png"
          alt="Green Background"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Top-left small icon */}
      <Image
        src="/assets/asset_11.png"
        alt="Corner Logo"
        width={48}
        height={48}
        className="absolute top-5 left-5 z-50"
      />

      {/* Overlay symbol behind logo */}
      <Image
        src="/assets/asset_10.png"
        alt="Symbol Overlay"
        width={300}
        height={300}
        className="absolute top-14 right-16 z-10 opacity-10"
      />

      {/* Central logo */}
      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 z-40">
        <Image src="/assets/asset_2.png" alt="Logo" width={480} height={120} />
      </div>

      {/* Navigation buttons */}
      <div className="absolute top-[130px] left-1/2 transform -translate-x-1/2 z-40 flex gap-4">
        <Image src="/assets/asset_3.png" alt="Buy $DILDO" width={175} height={54} />
        <Image src="/assets/asset_4.png" alt="Community" width={175} height={54} />
        <Image src="/assets/asset_5.png" alt="NFT" width={175} height={54} />
        <Image src="/assets/asset_6.png" alt="Dildo Shop" width={175} height={54} />
      </div>

      {/* Left character */}
      <Image
        src="/assets/asset_8.png"
        alt="Left Dildo"
        width={360}
        height={600}
        className="absolute bottom-0 left-[-30px] z-20"
      />

      {/* Right character */}
      <Image
        src="/assets/asset_9.png"
        alt="Right Dildo"
        width={360}
        height={600}
        className="absolute bottom-0 right-[-30px] z-20"
      />

      {/* Central grayscale image */}
      <div className="relative z-30 flex justify-center mt-[240px]">
        <Image
          src="/assets/asset_7.png"
          alt="Central Image"
          width={860}
          height={540}
        />
      </div>
    </section>
  );
}
