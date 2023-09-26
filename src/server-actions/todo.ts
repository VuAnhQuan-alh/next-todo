"use server";

import { revalidatePath } from "next/cache";

import { prisma } from "@oc/db";

export async function createTodo(data: FormData) {
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

  revalidatePath("/todo");
}
