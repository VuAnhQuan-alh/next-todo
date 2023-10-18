import { getServerSession } from "next-auth";
import Image from "next/image";

export default async function AuthPage() {
  const session = await getServerSession();

  return (
    <section>
      {session ? (
        <section className="flex items-center gap-x-5">
          <Image
            width={50}
            height={50}
            src={session?.user?.image?.toString() || "/avatar/default.jpeg"}
            alt="avatar-git"
            style={{ borderRadius: "20%" }}
            priority
          />
          <section>
            <h4 className="text-lg">{session?.user?.name}</h4>
            <h5 className="text-md">{session?.user?.email}</h5>
          </section>
        </section>
      ) : (
        <>No logged in</>
      )}
    </section>
  );
}
