const fs = require('fs');
const path = require('path');

const publicDir = 'e:/PortfolioVAn/public';
const pageFile = 'e:/PortfolioVAn/app/mc/page.tsx';

function slugify(text) {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
}

// Convert Vietnamese accents to regular letters for better slugs
function removeAccents(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D');
}

const folders = fs.readdirSync(publicDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)
    .filter(name => !['VAN', 'Ảnh đẹp để giới thiệu'].includes(name));

const projects = [];

for (const folder of folders) {
    const folderPath = path.join(publicDir, folder);
    const files = fs.readdirSync(folderPath);
    
    // find first image
    const imageFile = files.find(f => f.match(/\.(jpg|jpeg|png|webp)$/i));
    
    if (imageFile) {
        projects.push({
            title: folder.replace(/_/g, ' '),
            slug: slugify(removeAccents(folder)),
            role: "Dẫn chương trình",
            image: `/${encodeURI(folder)}/${encodeURI(imageFile)}` // URL encoded path
        });
    }
}

// Read page.tsx
let content = fs.readFileSync(pageFile, 'utf8');

// The file has a block like const images = [...]; and const projects = [...];
// We will replace everything from `const images = [` to `// Section 1: Intro` or `export default function MCPage()`
const replacement = `const projects = ${JSON.stringify(projects, null, 2)};

export default function MCPage() {`;

// Replace the old arrays
content = content.replace(/const images = \[[\s\S]*?export default function MCPage\(\) \{/, replacement);

// Replace src={images[index % images.length]} with src={project.image}
content = content.replace(/src={images\[index % images\.length\]}/g, 'src={project.image}');

fs.writeFileSync(pageFile, content, 'utf8');
console.log('Successfully updated projects in page.tsx');
