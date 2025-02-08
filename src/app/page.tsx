import { Emoji } from "@/app/_components/emoji";
import { Socials } from "@/app/_components/socials";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex flex-row items-center justify-center gap-4">
        <Emoji emoji="🦴" />
        <h1 className="text-4xl font-bold">
          {"<"}BytePuppy{" />"}
        </h1>
        <Emoji emoji="🐶" />
      </div>

      <Socials />
    </main>
  );
}
