// Strip the TS-only syntax these data modules use, then actually evaluate them
// in node. Catches unbalanced quotes/braces and bad literals — not type errors,
// which need tsc once the app scaffold exists.
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = process.argv[2];
const FILES = ['profile.ts', 'experience.ts', 'projects.ts', 'awards.ts',
               'education.ts', 'publications.ts', 'organizations.ts',
               'updates.ts', 'skills.ts', 'ui.ts'];

function strip(src) {
  return src
    .replace(/^import\s+type\s[^;]*;$/gm, '')
    .replace(/^export\s+(interface|type)\s[\s\S]*?^\}$/gm, '')
    .replace(/^export\s+type\s[^;]*;$/gm, '')
    .replace(/\ssatisfies\s+\w+<[^>]*>/g, '')
    .replace(/\ssatisfies\s+[A-Za-z0-9_.]+/g, '')
    .replace(/\sas\s+const/g, '')
    .replace(/:\s*readonly\s+[A-Za-z0-9_.<>,\[\]\s|]+?(?=\s*=)/g, '')
    .replace(/^(export\s+const\s+\w+)\s*:\s*[^=]+=/gm, '$1 =')
    .replace(/^export\s+\*\s+from[^;]*;$/gm, '')
    .replace(/^export\s*\{[^}]*\}\s*(from[^;]*)?;$/gm, '')
    .replace(/^import\s[^;]*;$/gm, '')
    .replace(/^export\s+/gm, '');
}

let bad = 0;
for (const f of FILES) {
  const p = path.join(ROOT, 'content', f);
  if (!fs.existsSync(p)) { console.log(`  --  ${f} (absent)`); continue; }
  const src = strip(fs.readFileSync(p, 'utf8'));
  try {
    new vm.Script(src, { filename: f });
    console.log(`  ok  ${f}`);
  } catch (e) {
    bad++;
    console.log(`  FAIL ${f}: ${e.message}`);
  }
}

// Content-level invariants that matter regardless of types.
const projects = fs.readFileSync(path.join(ROOT, 'content/projects.ts'), 'utf8');
const slugs = [...projects.matchAll(/^\s{4}slug: '([^']+)'/gm)].map(m => m[1]);
const ranks = [...projects.matchAll(/^\s{4}rank: (\d+)/gm)].map(m => +m[1]);
const depths = [...projects.matchAll(/^\s{4}depth: '([^']+)'/gm)].map(m => m[1]);
const tagged = (projects.match(/^\s{4}tags: \[/gm) || []).length;

console.log(`\n  projects: ${slugs.length}  ranks: ${ranks.length}  depths: ${depths.length}  tags: ${tagged}`);
const dupRank = ranks.length !== new Set(ranks).size;
const dupSlug = slugs.length !== new Set(slugs).size;
if (dupRank) { console.log('  FAIL duplicate rank'); bad++; }
if (dupSlug) { console.log('  FAIL duplicate slug'); bad++; }
if (slugs.length !== depths.length || slugs.length !== tagged) {
  console.log('  FAIL every project needs both tags and depth'); bad++;
}

// figures referenced by projects must exist on disk
const refs = [...projects.matchAll(/src: '(\/assets\/[^']+)'/g)].map(m => m[1]);
const missing = [...new Set(refs)].filter(r => !fs.existsSync(path.join(ROOT, r.slice(1))));
if (missing.length) { console.log('  MISSING FILES:\n   ' + missing.join('\n   ')); bad++; }
else console.log(`  all ${new Set(refs).size} referenced images exist on disk`);

console.log(bad ? `\n  ${bad} problem(s)` : '\n  clean');
process.exit(bad ? 1 : 0);
