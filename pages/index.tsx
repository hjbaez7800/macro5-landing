import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Macro5™ — Powered by Castle Verde</title>
        <meta name="description" content="Predict your glucose spike before you eat." />
      </Head>

      <main className="min-h-screen bg-white flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold mb-4">Macro5™</h1>
        <p className="text-lg mb-6 text-gray-700">Powered by The Castle Verde Index™</p>

        <ul className="mb-6 space-y-2 text-left text-gray-600">
          <li>✅ Predicts your glucose spike before you eat</li>
          <li>✅ Exposes hidden sugar bombs and “healthy” traps</li>
          <li>✅ Instantly shows how balanced or dangerous your meal is</li>
        </ul>

        <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800">
          Coming Soon
        </button>

        <footer className="mt-12 text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Castle Verde
        </footer>
      </main>
    </>
  );
}
