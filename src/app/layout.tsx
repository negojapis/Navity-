import type { Metadata } from "next";
import { Inter, Playfair_Display, Marcellus } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const marcellus = Marcellus({
  weight: "400",
  variable: "--font-marcellus",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Navity | O tempo elevado à sua forma mais rara",
  description: "Relógios criados para quem entende que precisão, presença e legado são detalhes que atravessam gerações. Silent luxury e exclusividade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} ${marcellus.variable} antialiased bg-off-white text-black-absolute font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
