import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-[#013220] text-white">
      <div className="max-w-xl mx-auto flex flex-col items-center space-y-6">
        {/* Titlu */}
        <Image
          src="/assets/asset_38.png"
          alt="Join Community"
          width={400}
          height={80}
        />

        {/* Buton Join */}
        <a
          href="#"
          className="mt-4 bg-white text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-gray-200 transition"
        >
          JOIN
        </a>
      </div>
    </footer>
  );
}
