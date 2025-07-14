const products = [
  { image: "/assets/store1.png", title: "Green Dildo Cap", link: "https://dildoshop.com/item1" },
  { image: "/assets/store2.png", title: "Monster Dildo Tee", link: "https://dildoshop.com/item2" },
];

export default function Store() {
  return (
    <section className="bg-green-950 text-white py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Dildo Store</h2>
      <div className="flex justify-center gap-6 flex-wrap px-4">
        {products.map((item, index) => (
          <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="bg-green-800 p-4 rounded shadow-md w-64 hover:bg-green-700 transition">
            <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded mb-4" />
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <button className="mt-2 px-4 py-2 bg-white text-green-900 rounded">Buy Now</button>
          </a>
        ))}
      </div>
    </section>
  );
}
