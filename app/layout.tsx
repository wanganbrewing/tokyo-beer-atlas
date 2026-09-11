import type { Metadata } from "next";
import "./globals.css";
export const metadata:Metadata={title:"TOKYO BEER ATLAS | 東京クラフトビール案内",description:"東京のブルワリー、タップルーム、ビアパブを探し、比べ、歩いて巡るためのクラフトビール・フィールドガイド。",icons:{icon:"/favicon.svg",shortcut:"/favicon.svg"}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="ja"><body>{children}</body></html>}
