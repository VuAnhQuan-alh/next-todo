"use client";

import { memo } from "react";

interface IProps {
  id: number;
  title: string;
  completed: boolean;
  onToggleTodo: (id: number, completed: boolean) => void;
  onDeleteTodo: (id: number) => void;
}

const ItemTodo = (props: IProps) => {
  const { id, title, completed, onToggleTodo, onDeleteTodo } = props;

  return (
    <section className="flex items-center gap-x-2 mx-4">
      <input
        id={id.toString()}
        defaultChecked={completed}
        className="cursor-pointer peer"
        type="checkbox"
        onChange={(e) => onToggleTodo(id, e.target.checked)}
      />
      <label
        htmlFor={id.toString()}
        className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
      >
        {title}
      </label>
      <button
        onClick={() => onDeleteTodo(id)}
        className="border border-slate-300 w-4 h-4 leading-3 pb-1 rounded"
      >
        x
      </button>
    </section>
  );
};

export default memo(ItemTodo);
