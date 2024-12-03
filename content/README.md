# Translytic AI

Translytic AI is a Chrome extension designed to enhance the YouTube viewing experience by providing real-time transcript translations, multilingual captions, summarized points, and text-to-speech (TTS) for a seamless and accessible viewing experience. The extension uses Google's AI APIs and integrates with YouTube videos to offer these features.

## Features

### 1. **Live Transcript Translation**
Translytic AI fetches YouTube video transcripts and translates them into multiple languages in real-time. Users can select their preferred language from a dropdown menu, making the content accessible to a global audience.

### 2. **Multilingual Captions**
The extension overlays translated captions directly on YouTube videos. This feature helps users follow along with the video in their native language.

### 3. **Summarization**
The extension summarizes the transcript of the video, condensing lengthy dialogues into concise points. This allows users to quickly grasp the main ideas of the video without having to watch it entirely.

### 4. **Text-to-Speech (TTS)**
Translytic AI integrates TTS functionality to read aloud the translated text. This feature enhances accessibility, enabling users to consume content without needing to read captions manually.

### 5. **Language Selection**
The language selection feature allows users to choose the language they prefer for captions and TTS, making it easier to understand content in multiple languages.

### 6. **Interactive Summarization**
Translytic AI offers a unique feature where users can ask questions about the video's summarized content. The system responds with context-based answers, creating an interactive chat-like experience.

### 7. **OCR for Images (Planned)**
A future feature will allow users to upload images and extract text using Optical Character Recognition (OCR). The extracted text will then be translated or summarized, extending the functionality beyond just video content.

## Built With

- **Languages**: JavaScript, HTML, CSS
- **Framework**: ReactJS
- **Chrome Extensions API**: Used to interact with YouTube videos and integrate the extension into the browser.
- **Google AI APIs**: 
  - Translation API for translating captions and summaries.
  - Summarization API for condensing video transcripts.
  - Text-to-Speech (TTS) API for speech conversion.
- **APIs**: YouTube API for fetching video transcripts.
- **OCR Technology (Planned)**: For text extraction from images.

## Folder Structure

You will find two folders in the repository:

- **content**: Contains the core logic and app code.
- **extension**: Contains the Chrome extension files.

## Installation

### Clone the Repository

Start by cloning the repository to your local machine:
```bash
git clone https://github.com/way2akash/Translytic-AI.git
