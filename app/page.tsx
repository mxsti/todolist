"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Tasklist from "./components/tasklist.component";
import { useEffect, useState } from "react";
import NotAuthorized from "./components/notauthorized.component";

export default function Home() {
  const [userAllowed, setUserAllowed] = useState();
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin");
    },
  });

  const fetchUserAllowed = async (email: string) => {
    const response = await fetch(`/api/users?email=${email}`);
    return await response.json();
  };

  useEffect(() => {
    if (!userAllowed) {
      fetchUserAllowed(session?.user?.email!).then((data) =>
        setUserAllowed(data)
      );
    }
  }, [userAllowed]);

  if (userAllowed) {
    return <Tasklist />;
  } else if (!userAllowed && session?.user?.name) {
    return <NotAuthorized userName={session.user.name}/>;
  }
}
