import navStyles from "./nav.module.css"
import Link from "next/link";

export default function Nav() {
    return (
        <nav className={navStyles.miniNav}>
            <ul>
                <li>
                    <Link href="/">HOME</Link>
                </li>
                <li>
                    <Link href="/about">ABOUT</Link>
                </li>
                <li>
                    <Link href="/">PRODUCTS</Link>
                </li>
                <li>
                    <Link href="/">CONTACT</Link>
                </li>
            </ul>
        </nav>
    )
}