"use client";
import { useUser } from "@clerk/nextjs";

export default function Home() {
  const { isSignedIn, user } = useUser();
  return (
    <div>
      <h1>
        Olá, {user?.firstName} {user?.lastName}
      </h1>
    </div>
  );
}
