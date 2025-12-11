import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "dot",
  description: "Find the shortest path to anyone on LinkedIn. Technology should help us see how we're already all connected.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
