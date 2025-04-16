
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
    { content: "Welcome to our Spa & Wellness Center! How may I assist you today?", isBot: true }
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
        content: "I'd be happy to help you with your spa and wellness inquiries. Please feel free to ask about our services or booking process.",
        isBot: true
      }]);
    }, 1000);
  };

  return (
    <Card className="fixed bottom-24 right-6 w-96 h-[500px] z-50 shadow-2xl flex flex-col bg-white border border-spa-beige">
      {/* Chat Header */}
      <div className="p-4 border-b border-spa-beige flex justify-between items-center bg-spa-green-light">
        <h3 className="font-semibold text-spa-green-dark">Wellness Assistant</h3>
        <Button variant="ghost" size="icon" onClick={onClose} className="text-spa-green-dark hover:text-spa-green">
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
                    ? 'bg-spa-green-light text-spa-green-dark'
                    : 'bg-spa-green text-white'
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Chat Input */}
      <div className="p-4 border-t border-spa-beige">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your message..."
            className="flex-1 px-3 py-2 rounded-md border border-spa-beige focus:outline-none focus:ring-2 focus:ring-spa-green focus:border-transparent"
          />
          <Button onClick={handleSend} className="bg-spa-green hover:bg-spa-green-dark">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};
