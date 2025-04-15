
import { useState } from 'react';
import { X, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ScrollArea } from './ui/scroll-area';

interface Message {
  content: string;
  isBot: boolean;
}

interface ChatWidgetProps {
  onClose: () => void;
}

export const ChatWidget = ({ onClose }: ChatWidgetProps) => {
  const [messages, setMessages] = useState<Message[]>([
    { content: "Hello! How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { content: input, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate AI response (replace with actual AI implementation later)
    setTimeout(() => {
      setMessages(prev => [...prev, {
        content: "Thank you for your message. I'm here to help you with your booking and answer any questions about our services.",
        isBot: true
      }]);
    }, 1000);
  };

  return (
    <Card className="fixed bottom-24 right-6 w-96 h-[500px] z-50 shadow-2xl flex flex-col bg-white border border-violet-100">
      {/* Chat Header */}
      <div className="p-4 border-b border-violet-100 flex justify-between items-center bg-violet-50">
        <h3 className="font-semibold text-violet-900">Serene Touch Assistant</h3>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Chat Messages */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.isBot
                    ? 'bg-violet-50 text-violet-900'
                    : 'bg-violet-600 text-white'
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Chat Input */}
      <div className="p-4 border-t border-violet-100">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your message..."
            className="flex-1 px-3 py-2 rounded-md border border-violet-200 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent"
          />
          <Button onClick={handleSend} className="bg-violet-600 hover:bg-violet-700">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};
