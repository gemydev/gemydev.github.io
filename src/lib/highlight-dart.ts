// Minimal build-time Dart highlighter for the hero code window.
// Covers the subset used there: comments, strings, numbers, keywords, types and calls.

const KEYWORDS = new Set([
  'import', 'final', 'const', 'var', 'void', 'async', 'await', 'return', 'for', 'in',
  'if', 'else', 'class', 'extends', 'true', 'false', 'null',
]);

const TOKEN =
  /(\/\/\/?.*$)|('(?:[^'\\]|\\.)*')|(\b\d+\b)|(\b[A-Za-z_]\w*\b)(?=\s*\()|(\b[A-Za-z_]\w*\b)/gm;

const escape = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const span = (cls: string, text: string) => `<span class="${cls}">${escape(text)}</span>`;

function highlightLine(line: string): string {
  let out = '';
  let last = 0;
  for (const m of line.matchAll(TOKEN)) {
    out += escape(line.slice(last, m.index));
    const [text, comment, string, number, call, word] = m;
    if (comment) out += span('tk-c', comment);
    else if (string) out += span('tk-s', string);
    else if (number) out += span('tk-n', number);
    else if (call) out += span(KEYWORDS.has(call) ? 'tk-k' : /^[A-Z]/.test(call) ? 'tk-t' : 'tk-f', call);
    else if (word) out += KEYWORDS.has(word) ? span('tk-k', word) : /^[A-Z]/.test(word) ? span('tk-t', word) : escape(word);
    else out += escape(text);
    last = (m.index ?? 0) + text.length;
  }
  return out + escape(line.slice(last));
}

/** Returns one highlighted HTML string per source line. */
export function highlightDart(code: string): string[] {
  return code.replace(/\n$/, '').split('\n').map(highlightLine);
}
