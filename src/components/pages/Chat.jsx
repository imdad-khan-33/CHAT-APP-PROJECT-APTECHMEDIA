import React, { useState, useRef, useEffect } from "react";
import { Send, Paperclip } from "lucide-react";

const ChatTherapist = () => {
  // Initialize messages state first
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "therapist",
      text: "Hi Sarah, how are you feeling today?",
      avatar: "👩‍⚕️",
    },
    {
      id: 2,
      sender: "user",
      text: "I'm feeling a bit overwhelmed with work and personal life.",
      avatar: "👩",
    },
    {
      id: 3,
      sender: "therapist",
      text: "I understand. Let's explore some strategies to manage that. Have you tried any relaxation techniques before?",
      avatar: "👩‍⚕️",
    },
  ]);

  const [inputValue, setInputValue] = useState("");

  // Reference to the messages container for scrolling
  const messagesEndRef = useRef(null);

  // Function to scroll to bottom automatically
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll whenever messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: "user",
        text: inputValue,
        avatar: "👩",
      };
      setMessages([...messages, newMessage]);
      setInputValue("");

      // Simulate therapist response
      setTimeout(() => {
        const therapistResponse = {
          id: messages.length + 2,
          sender: "therapist",
          text: "That sounds challenging. Let's work through this together. What would help you feel better?",
          avatar: "👩‍⚕️",
        };
        setMessages((prev) => [...prev, therapistResponse]);
      }, 500);
    }
  };

  // Check if input is not empty
  const isInputEmpty = !inputValue.trim();

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200 flex-shrink-0  mt-[25px]">
        <h1 className="text-2xl font-bold text-gray-800">
          Chat with your AI Therapist
        </h1>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${
              message.sender === "user" ? "flex-row-reverse" : "flex-row"
            }`}
          >
            {/* Avatar */}
            <div className="text-3xl flex-shrink-0">{message.avatar}</div>

            {/* Message Bubble */}
            <div
              className={`max-w-xs px-4 py-3 rounded-lg ${
                message.sender === "user"
                  ? "bg-green-400 text-gray-800"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {message.sender === "therapist" && (
                <p className="text-xs text-gray-600 mb-1">AI Therapist</p>
              )}
              <p className="text-sm">{message.text}</p>
            </div>
          </div>
        ))}
        {/* This empty div acts as a scroll target point */}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area - Fixed at Bottom */}
      <div className="border-t border-gray-200 px-6 py-4 flex-shrink-0 bg-white">
        <div className="flex items-center gap-3">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) =>
              e.key === "Enter" && !isInputEmpty && handleSendMessage()
            }
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button className="text-gray-600 hover:text-gray-800">
            {/* <Paperclip size={20} /> */}
          </button>
          <button
            onClick={handleSendMessage}
            disabled={isInputEmpty}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              isInputEmpty
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-green-400 text-white hover:bg-green-500"
            }`}
          >
            <Send size={18} />
          </button>
        </div>

        {/* Privacy Message */}
        <p className="text-xs text-gray-500 text-center mt-3">
          Your conversation is private and secure
        </p>
      </div>
    </div>
  );
};

export default ChatTherapist;
