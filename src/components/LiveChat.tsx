
import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Here you would typically send the message to your backend
      console.log('Message sent:', message);
      setMessage('');
    }
  };
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      <button
        onClick={toggleChat}
        className={`flex items-center justify-center w-16 h-16 rounded-full shadow-lg ${
          isOpen ? 'bg-white text-black scale-0 opacity-0' : 'bg-[#25D366] text-white scale-100 opacity-100'
        } transition-all duration-300`}
      >
        <MessageCircle size={24} />
      </button>
      
      {/* Chat Window */}
      <div
        className={`bg-card border border-muted rounded-lg shadow-xl w-80 sm:w-96 overflow-hidden ${
          isOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0 pointer-events-none'
        } transition-all duration-300 origin-bottom-right absolute bottom-0 right-0`}
      >
        {/* Chat Header */}
        <div className="bg-[#25D366] text-white p-4 flex justify-between items-center">
          <div className="flex items-center">
            <MessageCircle size={20} className="mr-2" />
            <h3 className="font-bold">YoPips Support</h3>
          </div>
          <button onClick={toggleChat} className="text-white hover:text-white/80">
            <X size={20} />
          </button>
        </div>
        
        {/* Chat Messages */}
        <div className="h-80 overflow-y-auto p-4 space-y-4">
          <div className="flex justify-start">
            <div className="bg-muted rounded-lg p-3 max-w-[80%]">
              <p className="text-sm text-white">
                Hello! 👋 Welcome to YoPips. How can we help you today?
              </p>
              <span className="text-xs text-white/60 mt-1 block">
                12:00 PM
              </span>
            </div>
          </div>
          
          <div className="flex justify-start">
            <div className="bg-muted rounded-lg p-3 max-w-[80%]">
              <p className="text-sm text-white">
                You can ask questions about our 1% daily returns, MT5 integration, or how to get started.
              </p>
              <span className="text-xs text-white/60 mt-1 block">
                12:01 PM
              </span>
            </div>
          </div>
        </div>
        
        {/* Chat Input */}
        <form onSubmit={handleSubmit} className="p-4 border-t border-muted">
          <div className="flex items-center">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-muted border-none rounded-l-md py-2 px-4 text-white focus:outline-none focus:ring-1 focus:ring-[#25D366]"
            />
            <Button
              type="submit"
              className="rounded-r-md bg-[#25D366] hover:bg-[#25D366]/90 text-white py-2 px-4 h-full"
            >
              <Send size={18} />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LiveChat;
