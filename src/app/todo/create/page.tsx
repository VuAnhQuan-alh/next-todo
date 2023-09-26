import Link from "next/link";
import { redirect } from "next/navigation";

import { prisma } from "@oc/db";

async function createTodo(data: FormData) {
  "use server";
  const title = data.get("title")?.valueOf();

  if (!title || typeof title !== "string") {
    return new Response("Title is required", {
      status: 400,
    });
  }

  await prisma.todo.create({
    data: {
      title,
      completed: false,
    },
  });

  redirect("/todo");
}

export default function CreatePage() {
  return (
    <section>
      <header className="flex items-center justify-between mb-4">
        <h2 className="text-2xl">Create todo</h2>
      </header>

      <main>
        <form action={createTodo}>
          <section className="flex items-center gap-x-4 mb-4">
            <input
              type="text"
              name="title"
              autoFocus
              className="border w-full border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
            />
          </section>

          <section className="flex items-center gap-x-4">
            <Link
              href="/todo"
              className="text-center border border-slate-300 bg-slate-300 px-2 rounded text-slate-700 py-1 outline-none max-w-24 w-full"
            >
              Cancel
            </Link>
            <button
              className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none max-w-24 w-full"
              type="submit"
            >
              Create
            </button>
          </section>
        </form>
      </main>
    </section>
  );
}
