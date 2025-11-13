import type { Metadata } from "next";
import { Orbitron, Poppins } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: '--font-orbitron',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "RIWOXX TOP UP - Top Up Game & Voucher Instan",
  description: "Beli Diamonds, UC, Voucher, dan Pulsa tanpa ribet! Aman & Terpercaya. Bayar pakai DANA, BCA, Krom Bank, atau Seabank.",
  keywords: "top up game, diamonds ml, uc pubg, free fire diamonds, voucher game, riwoxx",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${orbitron.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
