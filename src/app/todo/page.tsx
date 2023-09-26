import { revalidatePath } from "next/cache";
import Link from "next/link";

import CreateTodo from "@oc/components/Todo/CreateTodo";
import ItemTodo from "@oc/components/Todo/ItemTodo";
import { prisma } from "@oc/db";

function getTodo() {
  return prisma.todo.findMany({
    where: { deletedAt: null },
    orderBy: { id: "desc" },
  });
}

async function toggleTodo(id: number, completed: boolean) {
  "use server";

  await prisma.todo.update({
    where: { id },
    data: { completed },
  });
}

async function deleteTodo(id: number) {
  "use server";

  await prisma.todo.update({
    where: { id },
    data: { deletedAt: new Date() },
  });
  revalidatePath("/todo");
}

export default async function Home() {
  const todo = await getTodo();
  console.log("todo render");

  return (
    <section>
      <header className="flex items-center justify-between mb-4">
        <Link href="/">
          <h2 className="text-2xl">Todo list</h2>
        </Link>
        <Link
          href="/todo/create"
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded-md hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
        >
          Create
        </Link>
      </header>

      <main className="mb-8">
        <ul>
          {todo.map((todo) => (
            <ItemTodo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
              onToggleTodo={toggleTodo}
              onDeleteTodo={deleteTodo}
            />
          ))}
        </ul>
      </main>

      <CreateTodo />
    </section>
  );
}
