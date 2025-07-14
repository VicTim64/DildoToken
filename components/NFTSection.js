import Image from "next/image";

export default function NFTSection() {
  return (
    <section className="py-20 px-6 bg-[#013220] text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        {/* Stânga: Text și decor */}
        <div className="flex-1 space-y-6">
          <Image
            src="/assets/asset_17.png"
            alt="Join the movement title"
            width={500}
            height={100}
          />
          <Image
            src="/assets/asset_18.png"
            alt="Mint Dildo NFT text"
            width={500}
            height={50}
          />
          <Image
            src="/assets/asset_19.png"
            alt="Mint Button"
            width={200}
            height={60}
          />
        </div>

        {/* Dreapta: Imagine NFT */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/assets/asset_20.png"
            alt="NFT Dildo"
            width={300}
            height={300}
            className="rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
