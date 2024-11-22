import { Button } from "@nextui-org/react";
import { signIn, signOut } from "@/actions";
// import { auth } from "@/auth";
import Profile from "@/components/profile";

export default async function Home() {
  // const session = await auth();
  return (
    <div>
      hello world!
      <form action={signIn}>
        <Button type="submit">Sign in</Button>
      </form>
      <form action={signOut}>
        <Button type="submit">Sign out </Button>
      </form>
      <Profile />
      {/* {session?.user ? <div>Signed In</div> : <div>Signed Out</div>}
      {JSON.stringify(session?.user)} */}
    </div>
  );
}
