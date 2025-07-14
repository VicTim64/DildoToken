import Image from "next/image";

export default function GoGreen() {
  return (
    <section className="py-20 px-6 bg-[#013220] text-white">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        {/* Titlu Go Green */}
        <Image
          src="/assets/asset_10.png"
          alt="Go Green Title"
          width={600}
          height={100}
          className="mx-auto"
        />

        {/* Text motivational */}
        <Image
          src="/assets/asset_11.png"
          alt="Trenches Quote"
          width={700}
          height={80}
          className="mx-auto"
        />

        {/* Meme row */}
        <div className="flex flex-wrap justify-center gap-6">
          <Image src="/assets/asset_12.png" alt="Meme 1" width={200} height={200} />
          <Image src="/assets/asset_13.png" alt="Meme 2" width={200} height={200} />
          <Image src="/assets/asset_14.png" alt="Meme 3" width={200} height={200} />
          <Image src="/assets/asset_15.png" alt="Meme 4" width={200} height={200} />
          <Image src="/assets/asset_16.png" alt="Meme 5" width={200} height={200} />
        </div>
      </div>
    </section>
  );
}