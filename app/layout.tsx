import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "L Message UI/UX改善提案",
  description: "株式会社ミショナ ITエンジニア職種別適性テスト提出用ページ",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
