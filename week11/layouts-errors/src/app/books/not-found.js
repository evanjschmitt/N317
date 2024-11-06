"use client";

import Link from "next/link";

export default function BooksPageNotFound () {
    return (
        <manin>
            <h1>Page Not Found</h1>
            <p>See if you can find what you are looking for in our Catalog!</p>
            <Link href="/books">Our Catalog</Link>
        </manin>
    )
}