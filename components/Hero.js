import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Asset 1: Green pixelated background */}
      <Image
        src="/assets/asset_1.png"
        alt="Green Background"
        fill
        className="object-cover z-0"
        priority
      />

      {/* Asset 2: Symbol overlay (faint behind title) */}
      <Image
        src="/assets/asset_2.png"
        alt="Symbol Overlay"
        width={200}
        height={200}
        className="absolute top-0 right-0 z-10 opacity-10"
      />

      {/* Asset 3: Left green dildo with pixel glasses */}
      <Image
        src="/assets/asset_3.png"
        alt="Left Dildo"
        width={200}
        height={400}
        className="absolute bottom-0 left-0 z-20"
      />

      {/* Asset 4: Right green dildo with cigar and glasses */}
      <Image
        src="/assets/asset_4.png"
        alt="Right Dildo"
        width={250}
        height={450}
        className="absolute bottom-0 right-0 z-20"
      />

      {/* Asset 5: Central grayscale image with green arrow */}
      <div className="relative w-full flex justify-center items-center pt-24 z-30">
        <Image
          src="/assets/asset_5.png"
          alt="Central Image"
          width={600}
          height={400}
          className="z-30"
        />
      </div>

      {/* Asset 6: Logo center top */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-40">
        <Image
          src="/assets/asset_6.png"
          alt="Logo"
          width={200}
          height={60}
        />
      </div>

      {/* Asset 7, 8, 9: 3 Buttons center under logo */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-40 flex gap-2">
        <Image src="/assets/asset_7.png" alt="Button 1" width={110} height={30} />
        <Image src="/assets/asset_8.png" alt="Button 2" width={110} height={30} />
        <Image src="/assets/asset_9.png" alt="Button 3" width={110} height={30} />
      </div>

      {/* Asset 10, 11: Green pixel overlays in stânga și dreapta jos */}
      <Image
        src="/assets/asset_10.png"
        alt="Overlay Left"
        width={150}
        height={150}
        className="absolute bottom-0 left-0 z-10"
      />
      <Image
        src="/assets/asset_11.png"
        alt="Overlay Right"
        width={150}
        height={150}
        className="absolute bottom-0 right-0 z-10"
      />
    </section>
  );
}
