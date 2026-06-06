import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-3xl font-bold">Welcome to My App</h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          This is a simple Next.js app.
        </p>
      </main>
    </div>
  );
}
