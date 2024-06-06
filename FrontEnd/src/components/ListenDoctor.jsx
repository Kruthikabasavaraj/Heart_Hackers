import { useState, useEffect } from "react";
import { FaMicrophone } from "react-icons/fa";

const SpeechToTextComponent = () => {
  const [displayText, setDisplayText] = useState("");
  const [editedText, setEditedText] = useState("");
  const [listening, setListening] = useState(false);

  // Function to handle microphone button click
  const handleMicrophoneClick = () => {
    // Logic to start listening
    setListening(true);
  };

  // Function to handle receiving text from backend
  const receiveTextFromBackend = () => {
    // Dummy function to simulate receiving text from backend
    const textFromBackend = "Text received from backend";
    setDisplayText(textFromBackend);
  };

  // Simulating receiving text from backend on component mount
  // You can replace this with an actual API call in a useEffect hook if needed
  useEffect(() => {
    receiveTextFromBackend();
  }, []);

  // Function to handle submit button click
  const handleSubmit = () => {
    // Send editedText to the backend
    console.log("Sending edited text to backend:", editedText);
    // Clear editedText after submission
    setEditedText("");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('/Default_a_hospital_environment_for_a_website_background_2.jpg')`,
      }}
    >
      <div className="container mx-auto px-4 py-8 max-w-md">
        <div className="flex flex-col items-center mb-4">
          <button
            className="p-2 rounded-full bg-blue-500 text-white mb-4"
            onClick={handleMicrophoneClick}
            disabled={listening}
          >
            <FaMicrophone />
          </button>
          <textarea
            className="border border-gray-400 px-4 py-2 w-full resize-none mb-4"
            value={editedText || displayText}
            onChange={(e) => setEditedText(e.target.value)} // Allow editing the text
            placeholder={displayText ? "Text from backend" : "Placeholder text"}
          />

          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpeechToTextComponent;
