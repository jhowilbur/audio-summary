const express = require('express');
const multer = require('multer');
const { convertToMp3 } = require('../utils/audioConverter');
const { extractTextFromAudio, generateSummaryFromText } = require('../utils/textExtractor');
const AudioText = require('../models/AudioText');

const router = express.Router();

// Configure Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Route to render the upload form
router.get('/upload', (req, res) => {
  res.render('upload');
});

// Route to handle file upload, conversion, text extraction, and summarization
router.post('/upload', upload.single('audioFile'), async (req, res) => {
  if (!req.file) {
    console.error('No file uploaded.');
    return res.status(400).send('No file uploaded.');
  }

  try {
    const mp3FilePath = await convertToMp3(req.file.path, 'uploads');
    console.log(`File uploaded and converted successfully: ${mp3FilePath}`);

    const extractedText = await extractTextFromAudio(mp3FilePath);
    console.log(`Text extracted successfully: ${extractedText}`);

    const summary = await generateSummaryFromText(extractedText);
    console.log(`Summary generated successfully: ${summary}`);

    // Save the extracted text and summary to the database
    const audioText = new AudioText({ text: extractedText });
    await audioText.save();

    res.render('upload', { extractedText, summary });
  } catch (err) {
    console.error(`Error processing file: ${err.message}\n${err.stack}`);
    res.status(500).send('Error processing file.');
  }
});

module.exports = router;