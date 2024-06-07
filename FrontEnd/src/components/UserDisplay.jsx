import { useState, useEffect } from "react";
import { FaMicrophone } from "react-icons/fa";

const SpeechToTextComponent = () => {
  const [displayText, setDisplayText] = useState("");
  const [editedText, setEditedText] = useState("");

  // Function to handle receiving text from backend
  const receiveTextFromBackend = () => {
    const textFromBackend = "Text received from backend";
    setDisplayText(textFromBackend);
  };

  useEffect(() => {
    receiveTextFromBackend();
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('/Default_a_hospital_environment_for_a_website_background_2.jpg')`,
      }}
    >
      <div className="container mx-auto px-4 py-8 max-w-md">
        <div className="flex flex-col items-center mb-4">
          <textarea
            className="border border-gray-400 px-4 py-2 w-full resize-none mb-4"
            value={editedText || displayText}
            placeholder={displayText ? "Text from backend" : "Placeholder text"}
          />
        </div>
      </div>

      <div>Chat interface</div>

      <div className="pt-[40%] mr-6">
        <button
          onClick={() => {
            console.log("Hello");
          }}
        >
          Chat{" "}
        </button>
      </div>
    </div>
  );
};

export default SpeechToTextComponent;
