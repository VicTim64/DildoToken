import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-[#013220] text-white text-center">
      <div className="max-w-xl mx-auto space-y-6">
        <Image
          src="/assets/asset_33.png"
          alt="Join Community"
          width={400}
          height={80}
          className="mx-auto"
        />

        <a
          href="https://twitter.com" // înlocuiește cu linkul real
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-6 py-3 bg-green-700 hover:bg-green-600 rounded-full text-white transition"
        >
          Join Us on X
        </a>
      </div>
    </footer>
  );
}
