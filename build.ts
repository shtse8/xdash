import consola from "consola"
import fs from "fs/promises"
import path from "path"
import Bun from 'bun'
import { dts } from '@anymud/bun-plugin-dts'

try {
    const distPath = 'dist'
    // remove old dist
    consola.info('Removing old dist')
    const dist = path.join(__dirname, distPath)
    await fs.rmdir(dist, { recursive: true })
    consola.success('Removed old dist')

    consola.info('Starting build')
    const result = await Bun.build({
        entrypoints: [
            './src/index.ts',
        ],
        outdir: distPath,
        external: [
            // '*'
        ],
        plugins: [
            dts(),
        ],
        // splitting: true,
        naming: 'index.esm.js',
        root: './src',
        minify: true,
    })
    if (result.success) {
        consola.info('Calculating size')
        const stats = []
        for await (const stat of getStat(dist)) {
            stats.push(stat)
        }
        const tableData = stats.map(({ path, size }) => ({ Path: path, Size: humanFileSize(size) }));
        printTable(tableData)
        consola.success('Build complete')
    } else {
        consola.error('Build failed', result.logs)
    }
} catch (e) {
    consola.error('Build failed', e)
}
type DirStat = {
    path: string,
    size: number,
}
async function* getStat(folder: string): AsyncGenerator<DirStat> {
    const dir = await fs.opendir(folder)
    for await (const dirent of dir) {
        const entryPath = path.join(folder, dirent.name)
        if (dirent.isDirectory()) {
            yield* getStat(entryPath)
        } else {
            const size = (await fs.stat(path.join(folder, dirent.name))).size
            yield {
                path: entryPath,
                size: size,
            }
        }
    }

}


function humanFileSize(size: number) {
    const i = Math.floor(Math.log(size) / Math.log(1024))
    return (size / Math.pow(1024, i)).toFixed(0) + ['B', 'kB', 'MB', 'GB', 'TB'][i]
}
// Your existing code...

function printTable(data: Array<{ Path: string; Size: string }>) {
    if (data.length === 0) return;


    const consoleWidth = process.stdout.columns || 80; // Default to 80 if undefined
    // Customize these values based on your consola setup
    const tagLength = 'TAG'.length + 2; // Including brackets
    const timeLength = 11; // For "4:01:32 PM"
    const symbolAndSpaces = 4; // For "✔" and spaces around it

    const estimatedDecorationWidth = tagLength + timeLength + symbolAndSpaces;

    // Subtract the decoration width from the console width to calculate the available space
    const availableWidth = consoleWidth - estimatedDecorationWidth;

    // Assuming two columns, calculate their widths
    // let pathWidth = Math.floor((availableWidth - 7) / 2); // Adjust based on border and padding
    // let sizeWidth = availableWidth - pathWidth - 4; // Adjust for the vertical lines and padding
    let maxSizeWidth = data.reduce((max, row) => Math.max(max, row.Size.length), 0);
    let sizeWidth = Math.min(maxSizeWidth + 2, 10);
    let pathWidth = availableWidth - sizeWidth - 3;

    // Unicode box-drawing characters
    const horizontalLine = '─';
    const verticalLine = '│';
    const topLeftCorner = '┌';
    const topRightCorner = '┐';
    const bottomLeftCorner = '└';
    const bottomRightCorner = '┘';
    const cross = '┼';

    // Draw rows
    data.forEach(row => {
        const rowString = `${row.Path.padEnd(pathWidth)} ${verticalLine} ${row.Size.padEnd(sizeWidth)}`;
        consola.info(rowString);
    });
}