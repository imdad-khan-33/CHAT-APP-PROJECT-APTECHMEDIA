import React, { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";

const SimpleAIChat = () => {
  const API_KEY = "AIzaSyBowWQ-fAAAyOg1dHYqCTp1afdi-SoxaMY";
  const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMsg = { id: Date.now(), sender: "user", text: input };
    setMessages([...messages, userMsg]);

    const userInput = input;
    setInput("");
    setLoading(true);

    try {
      const history = messages
        .map((m) => `${m.sender === "user" ? "User" : "Assistant"}: ${m.text}`)
        .join("\n");

      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `You are a helpful AI assistant. Answer questions clearly and concisely.

${history ? `Previous conversation:\n${history}\n` : ""}
User: ${userInput}`,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.9,
            maxOutputTokens: 2048,
          },
        }),
      });

      const data = await response.json();

      if (data.candidates?.[0]?.content?.parts?.[0]?.text) {
        const aiMsg = {
          id: Date.now() + 1,
          sender: "ai",
          text: data.candidates[0].content.parts[0].text,
        };
        setMessages((prev) => [...prev, aiMsg]);
      } else {
        throw new Error("Invalid response");
      }
    } catch (error) {
      const errorMsg = {
        id: Date.now() + 1,
        sender: "ai",
        text: "Sorry, something went wrong. Please try again.",
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b px-6 py-4">
        <h1 className="text-2xl font-bold text-gray-800">AI Chat</h1>
        {loading && <p className="text-sm text-blue-600 mt-1">Typing...</p>}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.length === 0 && (
          <div className="text-center text-gray-500 mt-20">
            <div className="text-6xl mb-4">💬</div>
            <h2 className="text-xl font-semibold mb-2">Start Chatting</h2>
            <p className="text-sm">Ask me anything!</p>
          </div>
        )}

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex gap-3 ${
              msg.sender === "user" ? "flex-row-reverse" : ""
            }`}
          >
            <div className="text-2xl">
              {msg.sender === "user" ? "👤" : "🤖"}
            </div>
            <div
              className={`max-w-2xl px-4 py-3 rounded-lg ${
                msg.sender === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-white border shadow-sm"
              }`}
            >
              <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-t bg-white px-6 py-4">
        <div className="flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={sendMessage}
            disabled={!input.trim() || loading}
            className={`px-6 py-2 rounded-lg transition ${
              !input.trim() || loading
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            {loading ? (
              <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
            ) : (
              <Send size={18} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimpleAIChat;
