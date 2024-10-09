import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";


export const metadata = {
  title: "Week07",
  description: "Component Based Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      
    </html>
  );
}
