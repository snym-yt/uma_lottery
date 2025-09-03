import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ウマ娘抽選アプリ",
  description: "ウマ娘キャラクターをランダムに抽選するWebアプリ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
