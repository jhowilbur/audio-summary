const fs = require('fs');
const path = require('path');
const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const extractTextFromAudio = async (audioFilePath) => {
  try {
    const audioFile = fs.createReadStream(audioFilePath);
    const response = await openai.audio.transcriptions.create({
      file: audioFile,
      model: 'whisper-1',
    });

    return response.text;
  } catch (error) {
    console.error(`Error extracting text from audio: ${error.message}`);
    console.error(error.stack);
    throw error;
  }
};

const generateSummaryFromText = async (text) => {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: `Summarize the following text:\n\n${text}` },
      ],
      max_tokens: 100,
      temperature: 0.7,
    });

    return response.choices[0].message.content.trim();
  } catch (error) {
    console.error(`Error generating summary: ${error.message}`);
    console.error(error.stack);
    throw error;
  }
};

module.exports = {
  extractTextFromAudio,
  generateSummaryFromText,
};