import Link from "next/link";

import ProductCard from "@oc/components/Router/ProductCard";

export default function RouterPage() {
  return (
    <section>
      <header className="flex items-center justify-between">
        <Link href="/">
          <h2 className="text-2xl">Router</h2>
        </Link>
      </header>
      <ul>
        <li>
          <Link href="/router/users">Users</Link>
        </li>
      </ul>
      <ProductCard />
    </section>
  );
}
