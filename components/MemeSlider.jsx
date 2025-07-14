import { useEffect, useState } from "react";

export default function MemeSlider() {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    const memeList = [
      "meme1.jpg",
      "meme2.jpg",
      "meme3.jpg",
      "meme4.jpg",
    ];
    setMemes(memeList);
  }, []);

  return (
    <section className="bg-black text-white py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Dildo Community Memes</h2>
      <div className="flex overflow-x-auto space-x-4 px-4">
        {memes.map((meme, index) => (
          <a key={index} href={`/memes/${meme}`} download className="flex-shrink-0">
            <img src={`/memes/${meme}`} alt={meme} className="w-64 h-40 object-cover rounded hover:opacity-80 transition" />
          </a>
        ))}
      </div>
    </section>
  );
}
