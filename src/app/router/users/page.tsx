import Link from "next/link";

interface Users {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
  };
}

const UsersPage = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 },
    // cache: "no-store",
  });
  const users: Users[] = await response.json();

  return (
    <section>
      <header className="flex items-center justify-between mb-4">
        <Link href="/router">
          <h2 className="text-2xl">Users list</h2>
        </Link>
      </header>

      <main>
        <section>{new Date().toLocaleTimeString()}</section>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <h4>{user.name}</h4>
              <p>{user.email}</p>
            </li>
          ))}
        </ul>
      </main>
    </section>
  );
};

export default UsersPage;
