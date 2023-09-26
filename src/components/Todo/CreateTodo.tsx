"use client";

import { memo, useEffect } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

import { createTodo } from "@oc/server-actions/todo";

const CreateTodo = () => {
  const { pending } = useFormStatus();
  console.log("create todo render");

  useEffect(() => {
    return () => {
      console.log("render unmount");
    };
  }, []);

  return (
    <section>
      <form action={createTodo}>
        <section className="flex items-center gap-x-4 mb-4">
          <input
            type="text"
            name="title"
            className="border w-full border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
          />
        </section>

        <section className="flex items-center gap-x-4">
          <button
            className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none max-w-24 w-full"
            type="submit"
          >
            {pending ? "Creating todo..." : "Create"}
          </button>
        </section>
      </form>
    </section>
  );
};

export default memo(CreateTodo);
