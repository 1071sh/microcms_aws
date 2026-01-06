import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "microCMSブログ",
  description: "microCMSとNext.jsで作成したブログのサンプル",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
