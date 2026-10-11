// resize-images.cjs
// Resize all images in public/images to a uniform max dimension (400x400) using sharp.
// This ensures catalogue items appear consistent.

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imagesDir = path.resolve('public', 'images');
const targetWidth = 400;
const targetHeight = 400;

const isImage = (file) => /\.(jpe?g|png|webp|gif)$/i.test(file);

fs.readdirSync(imagesDir).forEach((file) => {
  if (!isImage(file)) return;
  const filePath = path.join(imagesDir, file);
  sharp(filePath)
    .resize(targetWidth, targetHeight, { fit: 'inside' })
    .toFile(filePath + '.tmp')
    .then(() => fs.renameSync(filePath + '.tmp', filePath))
    .catch((err) => console.error('Error processing', file, err));
});

console.log('Resizing complete.');
