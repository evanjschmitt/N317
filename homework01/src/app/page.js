"use client";
import homeStyles from "./page.module.css";

export default function Home() {
  const headerStyle = {
    backgroundcolor: "slategrey",
    height: "100px",
    display: "flex",
    alignitems: "center",
    justifyContent: "center"
  
  }
  return (
    <main>
      <nav className={homeStyles.homeNav}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </main>
  );
}
