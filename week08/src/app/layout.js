import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import { AppProvider } from "@/hooks/useAppState";
import "./globals.css";

export const metadata = {
  title: "Awesome Axolotls",
  description: "I Love Axolotls :D",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AppProvider>
        <body>
          <Nav></Nav>
          {children}
        </body>
      </AppProvider>
    </html>
  );
}
