import Image from "next/image";

export default function GoGreen() {
  return (
    <section className="py-20 px-6 bg-[#013220] text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Stânga: Titlu + Text */}
        <div className="flex-1 space-y-6">
          <Image
            src="/assets/asset_11.png"
            alt="Go Green or Go Home"
            width={500}
            height={120}
          />
          <Image
            src="/assets/asset_19.png"
            alt="Trenches quote"
            width={500}
            height={120}
          />
        </div>

        {/* Dreapta: Imagini meme */}
        <div className="flex-1 grid grid-cols-2 gap-4">
          {[
            "asset_12.png",
            "asset_13.png",
            "asset_14.png",
            "asset_15.png",
            "asset_16.png",
            "asset_17.png",
            "asset_18.png",
          ].map((img, index) => (
            <Image
              key={index}
              src={`/assets/${img}`}
              alt={`Meme ${index + 1}`}
              width={200}
              height={200}
              className="rounded-xl"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
