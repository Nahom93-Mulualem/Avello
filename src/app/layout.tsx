import type { Metadata } from "next";
import "./globals.css";
import ClientShell from "@/components/ClientShell";

export const metadata: Metadata = {
  title: "Abel Gidey | Personal Trainer • Precision first. Power follows.",
  description:
    "Personal trainer built on mechanics rather than ego. Load goes up only when the movement is clean; power comes after precision. Private in Addis Ababa or online worldwide.",
  keywords: [
    "Abel Gidey",
    "Coach Avello",
    "Personal Trainer Addis Ababa",
    "Weight Training Mechanics",
    "Movement Assessment",
    "Precision Strength",
  ],
  openGraph: {
    title: "Abel Gidey | Personal Trainer",
    description: "Precision first. Power follows. Personal trainer built on mechanics rather than ego.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,600;1,9..40,400&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-canvas text-ink antialiased font-sans selection:bg-secondary/20 selection:text-ink">
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
