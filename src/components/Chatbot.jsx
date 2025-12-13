import { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", content: input };
    setMessages([...messages, userMsg]);
    setInput("");

    const res = await fetch("http://localhost:5000/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: data.reply },
    ]);
  };

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-white shadow-lg rounded-xl p-4">
      <h2 className="font-bold mb-2">MindFusion AI</h2>

      <div className="h-60 overflow-y-auto border p-2 mb-2">
        {messages.map((msg, i) => (
          <p key={i} className={msg.role === "user" ? "text-right" : "text-left"}>
            <b>{msg.role === "user" ? "You" : "AI"}:</b> {msg.content}
          </p>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          className="border flex-1 p-1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Talk to AI..."
        />
        <button onClick={sendMessage} className="bg-blue-500 text-white px-3">
          Send
        </button>
      </div>
    </div>
  );
}
