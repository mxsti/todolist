import Image from "next/image";
import SignOutButton from "./signoutbutton.component";

interface NotAuthorizedProps {
  userName?: string;
  userEmail?: string;
  userImage?: string;
}

export default function NotAuthorized(props: NotAuthorizedProps) {
  return (
    <main className="container noAuth">
        <h3>
          Moin {props.userName}, du bist leider nicht autorisiert die ToDo Liste zu
          sehen.
        </h3>
        <h1>😒</h1>
        <SignOutButton />
    </main>
  );
}
