import "./globals.css";
import Nav from "@/components/Nav";
import { PokemonProvider } from "@/hooks/usePokemonApi";

export const metadata = {
  title: "N317 Homework04",
  description: "PokeAPI Integration",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PokemonProvider>
          <Nav />
          {children}
        </PokemonProvider>
      </body>
    </html>
  );
}
