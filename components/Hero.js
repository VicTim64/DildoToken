import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#012b12]">
      {/* Asset 1: Green pixel background */}
      <Image
        src="/assets/asset1.png"
        alt="Green Background"
        fill
        className="object-cover object-top z-0"
        priority
      />

      {/* Asset 2: Subtle Dildo Symbol */}
      <Image
        src="/assets/asset2.png"
        alt="Symbol Overlay"
        width={300}
        height={300}
        className="absolute top-0 right-0 opacity-10 z-10"
      />

      {/* Asset 3: Left Dildo pixelated */}
      <Image
        src="/assets/asset3.png"
        alt="Left Dildo"
        width={250}
        height={400}
        className="absolute bottom-0 left-0 z-20"
      />

      {/* Asset 4: Right Dildo cartoon */}
      <Image
        src="/assets/asset4.png"
        alt="Right Dildo"
        width={250}
        height={400}
        className="absolute bottom-0 right-0 z-20"
      />

      {/* Asset 5: Central main image */}
      <div className="relative z-30 mx-auto mt-32 w-[90%] max-w-3xl border-4 border-lime-400">
        <Image
          src="/assets/asset5.png"
          alt="Central Image"
          width={800}
          height={500}
          className="w-full h-auto"
        />
      </div>

      {/* Asset 6,7,8,9: Logo and buttons (placeholder layout) */}
      <div className="absolute top-10 w-full flex flex-col items-center gap-2 z-40">
        <Image src="/assets/asset6.png" alt="Logo" width={220} height={60} />
        <div className="flex gap-3">
          <Image src="/assets/asset7.png" alt="Button 1" width={120} height={40} />
          <Image src="/assets/asset8.png" alt="Button 2" width={120} height={40} />
          <Image src="/assets/asset9.png" alt="Button 3" width={120} height={40} />
        </div>
      </div>

      {/* Asset 10 + 11: Centered Overlays - exact pixel positions */}
      <Image
        src="/assets/asset10.png"
        alt="Overlay Left"
        width={150}
        height={150}
        className="absolute top-[52%] left-[5%] z-30"
      />
      <Image
        src="/assets/asset11.png"
        alt="Overlay Right"
        width={150}
        height={150}
        className="absolute top-[52%] right-[5%] z-30"
      />
    </section>
  );
}
