# TOKYO BEER ATLAS

東京のクラフトビール店を「探す・比べる・巡る」ためのレスポンシブWebアプリMVPです。クラフトビール専門誌と旅行ガイドブックを掛け合わせた編集デザインで、店舗検索、BEST 10、ルート提案、ビアフェス情報を一つにまとめています。

> このリポジトリの店舗名、評価、営業時間、ルート、ビアフェス情報はUI検証用のサンプルです。実在店舗・イベントの情報ではありません。

## 主な機能

- Brewery / Taproom / Beer Pub / World Beer Restaurant の検索・絞り込み
- 地図ピンと店舗一覧の連動、キーワード検索
- 営業時間、定休日、最寄り駅、評価内訳、飲むべき3杯を含む店舗詳細
- World Beer Restaurant向けの料理3選とビールペアリング
- 東京エリアのBEST 10と評価基準、目的別切り替えUI
- 時間・軒数・好みに応じたおすすめルートと移動時間
- ルート全体で飲むべき5杯
- ビアフェスの開催日、会場、出店規模、スタイル、チケット状況
- デスクトップ / タブレット / スマートフォン対応

## 技術構成

- Next.js 16 / React 19 / TypeScript
- Vinext / Vite
- Tailwind CSS 4 + 独自CSS
- Lucide Icons
- 生成した版画調のオリジナル・キービジュアル

主要な画面とサンプルデータは `app/page.tsx`、デザインは `app/globals.css`、画像は `public/` にあります。

## 起動方法

Node.js 22.13以上が必要です。

```bash
npm ci
npm run dev
```

ブラウザで `http://localhost:5173` を開きます。

本番向けビルド:

```bash
npm run build
npm start
```

## 次の開発候補

- Mapbox / Google Maps等の実地図への切り替え
- 店舗・イベント情報の管理画面と外部API連携
- 現在時刻、定休日、公共交通の所要時間を使った経路最適化
- 公式URL、専門記事、受賞歴、実レビューの出典管理
- お気に入り、ルート保存、共有

## ライセンス

Private / All rights reserved.
