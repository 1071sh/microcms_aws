import type { Metadata } from "next";
import "./globals.css";

// AWS Amplifyでのキャッシュ問題に対応
export const fetchCache = "force-no-store";
export const dynamic = "force-dynamic";

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
