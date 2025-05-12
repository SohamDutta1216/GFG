const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const optimizeImage = async (inputPath, outputPath) => {
  try {
    await sharp(inputPath)
      .resize(2000, null, { // Resize to max width of 2000px, maintain aspect ratio
        withoutEnlargement: true
      })
      .jpeg({ quality: 80 }) // Convert to JPEG with 80% quality
      .toFile(outputPath);
    
    console.log(`Optimized ${inputPath} -> ${outputPath}`);
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error);
  }
};

// Optimize group photo
const groupPhotoPath = path.join(__dirname, '../public/group_photo.JPG');
const optimizedGroupPhotoPath = path.join(__dirname, '../public/group_photo.jpg');

optimizeImage(groupPhotoPath, optimizedGroupPhotoPath); 