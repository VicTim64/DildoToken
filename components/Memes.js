import Image from "next/image";

const memes = [
  "asset_32.png",
  "asset_33.png",
  "asset_34.png",
  "asset_35.png",
  "asset_36.png",
  "asset_37.png"
];

export default function Memes() {
  return (
    <section className="py-20 px-6 bg-[#013220] text-white">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        {/* Titlu */}
        <Image
          src="/assets/asset_31.png"
          alt="Dildo Community Memes"
          width={400}
          height={80}
          className="mx-auto"
        />

        {/* Meme grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {memes.map((src, index) => (
            <a
              key={index}
              href={`/assets/${src}`}
              download
              className="transition-transform hover:scale-105"
            >
              <Image
                src={`/assets/${src}`}
                alt={`Meme ${index + 1}`}
                width={300}
                height={300}
                className="rounded-lg"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
