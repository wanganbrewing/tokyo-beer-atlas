import { writeFile } from "node:fs/promises";

const pages = ["Kanto.html", "Kanto2.html"];
const base = "https://www.beer-cruise.net/beer/";

const clean = (value) => value
  .replace(/<br\s*\/?\s*>/gi, " ")
  .replace(/<[^>]+>/g, "")
  .replace(/&amp;/g, "&")
  .replace(/&nbsp;/g, " ")
  .replace(/&#39;/g, "'")
  .replace(/&quot;/g, '"')
  .replace(/\s+/g, " ")
  .trim();

const records = [];
for (const page of pages) {
  const response = await fetch(base + page);
  if (!response.ok) throw new Error(`${page}: ${response.status}`);
  const html = new TextDecoder("utf-8").decode(await response.arrayBuffer());
  const rows = [...html.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)].map((match) => match[1]);
  for (const row of rows) {
    const cells = [...row.matchAll(/<td[^>]*>([\s\S]*?)<\/td>/gi)].map((match) => match[1]);
    if (cells.length !== 4) continue;
    if (!/label10\.png/i.test(cells[2])) continue;
    const location = clean(cells[3]);
    const prefecture = ["東京都", "神奈川県", "埼玉県", "千葉県", "茨城県", "栃木県", "群馬県"].find((name) => location.startsWith(name));
    if (!prefecture) continue;
    const href = cells[0].match(/href=["']([^"']+)["']/i)?.[1];
    records.push({
      id: `bc-${records.length + 1}`,
      brand: clean(cells[0]),
      brewpub: clean(cells[1]).replace(/［[^］]+］/g, "").trim() || "タップルームなし",
      maker: clean(cells[2]),
      location,
      prefecture,
      beerCruiseUrl: href ? new URL(href, base + page).href : base + page,
      sourceListUrl: base + page,
    });
  }
}

records.sort((a, b) => a.prefecture.localeCompare(b.prefecture, "ja") || a.location.localeCompare(b.location, "ja") || a.brand.localeCompare(b.brand, "ja"));
await writeFile("app/kanto-breweries.json", `${JSON.stringify(records, null, 2)}\n`, "utf8");

const counts = Object.groupBy(records, (record) => record.prefecture);
console.log(JSON.stringify({ total: records.length, counts: Object.fromEntries(Object.entries(counts).map(([key, value]) => [key, value.length])) }, null, 2));
