// get-dimensions.js
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imagesDir = path.resolve('public', 'images');

fs.readdirSync(imagesDir).forEach(file => {
  if (!/\.(jpe?g|png|webp|gif)$/i.test(file)) return;
  const filePath = path.join(imagesDir, file);
  sharp(filePath).metadata().then(meta => {
    console.log(`${file}: ${meta.width}x${meta.height}`);
  }).catch(err => console.error('Error', file, err));
});
