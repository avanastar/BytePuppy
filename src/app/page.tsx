import { Socials } from "@/app/_components/socials";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-bl from-[#234024] to-[#0a1a0f] text-white">
      <h1 className="text-4xl font-bold">🦴 BytePuppy 🐶</h1>
      <Socials />
    </main>
  );
}
