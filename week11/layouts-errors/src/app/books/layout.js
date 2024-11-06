"use client";

import Link from "next/link";
import "./books.css"

export default function BooksLayout({ children }) {
    return (
        <div className="booksLayout">
            <nav>
                <ul>
                    <li>
                        <Link href="/books">Catalog</Link>
                    </li>
                    <li>
                        <Link href="/books/locations">Locations</Link>
                    </li>
                </ul>
            </nav>
            {children}
        </div>
    )
}