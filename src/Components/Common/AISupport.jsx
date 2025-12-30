import React, { useState, useRef, useEffect } from "react";
import { Send, MessageSquare, Activity, CheckCircle } from "lucide-react";

const AISupport = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "ai",
      content:
        "Hello! I'm your MediTrack Smart Assistant. How can I help you manage your healthcare facility today?",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const scrollRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  /* Auto scroll chat */
  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  /* Fade on scroll */
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(leftRef.current);
    observer.observe(rightRef.current);

    return () => observer.disconnect();
  }, []);

  const handleSendMessage = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage = input;
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: userMessage,
      });

      setMessages(prev => [
        ...prev,
        {
          role: "ai",
          content:
            response.text ||
            "I'm having trouble processing that right now.",
        },
      ]);
    } catch {
      setMessages(prev => [
        ...prev,
        { role: "ai", content: "AI service unavailable." },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-500/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div ref={leftRef} className="fade-section">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-400 text-sm font-semibold mb-6">
              <Activity size={16} /> MediTrack AI
            </span>

            <h2 className="text-5xl font-extrabold mb-8 leading-tight">
              Intelligent Support <br />
              <span className="text-blue-500">at Your Fingertips</span>
            </h2>

            <p className="text-xl text-slate-400 mb-10">
              AI-powered assistant to manage hospital operations, analytics,
              and patient care efficiently.
            </p>

            <ul className="space-y-6">
              {[
                "Instant Data Queries",
                "Predictive Analytics",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex gap-4 items-start transition-all duration-300 hover:translate-x-2"
                >
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <CheckCircle size={14} />
                  </div>
                  <div>
                    <h4 className="font-semibold">{item}</h4>
                    <p className="text-slate-400 text-sm">
                      Smart insights to improve operational efficiency.
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* CHAT CARD */}
          <div ref={rightRef} className="fade-section">
            <div className="bg-slate-800 rounded-3xl border border-slate-700 shadow-2xl flex flex-col h-[550px]">

              {/* Header */}
              <div className="p-6 border-b border-slate-700 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <h4 className="font-bold">MediTrack Support</h4>
                  <span className="text-xs text-green-400">● Online</span>
                </div>
              </div>

              {/* Messages */}
              <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-900"
              >
                {messages.map((m, i) => (
                  <div
                    key={i}
                    className={`flex chat-animate ${
                      m.role === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className={`px-4 py-2 rounded-2xl max-w-[80%] text-sm ${
                        m.role === "user"
                          ? "bg-blue-600 rounded-tr-none"
                          : "bg-slate-700 rounded-tl-none"
                      }`}
                    >
                      {m.content}
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex gap-2">
                    <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" />
                    <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce delay-150" />
                    <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce delay-300" />
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="p-4 bg-slate-800">
                <div className="flex gap-2 bg-slate-700 rounded-xl p-2">
                  <input
                    className="flex-1 bg-transparent outline-none text-sm"
                    placeholder="Type a message..."
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => e.key === "Enter" && handleSendMessage()}
                  />
                  <button
                    onClick={handleSendMessage}
                    className="bg-blue-600 p-2 rounded-lg hover:bg-blue-500 transition"
                  >
                    <Send size={16} />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISupport;
