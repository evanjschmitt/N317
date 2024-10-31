"use client";
import { SignInButton, UserButton, SignedIn, SignedOut } from "@/clerk/nextjs";

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <SignedOut>
        <SignInButton></SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton></UserButton>
      </SignedIn>
    </main>
  );
}
