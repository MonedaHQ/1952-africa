const fs = require('fs');
const path = require('path');

function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

const folderPath = path.resolve(
  __dirname,
  '../../public/images/workshop-images'
);
const slideshowImages = [];

fs.readdirSync(folderPath).forEach((file) => {
  const filePath = path.join(folderPath, file);
  if (fs.statSync(filePath).isFile()) {
    const imageName = file.split('.')[0];
    const words = imageName.split('-').map(capitalizeFirstLetter);
    const caption = words.join(' ');

    slideshowImages.push({
      imagePath: `/images/workshop-images/${file}`,
      caption: caption,
    });
  }
});

console.log(slideshowImages);
