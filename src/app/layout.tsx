import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
 title: "ワンドロ用ウマ娘抽選アプリ",
 description: "ウマ娘キャラクターをランダムに抽選する高機能Webアプリ。重み付き抽選、履歴管理、設定保存機能付き。",
 keywords: ["ウマ娘", "抽選", "ランダム", "キャラクター", "ガチャ"],
 authors: [{ name: "Uma Lottery App" }],
 viewport: "width=device-width, initial-scale=1",
 themeColor: "#3b82f6",
};

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
   <html lang="ja">
     <head>
       <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎲</text></svg>" />
       <link rel="preconnect" href="https://images.microcms-assets.io" />
       <meta name="apple-mobile-web-app-capable" content="yes" />
       <meta name="apple-mobile-web-app-status-bar-style" content="default" />
       <meta name="apple-mobile-web-app-title" content="ウマ娘抽選" />
     </head>
     <body className="antialiased bg-white">
       {children}
     </body>
   </html>
 );
}