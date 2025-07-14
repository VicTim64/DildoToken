import Image from "next/image";

export default function Store() {
  return (
    <section className="py-20 px-6 bg-[#013220] text-white">
      <div className="max-w-6xl mx-auto">
        {/* Titlu + descriere */}
        <div className="text-center space-y-6 mb-12">
          <Image
            src="/assets/asset_21.png"
            alt="Dildo Store Title"
            width={500}
            height={100}
            className="mx-auto"
          />
          <Image
            src="/assets/asset_22.png"
            alt="Dildo Store Description"
            width={700}
            height={50}
            className="mx-auto"
          />
        </div>

        {/* Produse */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <Image
              src="/assets/asset_23.png"
              alt="Produs 1"
              width={250}
              height={250}
              className="mx-auto"
            />
            <p className="text-sm text-gray-300">COMING SOON</p>
          </div>

          <div className="text-center space-y-4">
            <Image
              src="/assets/asset_24.png"
              alt="Produs 2"
              width={250}
              height={250}
              className="mx-auto"
            />
            <p className="text-sm text-gray-300">COMING SOON</p>
          </div>

          <div className="text-center space-y-4">
            <Image
              src="/assets/asset_25.png"
              alt="Produs 3"
              width={250}
              height={250}
              className="mx-auto"
            />
            <p className="text-sm text-gray-300">COMING SOON</p>
          </div>
        </div>
      </div>
    </section>
  );
}
