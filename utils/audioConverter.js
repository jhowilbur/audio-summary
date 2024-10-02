const ffmpeg = require('fluent-ffmpeg');
const ffmpegPath = require('ffmpeg-static');
const path = require('path');
const fs = require('fs');

ffmpeg.setFfmpegPath(ffmpegPath);

const convertToMp3 = (inputFilePath, outputDir) => {
  return new Promise((resolve, reject) => {
    const outputFileName = `${Date.now()}.mp3`;
    const outputFilePath = path.join(outputDir, outputFileName);

    ffmpeg(inputFilePath)
      .toFormat('mp3')
      .on('end', () => {
        console.log(`Audio file converted successfully: ${outputFilePath}`);
        resolve(outputFilePath);
      })
      .on('error', (err) => {
        console.error(`Error converting audio file: ${err.message}`);
        reject(err);
      })
      .save(outputFilePath);
  });
};

module.exports = {
  convertToMp3,
};