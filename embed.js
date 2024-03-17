// Public URL where your bundled chat-app.js will be available
const chatAppUrl = "https://chatbot-ui-js-script.netlify.app/chat-app.js";

(function () {
  function loadScript(callback) {
    const script = document.createElement("script");
    script.src = chatAppUrl;
    script.onload = () => callback();
    document.head.appendChild(script);
  }

  function initChatApp() {
    // Assumes ChatApp is attached to the window object and initializes it
    const chatApp = document.createElement("div");
    chatApp.id = "chat-app-container";
    document.body.appendChild(chatApp);

    window.ChatApp.default(); // If ChatApp is the default export
  }

  loadScript(() => {
    initChatApp();
  });
})();
