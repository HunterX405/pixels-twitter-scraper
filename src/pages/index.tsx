import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  // `session` will match the returned value of `callbacks.session()` from `NextAuth()`
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    return (
      <div>
        <button onClick={() => signIn("twitter")}>Sign in with Twitter</button>
      </div>
    );
  }

  return (
    <div>
      {session.user && (
        <p>Signed in as {session.user.email ?? session.user.name}</p>
      )}
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
}
