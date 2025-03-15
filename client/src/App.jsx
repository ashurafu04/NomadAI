import { useState, useRef, useEffect } from "react";
import axios from "axios";
import moroccanFlag from "./assets/moroccanFlag.png";
import EnhancedFormatter from "./Components/EnhancedFormatter"; // Import our new component
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [destination, setDestination] = useState("");
  const messagesEndRef = useRef(null);

  const sendMessage = async (e) => {
    e?.preventDefault();
    const userText = message.trim() || destination;
    if (!userText) return;

    setMessage("");
    setDestination("");
    setLoading(true);

    // Add user message to chat
    const newMessages = [...messages, { text: userText, sender: "user" }];
    setMessages(newMessages);

    try {
      const res = await axios.post("http://localhost:3000/chat", {
        message: userText,
        messageHistory: messages.slice(-10), // Send recent context
      });
      // Add AI response to chat
      setMessages([
        ...newMessages,
        {
          text: res.data.reply,
          sender: "ai",
        },
      ]);
    } catch (error) {
      console.error("Error:", error);
      setMessages([
        ...newMessages,
        {
          text: "Sorry, I'm having trouble connecting to my travel database. Please try again in a moment.",
          sender: "ai",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Handle Enter key to send message
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleDestinationSubmit = (dest) => {
    setDestination(dest);
    setTimeout(() => sendMessage(), 100);
  };

  const examplePrompts = [
    "Create a 3-day itinerary for Marrakech on a medium budget",
    "What are family-friendly activities in Casablanca?",
    "Recommend restaurants near the Hassan II Mosque in Casablanca",
    "What should I pack for Fes in November?",
    "Plan a weekend getaway from Tangier under 500 MAD",
  ];

  const popularDestinations = [
    { name: "Marrakech", emoji: "🌆" },
    { name: "Casablanca", emoji: "🏙️" },
    { name: "Fes", emoji: "🏰" },
    { name: "Tangier", emoji: "🌊" },
    { name: "Chefchaouen", emoji: "🏞️" },
    { name: "Agadir", emoji: "🏖️" },
  ];

  return (
    <div className="app-container">
      <div className="chat-container">
        <div className="chat-header">
          <div className="logo">
            <h1>Nomad AI</h1>
          </div>
          <p className="subtitle">Your personal travel planner</p>
        </div>

        <div className="messages-container">
          {messages.length === 0 ? (
            <div className="empty-state">
              <div className="moroccan-flag">
                <img src={moroccanFlag} alt="Moroccan Flag" />
              </div>
              <h2>Where to next?</h2>
              <p>
                I'll create personalized travel plans based on your preferences,
                interests, and budget.
              </p>

              <div className="destination-grid">
                <h3>Popular destinations</h3>
                <div className="destination-buttons">
                  {popularDestinations.map((dest, idx) => (
                    <button
                      key={idx}
                      className="destination-button"
                      onClick={() =>
                        handleDestinationSubmit(
                          `Plan a 5-day trip to ${dest.name}`
                        )
                      }
                    >
                      <span className="destination-emoji">{dest.emoji}</span>
                      <span>{dest.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="example-prompts">
                <h3>Try asking about</h3>
                <ul>
                  {examplePrompts.map((prompt, idx) => (
                    <li key={idx} onClick={() => setMessage(prompt)}>
                      <button className="example-prompt">{prompt}</button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                <div className="message-avatar">
                  {msg.sender === "ai" ? "✈️" : "👤"}
                </div>
                <div className="message-content">
                  {msg.sender === "ai" ? (
                    <EnhancedFormatter text={msg.text} />
                  ) : (
                    msg.text.split("\n").map((line, idx) => (
                      <span key={idx}>
                        {line}
                        <br />
                      </span>
                    ))
                  )}
                </div>
              </div>
            ))
          )}
          {loading && (
            <div className="message ai">
              <div className="message-avatar">✈️</div>
              <div className="message-content">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={sendMessage} className="input-container">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about destinations, itineraries, or travel tips..."
            rows={1}
            disabled={loading}
          />
          <button type="submit" disabled={loading || !message.trim()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;