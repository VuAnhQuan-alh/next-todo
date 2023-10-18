import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import Link from "next/link";

import NavMenu from "@oc/components/Auth/NavMenu";
import SessionProvider from "@oc/context/section-provider";

export const metadata: Metadata = {
  title: "Todo list app",
  description: "Generated by create next app",
};

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <section className="bg-gray-800 h-screen text-gray-100 container mx-auto p-4">
      <SessionProvider session={session}>
        <header className="flex items-center justify-between mb-4">
          <Link href="/">Auth page</Link>
          <NavMenu />
        </header>

        {children}
      </SessionProvider>
    </section>
  );
}
