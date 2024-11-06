"use client";

import Link from "next/link";
import BooksError from "./error";

export default function BooksPage() {

    try {
        function throwError() {
        throw new Error("Bad Book");
    }
  return (
    <main>
      <h1>Books :D</h1>
    {/* <button onClick={throwError}>Open Bad Book</button> */}
    <Link href="/books/new">Add New Book</Link>
    </main>
  );
    } catch (e) {
        return BooksError
    }

    
}
