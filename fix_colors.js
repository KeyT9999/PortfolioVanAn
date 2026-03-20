const fs = require('fs');
const path = require('path');

const directoryPath = 'e:/PortfolioVAn';

const colorMapping = {
    '#6ba3d6': '#6ba3d6', // Light Sapphire / Sky Blue
    '#6ba3d6': '#6ba3d6',
    '#0a4275': '#0a4275', // Dark Sapphire
    '#89c2d9': '#89c2d9',
    '#a1cca5': '#a1cca5',
    '#06294b': '#06294b',
    '#041c33': '#041c33',
    '#041c33': '#041c33',
    '#0a4275': '#0a4275',
    '#b3e0ff': '#b3e0ff',
    '#80bfff': '#80bfff',
    'sky-700': 'sky-700',
    'sky-800': 'sky-800',
    'sky-500': 'sky-500',
    'sky-400': 'sky-400',
    'sky-500': 'sky-500',
    'sky-400': 'sky-400',
    'blue-shimmer': 'blue-shimmer'
};

function readFilesRecursively(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            if (file !== 'node_modules' && file !== '.next' && file !== '.git') {
                readFilesRecursively(filePath, fileList);
            }
        } else {
            if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.css') || filePath.endsWith('.js')) {
                fileList.push(filePath);
            }
        }
    }
    return fileList;
}

const allFiles = readFilesRecursively(directoryPath);

allFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;

    for (const [gold, blue] of Object.entries(colorMapping)) {
        const regex = new RegExp(gold, 'gi');
        content = content.replace(regex, blue);
    }

    if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated colors in ${file}`);
    }
});
console.log('Done scanning and replacing gold colors.');
