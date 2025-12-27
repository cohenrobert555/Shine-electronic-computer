
import React, { useState } from 'react';
import { Sparkles, Send, Bot, X, RefreshCw, MessageSquare } from 'lucide-react';
import { getServiceAdvice } from '../services/geminiService';
import { BUSINESS_INFO } from '../constants';

interface AIAssistantProps {
  onSuggestCategory: (category: string) => void;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ onSuggestCategory }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<{ advice: string, suggestedCategories: string[] } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    setIsLoading(true);
    const result = await getServiceAdvice(input);
    setResponse(result);
    setIsLoading(false);
  };

  return (
    <>
      <div className="fixed bottom-8 right-8 z-50">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-2xl hover:scale-105 transition-transform ring-4 ring-blue-600/10"
        >
          {isOpen ? <X className="w-7 h-7" /> : <MessageSquare className="w-8 h-8" />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed bottom-28 right-8 z-50 w-[calc(100vw-4rem)] max-w-[400px] bg-white border border-slate-200 rounded-[32px] shadow-[0_32px_64px_-16px_rgba(15,23,42,0.15)] overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-500">
          <div className="p-6 bg-gradient-to-br from-blue-50 to-white border-b border-slate-100 flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 leading-none">Shine Concierge</h4>
              <p className="text-[10px] text-blue-600 uppercase tracking-[0.2em] font-black mt-1.5">Expert Advisor</p>
            </div>
          </div>

          <div className="p-6 min-h-[300px] max-h-[450px] overflow-y-auto space-y-6">
            {!response && !isLoading && (
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-sm text-slate-600 leading-relaxed">
                Hello! I'm your digital guide for <strong>Shine Electronic & Computer</strong>. How can I help you with your tech today? <br/><br/>
                We specialize in repairs, installations, and data recovery here on the Upper West Side.
              </div>
            )}

            {isLoading && (
              <div className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-2xl p-4">
                <RefreshCw className="w-4 h-4 text-blue-600 animate-spin" />
                <span className="text-sm text-slate-500 font-medium">Analyzing service needs...</span>
              </div>
            )}

            {response && (
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 text-sm text-slate-700 leading-relaxed shadow-sm">
                  {response.advice}
                </div>
                <div className="flex flex-wrap gap-2">
                  {response.suggestedCategories.map((cat, idx) => (
                    <button
                      key={idx}
                      onClick={() => onSuggestCategory(cat)}
                      className="text-[10px] font-black uppercase tracking-widest bg-white hover:bg-blue-50 text-blue-600 px-4 py-2 rounded-xl border border-slate-200 transition-all active:scale-95"
                    >
                      {cat} Solutions
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-6 border-t border-slate-100 bg-white">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about repairs, data recovery..."
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-5 pr-14 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all"
              />
              <button 
                type="submit"
                disabled={isLoading}
                className="absolute right-3 top-2.5 p-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50 shadow-lg shadow-blue-900/10"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="mt-4 text-[10px] text-center text-slate-400 font-bold uppercase tracking-widest">
              Upper West Side, NYC
            </p>
          </form>
        </div>
      )}
    </>
  );
};

export default AIAssistant;
