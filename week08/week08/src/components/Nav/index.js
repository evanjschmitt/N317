import navStyles from "./nav.module.css"

export default function Nav() {
    return (
        <nav className={navStyles.miniNav}>
            <ul>
                <li>
                    <a href="/">HOME</a>
                </li>
                <li>
                    <a href="/about">ABOUT</a>
                </li>
                <li>
                    <a href="/">PRODUCTS</a>
                </li>
                <li>
                    <a href="/">CONTACT</a>
                </li>
            </ul>
        </nav>
    )
}