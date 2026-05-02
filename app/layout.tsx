import type { Metadata } from "next";
import { Geist_Mono, Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Jagdu — Think Before You Spend",
  description:
    "Your honest AI financial guardian before every purchase. Not a passive tracker, but an active advisor.",
  keywords: [
    "financial",
    "ai",
    "budgeting",
    "jagdu",
    "expenses",
    "smart spending",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {" "}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-kira-accent/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-kira-accent/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] bg-[length:4px_4px] pointer-events-none opacity-40" />
        {children}
      </body>
    </html>
  );
}
