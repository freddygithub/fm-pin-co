import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "F&M Pin Co. — Collectible pins and live sales",
  description: "Collectible pins, magical finds, and live sales from F&M Pin Co.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
