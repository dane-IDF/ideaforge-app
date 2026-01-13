export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-5xl font-bold">IdeaForge</h1>
        <p className="text-lg text-gray-400">
          Turn ideas into products. Faster.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 rounded-lg bg-white text-black font-semibold">
            Join the Beta
          </button>
          <button className="px-6 py-3 rounded-lg border border-gray-600">
            Learn More
          </button>
        </div>
      </div>
    </main>
  );
}

