import Link from "next/link";

import { prisma } from "@oc/db";

export default async function Home() {
  const todo = await prisma.todo.findMany();

  return (
    <section>
      <header className="flex items-center justify-between mb-4">
        <h2 className="text-2xl">Todo list</h2>
        <Link
          href="/create"
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded-md hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
        >
          Create
        </Link>
      </header>
      <main>
        <ul>
          {todo.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </main>
    </section>
  );
}
