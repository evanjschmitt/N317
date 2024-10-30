import "./globals.css";
import Nav from "../componenets/Nav";

export const metadata = {
  title: "Week09",
  description: "Generated by EvTheDev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav/>
        {children}
      </body>
    </html>
  );
}
