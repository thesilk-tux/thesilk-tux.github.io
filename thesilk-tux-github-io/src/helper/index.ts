const glob = require('fast-glob');
const fs = require('fs');

interface IBlog {
  caption: string;
  createdAt: string;
  filename: string;
  id: number;
  imageSrc: string;
  imageUrl: string;
  leadParagraph: string;
  updatedAt: string;
}

async function main() {
  const blogs: IBlog[] = [];
  let files = await glob('src/assets/blog/*.json');
  files = files.filter((item: string) => !item.endsWith('overview.json'));

  for (const file of files) {
    const data = await fs.readFileSync(file);
    const obj = JSON.parse(data);
    blogs.push({
      caption: obj.content.filter((item) => item.caption)[0].caption,
      createdAt: obj.createdAt,
      filename: file.replace('src/assets/blog/', '').replace('.json', ''),
      id: obj.id,
      imageSrc: obj.imgSrc,
      imageUrl: obj.imgUrl,
      leadParagraph: obj.content.filter((item) => item.lead)[0].lead,
      updatedAt: obj.updatedAt,
    });
  }

  fs.writeFileSync(
    'src/assets/blog/overview.json',
    JSON.stringify(blogs, null, 4)
  );
}

main();
