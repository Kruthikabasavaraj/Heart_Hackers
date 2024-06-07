import React, { useState, useEffect } from "react";
import { FaMicrophone } from "react-icons/fa";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import useClipboard from "react-use-clipboard";
import "./App.css";

const SpeechToTextComponent = () => {
  const [displayText, setDisplayText] = useState("");
  const [editedText, setEditedText] = useState("");
  const [listening, setListening] = useState(false);

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    setListening(true);
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
    setListening(false);
  };

  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  useEffect(() => {
    if (transcript) {
      setDisplayText(transcript);
      setEditedText(transcript); // Update editedText with the transcript
    }
  }, [transcript]);

  const [isCopied, setCopied] = useClipboard(editedText, {
    successDuration: 1000,
  });

  if (!browserSupportsSpeechRecognition) {
    return <p>Your browser does not support speech recognition.</p>;
  }

  // Dummy function to simulate receiving text from backend
  const receiveTextFromBackend = () => {
    const textFromBackend = "Text received from backend";
    setDisplayText(textFromBackend);
    setEditedText(textFromBackend); // Initialize editedText with backend text
  };

  useEffect(() => {
    receiveTextFromBackend();
  }, []);

  const handleSubmit = () => {
    console.log("Sending edited text to backend:", editedText);
    setEditedText("");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('/Default_a_hospital_environment_for_a_website_background_2.jpg')`,
      }}
    >
      <div className="container mx-auto px-4 py-8 max-w-md bg-white bg-opacity-90 rounded-lg shadow-lg">
        <div className="flex flex-col items-center mb-4">
          <button
            className={`p-4 rounded-full mb-4 ${listening ? "bg-red-500" : "bg-blue-500"} text-white`}
            onClick={listening ? stopListening : startListening}
          >
            <FaMicrophone size={24} />
          </button>
          <textarea
            className="border border-gray-400 px-4 py-2 w-full resize-none mb-4 rounded-lg"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            placeholder="Speak or edit the text"
            rows={6}
          />
          <div className="flex space-x-2">
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
              onClick={setCopied}
            >
              {isCopied ? "Copied!" : "Copy to clipboard"}
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeechToTextComponent;
