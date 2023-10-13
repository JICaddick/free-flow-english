import React, { useState, useEffect } from 'react';

const InspirationalQuotes = () => {
  
  const quotes = [
    "\"The secret to getting ahead is getting started.\" – Mark Twain",
    "\"Take up one idea. Make that one idea your life. Think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body be full of that idea, and just leave every other idea alone.\" – Swami Vivekananda",
    "\"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.\" – Steve Jobs",
    "\"You miss 100% of the shots you don't take.\" – Wayne Gretzky",
    "\"The best way to get started is to quit talking and begin doing.\" – Walt Disney",
    "\"What lies behind us and what lies before us are tiny matters compared to what lies within us.\" – Henry David Thoreau",
    "\"The only place where success comes before work is in the dictionary.\" - Vidal Sassoon",
    "\"The biggest risk is not taking any risk. In a world that is changing quickly, the only strategy that is guaranteed to fail is not taking risks.\" - Mark Zuckerberg",
    "\"Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.\" - Roy T. Bennett",
    "\"The future depends on what you do today.\" - Mahatma Gandhi",
  ];

  const [currentQuote, setCurrentQuote] = useState('');

  useEffect(() => {
    // Choose a random quote when the component mounts
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  }, []);

  return (
    <div>
      <p className="flex justify-center py-10">{currentQuote}</p>
    </div>
  );
};

export default InspirationalQuotes;