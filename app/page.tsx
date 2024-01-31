import Image from "next/image";
import Link from "next/link";
import { auth } from "@/app/auth";
import { redirect } from "next/navigation";
import Counter from "./components/counter";

export default async function Home() {
  const session = await auth();

  // show login button if not logged in (Should be returning a separate component)
  if (!session) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-start p-24">
        <Link
          href="/api/auth/signin"
          className="border-white rounded-md px-3 py-2 bg-slate-900 text-lg"
        >
          Sign in
        </Link>
      </main>
    );
  }

  // can also use redirect
  /*
  if (!session) {
  redirect("/api/auth/signin?callbackUrl=/");
  }
  */

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      {session.user?.image && (
        <Image
          src={session.user.image}
          width={200}
          height={200}
          alt="user image"
        />
      )}

      <Counter />

      <Link
        href="/api/auth/signout"
        className="border-white rounded-md px-3 py-2 bg-slate-900 text-lg"
      >
        Sign out
      </Link>
    </main>
  );
}
