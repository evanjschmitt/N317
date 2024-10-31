"use client";
import { useState } from "react";
import Link from "next/link";

export default function PeepPage() {
  const [peepName, setPeepName] = useState("");

  function changePeepName(e) {
    setPeepName(e.currentTarget.value);
  }

  return (
    <main>
      <h1>Peeps</h1>
      <input value={peepName} onChange={changePeepName} />
      <Link href={`/peep/${peepName}`}>
        <button>Go to Peep!!!!</button>
      </Link>
    </main>
  );
}
