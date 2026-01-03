import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const reviewsDir = path.join(process.cwd(), 'src/pages/reviews');
const outputPath = path.join(process.cwd(), 'src/pages/reviews/index.json');
const categoriesOutputPath = path.join(process.cwd(), 'src/pages/reviews/categories.json');

const files = fs.readdirSync(reviewsDir).filter(f => f.endsWith('.md'));

let categories = ["all"];

const index = files.map(file => {
    const filePath = path.join(reviewsDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const {data} = matter(fileContent);

    data.tags.forEach(tag => {
        if (!categories.includes(tag)) categories.push(tag);
    })

    return {
        slug: file.replace('.md', ''),
        ...data
    };
});

fs.writeFileSync(categoriesOutputPath, JSON.stringify(categories, null, 2));
fs.writeFileSync(outputPath, JSON.stringify(index, null, 2));

console.log(`Generated index for ${index.length} reviews`);