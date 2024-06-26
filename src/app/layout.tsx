import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Home",
  description: "The home page of the website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
