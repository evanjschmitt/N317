import Link from "next/link";
import navStyles from "./nav.module.css"
export default function Nav() {
  return <Nav style={navStyles.mainNav}>
    <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/search">Search</Link></li>
        <li><Link href="/favorites">Favorites</Link></li>
    </ul>
  </Nav>;
}
