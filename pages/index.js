import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dildo Token</title>
      </Head>
      <main className="min-h-screen bg-[#013220] text-white p-6 space-y-10">
        <h1 className="text-2xl font-bold">Navbar</h1>
        <h2 className="text-xl">Hero Section</h2>
        <h2 className="text-xl">Go Green or Go Home</h2>
        <h2 className="text-xl">Join the Movement</h2>
        <h2 className="text-xl">Dildo Store - COMING SOON</h2>
        <h2 className="text-xl">Community Memes</h2>
        <h2 className="text-xl">Join Community</h2>
      </main>
    </>
  );
}