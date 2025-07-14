import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#01110A]">
      {/* LOGO + NAVBAR */}
      <div className="flex flex-col items-center justify-center pt-6 md:pt-10">
        <Image
          src="/assets_hero/dildo-logo.png"
          alt="dildo logo"
          width={300}
          height={80}
          className="w-[200px] md:w-[300px] h-auto"
        />

        <div className="flex flex-col md:flex-row items-center justify-center gap-2 mt-4 md:mt-6 z-10">
          <Image
            src="/assets_hero/buy-button.png"
            alt="buy button"
            width={200}
            height={60}
            className="w-[160px] md:w-[200px] h-auto"
          />
          <Image
            src="/assets_hero/community-button.png"
            alt="community button"
            width={200}
            height={60}
            className="w-[160px] md:w-[200px] h-auto"
          />
        </div>
      </div>

      {/* DILDO CENTRAL */}
      <div className="flex justify-center items-center w-full mt-6 px-4 md:px-0">
        <Image
          src="/assets_hero/dildo-central.png"
          alt="central image"
          width={700}
          height={400}
          className="max-w-full h-auto border-4 border-[#00FF00]"
        />
      </div>

      {/* BACKGROUND BOTTOM BAR */}
      <div className="w-full h-16 md:h-24 bg-[url('/assets_hero/green-bar.png')] bg-repeat-x mt-4" />

      {/* DILDO LEFT */}
      <div className="absolute bottom-0 left-0 hidden md:block">
        <Image
          src="/assets_hero/dildo-left.png"
          alt="dildo left"
          width={160}
          height={300}
        />
      </div>

      {/* DILDO RIGHT */}
      <div className="absolute bottom-0 right-0 hidden md:block">
        <Image
          src="/assets_hero/dildo-right.png"
          alt="dildo right"
          width={160}
          height={300}
        />
      </div>

      {/* DILDO LEFT MOBILE */}
      <div className="absolute bottom-0 left-0 md:hidden">
        <Image
          src="/assets_hero/dildo-left.png"
          alt="dildo left mobile"
          width={80}
          height={160}
        />
      </div>

      {/* DILDO RIGHT MOBILE */}
      <div className="absolute bottom-0 right-0 md:hidden">
        <Image
          src="/assets_hero/dildo-right.png"
          alt="dildo right mobile"
          width={80}
          height={160}
        />
      </div>
    </section>
  );
}