import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const reviewsDir = path.join(process.cwd(), 'src/pages/reviews');
const outputPath = path.join(process.cwd(), 'src/pages/reviews/index.json');

const files = fs.readdirSync(reviewsDir).filter(f => f.endsWith('.md'));

const index = files.map(file => {
    const filePath = path.join(reviewsDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const {data} = matter(fileContent);

    return {
        slug: file.replace('.md', ''),
        ...data
    };
});

fs.writeFileSync(outputPath, JSON.stringify(index, null, 2));

console.log(`Generated index for ${index.length} reviews`);