"use client";
import AboutSection from "@/sections/about-section";
import { useUser } from "@clerk/nextjs";

export default function Home() {
  const { user } = useUser();
  return (
    <div>
      <AboutSection />
      <h1>
        Olá, {user?.firstName} {user?.lastName}
      </h1>
    </div>
  );
}
