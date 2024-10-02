```
# Audio Summary

Audio Summary is an application designed to transform any audio format to MP3, extract text from the audio in various languages, and provide a concise summary of the extracted text. The application leverages Node.js for the backend, MongoDB for data persistence, and OpenAI's API for text extraction and summarization. The frontend is built with plain HTML/CSS and enhanced with DaisyUI for a modern, interactive user experience.

## Overview

Audio Summary is divided into three main components: the backend, the frontend, and the AI integration.

- **Backend**: Built using Node.js and Express, with MongoDB for data persistence. It handles user authentication, audio file storage, and interactions with the OpenAI API for text extraction and summarization.
- **Frontend**: Built using plain HTML/CSS with DaisyUI for UI elegance and interactivity.
- **AI Integration**: Utilizes the OpenAI API to process audio files, extract text, and generate summaries.

### Technologies Used

- **Node.js**: JavaScript runtime for building the application.
- **MongoDB**: NoSQL database for data persistence.
- **Express**: Web server framework for Node.js.
- **Mongoose**: MongoDB object modeling tool.
- **Multer**: Middleware for handling file uploads.
- **DaisyUI**: Tailwind CSS components library for UI.
- **OpenAI API**: For text extraction and summarization.
- **Fluent-ffmpeg**: API for audio processing.
- **Dotenv**: For managing environment variables.

### Project Structure

- `models/`: Contains Mongoose models for User and AudioText.
- `routes/`: Defines routes for authentication and file uploads.
- `utils/`: Utility functions for audio conversion and text extraction.
- `views/`: EJS templates for rendering the frontend.
- `public/`: Static files such as CSS and JavaScript.
- `server.js`: Entry point for the Express server.
- `.env`: Environment configuration file.
- `.env.example`: Template for environment configuration.

## Features

- **User Authentication**: Register and log in with session-based authentication.
- **Audio Upload**: Upload audio files in various formats.
- **Audio Conversion**: Convert uploaded audio files to MP3 format.
- **Text Extraction**: Extract text from audio using OpenAI's Whisper model.
- **Text Summarization**: Generate summaries from the extracted text.
- **Data Persistence**: Store extracted text in MongoDB for future reference.

## Getting Started

### Requirements

- Node.js (version 14.x or higher)
- MongoDB (local installation or MongoDB Atlas)
- FFMPEG (for audio processing)

### Quickstart

1. **Clone the repository**:
   ```sh
   git clone https://github.com/yourusername/audio-summary.git
   cd audio-summary
   ```

2. **Install dependencies**:
   ```sh
   npm install
   ```

3. **Set up environment variables**:
   - Create a `.env` file based on the `.env.example` template.
   - Add your MongoDB connection string, session secret, and OpenAI API key.

4. **Run the application**:
   ```sh
   npm start
   ```

5. **Access the application**:
   - Open your browser and navigate to `http://localhost:3000`.

### License

The project is proprietary (not open source).

```
© 2024. All rights reserved.
```
```