import Link from "next/link";

export default async function Home() {
  return (
    <section className="container mx-auto px-10 py-4">
      <ul className="list-disc">
        <li>
          <Link href="/todo">Server actions</Link>
        </li>
        <li>
          <Link href="/router">App router</Link>
        </li>
      </ul>
    </section>
  );
}
