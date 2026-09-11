# KANTO BEER ATLAS

関東のクラフトビール店を「探す・比べる・巡る」ためのレスポンシブWebアプリMVPです。クラフトビール専門誌と旅行ガイドブックを掛け合わせた編集デザインで、関東1都6県の現役醸造拠点ディレクトリ、東京の編集部選定店、部門別ランキング、ルート提案、ビアフェス情報を一つにまとめています。

> 関東ディレクトリはビアクルーズの公開一覧で「現在、自家醸造中」と示された拠点を基準にしています。東京の評価、営業時間、ルート、ビアフェス情報はMVPの編集用サンプルを含みます。訪問前に公式・掲載元リンクで最新情報をご確認ください。

## 主な機能

- Brewery / Taproom / Beer Pub / World Beer Restaurant の検索・絞り込み
- Google Maps、地図ピンと店舗一覧の連動、キーワード検索
- 関東322醸造拠点の県別・名称別検索、Google Maps直リンク
- 営業時間、定休日、最寄り駅、評価内訳、飲むべき3杯を含む店舗詳細
- 公式サイト、複数の専門記事、ビアクルーズ掲載、受賞・掲載根拠への直リンク
- World Beer Restaurant向けの料理3選とビールペアリング
- ブルワリーとパブ・レストランを分けた東京ランキング
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

主要な画面と編集データは `app/page.tsx`、関東全件データは `app/kanto-breweries.json`、デザインは `app/globals.css`、画像は `public/` にあります。`scripts/scrape-beer-cruise.mjs` で公開一覧から現役醸造拠点を再取得できます。

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

## データ出典

- [ビアクルーズ：栃木・群馬・茨城・埼玉・千葉](https://www.beer-cruise.net/beer/Kanto.html)
- [ビアクルーズ：東京・神奈川](https://www.beer-cruise.net/beer/Kanto2.html)
- [国税庁：日本の酒蔵を探す](https://www.nta.go.jp/taxes/sake/sakagura/index.htm)

ビアクルーズのブランド詳細ページがあるレコードはそのページへ、ないレコードは該当する関東一覧ページへ直接リンクします。

## ライセンス

Private / All rights reserved.
