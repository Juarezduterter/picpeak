const fs = require('fs').promises;
const path = require('path');
const sharp = require('sharp');
const heicConvert = require('heic-convert');

const HEIC_EXTENSIONS = new Set(['.heic', '.heif']);
const JPEG_MIME_TYPE = 'image/jpeg';

function isHeicFilename(filename) {
  return HEIC_EXTENSIONS.has(path.extname(filename || '').toLowerCase());
}

async function normalizeUploadedFile(file) {
  const inputPath = file?.path || file?.filepath || file?.tempFilePath;

  if (!inputPath || !isHeicFilename(file?.originalname)) {
    return file;
  }

  // PATCH HEIC: Convert HEIC/HEIF uploads to JPEG before the normal storage flow continues.
  const outputPath = inputPath.replace(/\.(heic|heif)$/i, '.jpg');
  try {
    await sharp(inputPath)
      // PATCH HEIC: Preserve metadata so downstream EXIF/capture-date handling still works.
      .withMetadata()
      .jpeg({ quality: 90 })
      .toFile(outputPath);
  } catch (error) {
    // PATCH HEIC: fall back when the local sharp/libvips build lacks HEIC support.
    const inputBuffer = await fs.readFile(inputPath);
    const outputBuffer = await heicConvert({
      buffer: inputBuffer,
      format: 'JPEG',
      quality: 0.9
    });
    await fs.writeFile(outputPath, outputBuffer);
  }

  if (outputPath !== inputPath) {
    await fs.unlink(inputPath);
  }

  const stats = await fs.stat(outputPath);

  return {
    ...file,
    path: outputPath,
    filepath: outputPath,
    tempFilePath: outputPath,
    filename: path.basename(outputPath),
    mimetype: JPEG_MIME_TYPE,
    size: stats.size,
    normalizedExtension: '.jpg'
  };
}

module.exports = {
  HEIC_EXTENSIONS,
  JPEG_MIME_TYPE,
  isHeicFilename,
  normalizeUploadedFile
};
