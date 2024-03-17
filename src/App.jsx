import { useState } from "react";
import ChatButton from "./components/ChatButton";
import ChatModal from "./components/ChatModal";
import "./App.css";

function App() {
  const [isChatOpen, setChatOpen] = useState(false);

  const toggleChatModal = () => setChatOpen(!isChatOpen);

  return (
    <div className="App">
      <ChatButton onClick={toggleChatModal} />
      <ChatModal isOpen={isChatOpen} onClose={toggleChatModal} />
    </div>
  );
}

export default App;
