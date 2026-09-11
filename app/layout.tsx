import type { Metadata } from "next";
import "./globals.css";
export const metadata:Metadata={title:"KANTO BEER ATLAS | 関東クラフトビール案内",description:"関東1都6県の現役ブルワリーを網羅し、東京のタップルーム、ビアパブ、レストランを探し、比べ、巡るためのクラフトビール・フィールドガイド。",icons:{icon:"/favicon.svg",shortcut:"/favicon.svg"}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="ja"><body>{children}</body></html>}
