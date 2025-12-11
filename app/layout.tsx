import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "dot",
  description: "Find the shortest path to anyone on LinkedIn.",
  openGraph: {
    title: "dot",
    description: "Find the shortest path to anyone on LinkedIn.",
    url: "https://dotproduct.one",
    siteName: "dot",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "dot",
    description: "Find the shortest path to anyone on LinkedIn.",
  },
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
