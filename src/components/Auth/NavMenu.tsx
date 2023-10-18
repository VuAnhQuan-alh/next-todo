"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { memo } from "react";

const NavMenu = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <section>
        <button onClick={() => signOut()}>Sign Out</button>
      </section>
    );
  }

  return (
    <section>
      <button onClick={() => signIn()}>Sign In</button>
    </section>
  );
};
export default memo(NavMenu);
