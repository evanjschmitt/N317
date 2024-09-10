import "./globals.css";

export const metadata = {
  title: "Ev's Albums",
  description: "A Basic Next.js Showcase",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
