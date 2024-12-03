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

2. Install Dependencies
Navigate to the content folder and install the necessary dependencies:


cd content
npm install

3. Build the Application
Once the dependencies are installed, run the build command to compile the application:
This will build the code and transfer the required files to the extension folder, which can then be used as the Chrome extension.

4. Upload the Extension
Navigate to the extension folder and upload the extension to the Chrome extensions section.

5. Load the Extension in Chrome
Now, you need to load the extension into Chrome. Follow these steps:

Open Chrome and go to chrome://extensions/.
Enable Developer mode by toggling the switch in the top right corner.
Click on Load unpacked.
Select the extension folder and click Open.
The Translytic AI extension will now be installed and active in your browser.

6. Testing the Extension
Open YouTube in Chrome and start playing any video.
You will see the Translytic AI bar appear on the right side of the video.
Click on the Translytic AI bar to expand it. The interface will have two sections:
Transcript: This section shows the captions (transcript) of the video, along with a dropdown to select languages for translated captions.
The bottom button toggles the captions and text-to-speech (TTS) functionality.
Summarization: This section displays the summarized version of the transcript, condensing the video's content into key points.
7. Interacting with Features
Select a Language: Choose a language from the dropdown to change the captions.
Toggle TTS: Enable the TTS option to have the translated text read aloud.
Summarization: View the summary of the transcript, offering a concise overview of the video's content.
Interactive Chat: Ask questions about the summarized transcript and get context-based responses.
8. Verify Features
Check the following to verify the functionality of the extension:

Multilingual Captions: Ensure that the dropdown works and that captions appear in the selected language.
Summarization: Verify that the summarized text is an accurate representation of the video's main points.
Text-to-Speech: Test the TTS functionality to make sure that it reads the translated captions aloud.
Interactive Chat: Ensure that you can ask questions about the summarized transcript, and that the answers are accurate and context-based.

9. Debugging Issues
If you run into any issues, here are a few things to check:

Ensure that the extension is properly loaded in the browser (chrome://extensions/).

Make sure the video has available captions for translation.
Check the console for errors (right-click the page, select Inspect, and go to the Console tab).

Challenges
API Stability: Initially, some APIs were unstable, which caused occasional failures. The issues have been resolved, and the app now functions smoothly.
Text-to-Speech Compatibility: The TTS feature didn’t work in Chrome Canary for non-English languages. Despite speechSynthesis.getVoices() listing 22 languages, TTS only worked for English. Troubleshooting with sample code and different extensions didn’t resolve the issue.
Summarization Performance: The summarization API was slow, especially with lengthy transcripts, causing some lag. This issue was addressed through performance optimizations.
What We Learned
Handling Speech Synthesis: Managing varying caption lengths and ensuring that all text is read within the time constraints required careful adjustments.
Real-Time Data Processing: Ensuring that real-time updates for captions, translations, and summaries occur seamlessly was a challenge, but necessary for a smooth user experience.
User Engagement: Adding interactive features, like the ability to ask questions based on video summaries, significantly improved user interaction with the content.
What's Next for Translytic AI
OCR for Images: Implementing Optical Character Recognition (OCR) to extract text from images and translate or summarize it.
Interactive Chat: Allow users to interact with video summaries in a chat-like format, asking questions about specific parts of the video.
Presentation Creation: Enable users to extract key points from YouTube videos and create presentations from them.
Additional Language Support: Expand the available languages and improve the TTS functionality to support more languages.
Offline Support: Enable certain features, like TTS and translations, to work offline by using pre-downloaded models.

npm run build-win



```bash
git clone https://github.com/way2akash/Translytic-AI.git



