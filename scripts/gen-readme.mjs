/**
 * 由 files.json 重建 README.md 中 DEMOS 标记之间的表格与直链清单。
 * 零依赖，仅需 Node 18+。用法：在仓库根目录执行 `node scripts/gen-readme.mjs`
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const BASE_URL = 'https://alen2022-sun.github.io/HTML5-Demo/';
const START = '<!-- DEMOS:START -->';
const END = '<!-- DEMOS:END -->';

const readJson = p => JSON.parse(readFileSync(join(ROOT, p), 'utf8'));

/** Markdown 单元格/链接文本转义：换行压平、竖线与方括号转义 */
const md = s => String(s ?? '')
  .replace(/\r?\n/g, ' ')
  .replace(/\|/g, '\\|')
  .replace(/\[/g, '\\[')
  .replace(/\]/g, '\\]')
  .trim();

const escRe = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** 拼出 GitHub Pages 直链，兼容 file 以 / 开头或含空格 */
const pageUrl = f => BASE_URL + String(f).replace(/^\/+/, '').replace(/\s/g, '%20');

function buildBlock(items) {
  const rows = items.map((it, i) => {
    const file = String(it.file || '').trim();
    const link = pageUrl(file);
    const title = md(it.title || file);
    const desc = md(it.desc) || '—';
    const icon = it.icon || '📄';
    const tags = (it.tags || []).map(t => '`' + md(t) + '`').join(' · ') || '—';
    return `| ${i + 1} | ${icon} [${title}](${link}) | ${desc} | ${tags} | [↗ 打开](${link}) |`;
  }).join('\n');

  const urlList = items.map(it => {
    const file = String(it.file || '').trim();
    return `- [${md(it.title || file)}](${pageUrl(file)}) — \`${md(file)}\``;
  }).join('\n');

  return [
    START,
    '> 本区块由 `scripts/gen-readme.mjs` 依据 `files.json` 自动生成，请勿手动编辑。',
    '',
    `共 **${items.length}** 个作品 · 数据源 [\`files.json\`](files.json) · 导航首页 [\`index.html\`](index.html) 同源`,
    '',
    '| # | 作品 | 描述 | 标签 | 直接打开 |',
    '|---|------|------|------|----------|',
    rows,
    '',
    '<details>',
    '<summary>📋 展开全部直链（便于复制）</summary>',
    '',
    urlList,
    '',
    '</details>',
    END,
  ].join('\n');
}

const items = readJson('files.json');
if (!Array.isArray(items) || !items.length) {
  console.error('✗ files.json 为空或格式不对');
  process.exit(1);
}
for (const it of items) {
  if (!it.file) { console.error('✗ 存在缺少 file 字段的记录'); process.exit(1); }
}

const readmePath = join(ROOT, 'README.md');
const before = readFileSync(readmePath, 'utf8');
const re = new RegExp(escRe(START) + '[\\s\\S]*?' + escRe(END));
if (!re.test(before)) {
  console.error('✗ README.md 中未找到 DEMOS 标记区块');
  process.exit(1);
}

const after = before.replace(re, buildBlock(items));
if (after === before) {
  console.log(`✓ README 已是最新（${items.length} 个作品），无需改动`);
} else {
  writeFileSync(readmePath, after, 'utf8');
  console.log(`✓ 已同步 ${items.length} 个作品到 README.md`);
}
