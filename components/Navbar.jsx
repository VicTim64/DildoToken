
export default function Navbar() {
  return (
    <nav className="bg-green-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">DILDO TOKEN</h1>
        <div className="space-x-4">
          <a href="#buy" className="hover:underline">Buy DILDO</a>
          <a href="#community" className="hover:underline">Community</a>
          <a href="#nft" className="hover:underline">NFT</a>
          <a href="#shop" className="hover:underline">Dildo Shop</a>
        </div>
      </div>
    </nav>
  );
}
