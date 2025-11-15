import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import sharp from 'sharp';
import toIco from 'to-ico';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function main(){
  const svgPath = new URL('../public/favicon.svg', import.meta.url);
  const outDir = new URL('../public/', import.meta.url);
  const svg = await readFile(svgPath);

  // Generate PNG sizes
  const pngTargets = [
    { name: 'favicon-16x16.png', size: 16 },
    { name: 'favicon-32x32.png', size: 32 },
    { name: 'favicon-48x48.png', size: 48 },
    { name: 'apple-touch-icon.png', size: 180 },
    { name: 'android-chrome-192x192.png', size: 192 },
    { name: 'android-chrome-512x512.png', size: 512 },
  ];

  await Promise.all(
    pngTargets.map(async ({ name, size }) => {
      const outPath = new URL(name, outDir);
      await sharp(svg)
        .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png({ compressionLevel: 9, adaptiveFiltering: true })
        .toFile(fileURLToPath(outPath));
    })
  );

  // Build ICO from multiple PNG sizes
  const icoSizes = [16, 32, 48];
  const icoPngBuffers = await Promise.all(
    icoSizes.map(size => sharp(svg)
      .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png({ compressionLevel: 9 })
      .toBuffer())
  );
  const icoBuffer = await toIco(icoPngBuffers);
  await writeFile(fileURLToPath(new URL('favicon.ico', outDir)), icoBuffer);

  console.log('Favicons generated in /public');
}

main().catch(err => {
  console.error('Error generating favicons:', err);
  process.exit(1);
});
