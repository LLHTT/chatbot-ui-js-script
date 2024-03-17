import React from "react";
import "./ChatButton.css";

type Props = {
  onClick: () => void;
};

const ChatButton = ({ onClick }: Props) => {
  return (
    <button className="chat-button" onClick={onClick}>
      Chat
    </button>
  );
};

export default ChatButton;
