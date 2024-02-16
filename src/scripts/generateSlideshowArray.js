const fs = require('fs');
const path = require('path');

const folderPath = path.resolve(__dirname, '../../public/images/slideshow');
const slideshowImages = [];

fs.readdirSync(folderPath).forEach((file) => {
  const filePath = path.join(folderPath, file);
  if (fs.statSync(filePath).isFile()) {
    slideshowImages.push(`/images/slideshow/${file}`);
  }
});

console.log(slideshowImages);
