import React from "react";
import "./ChatModal.css";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const ChatModal = ({ isOpen, onClose }: Props) => {
  if (!isOpen) return null;

  return (
    <div className="chat-modal-overlay">
      <div className="chat-modal">
        <div className="chat-header">
          <h2>Chat with Us</h2>
          <button className="close-button" onClick={onClose}>
            X
          </button>
        </div>
        <div className="chat-conversation">
          {/* Messages will be displayed here */}
        </div>
        <input
          type="text"
          className="chat-input"
          placeholder="Type your message here..."
        />
      </div>
    </div>
  );
};

export default ChatModal;
