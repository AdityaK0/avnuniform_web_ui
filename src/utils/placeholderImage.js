// Generates clearly-labelled placeholder artwork as inline SVG data URIs.
// This avoids hotlinking third-party imagery while still producing real
// <img> elements with fixed width/height (no layout shift) and useful
// alt text. Swap product `images` entries for real photo paths later —
// no component code needs to change.

const TONES = {
  primary: { bg: '#1c231f', fg: '#f4f2ec', accent: '#6b8f71' },
  secondary: { bg: '#eef1ec', fg: '#1c231f', accent: '#3f6b4f' },
  muted: { bg: '#e4e2da', fg: '#33362f', accent: '#8a8d82' },
};

function wrapLabel(label, maxChars = 22) {
  const words = label.split(' ');
  const lines = [];
  let current = '';
  words.forEach((word) => {
    if ((current + ' ' + word).trim().length > maxChars) {
      lines.push(current.trim());
      current = word;
    } else {
      current = `${current} ${word}`.trim();
    }
  });
  if (current) lines.push(current.trim());
  return lines.slice(0, 3);
}

export function placeholderImage({ label = 'AVN Uniforms', tone = 'primary', width = 800, height = 1000 }) {
  const palette = TONES[tone] || TONES.primary;
  const lines = wrapLabel(label);
  const centerY = height / 2;
  const lineHeight = 34;
  const startY = centerY - ((lines.length - 1) * lineHeight) / 2 + 40;

  const textLines = lines
    .map(
      (line, i) =>
        `<text x="50%" y="${startY + i * lineHeight}" text-anchor="middle" font-family="Arial, sans-serif" font-size="26" font-weight="600" fill="${palette.fg}">${escapeXml(line)}</text>`
    )
    .join('');

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img">
    <rect width="100%" height="100%" fill="${palette.bg}"/>
    <rect x="0" y="0" width="100%" height="6" fill="${palette.accent}"/>
    <g opacity="0.5">
      <line x1="0" y1="0" x2="${width}" y2="${height}" stroke="${palette.accent}" stroke-width="1"/>
      <line x1="${width}" y1="0" x2="0" y2="${height}" stroke="${palette.accent}" stroke-width="1"/>
    </g>
    <rect x="${width / 2 - 70}" y="${centerY - 110}" width="140" height="70" rx="4" fill="none" stroke="${palette.accent}" stroke-width="2"/>
    <text x="50%" y="${centerY - 65}" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" font-weight="700" letter-spacing="2" fill="${palette.accent}">AVN</text>
    ${textLines}
    <text x="50%" y="${height - 36}" text-anchor="middle" font-family="Arial, sans-serif" font-size="15" letter-spacing="1" fill="${palette.accent}">PHOTO PLACEHOLDER</text>
  </svg>`;

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
