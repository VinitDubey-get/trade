// src/AIPrompt.jsx
import React, { useState } from 'react';
import './AIPrompt.css';

const AIPrompt = () => {
  const [prompt, setPrompt] = useState('');
  const [aiResponse, setAiResponse] = useState('');

  const handlePromptSubmit = (e) => {
    e.preventDefault();
    const response = `AI Response to: "${prompt}"`; // Simulated response
    setAiResponse(response);
    setPrompt(''); // Clear the prompt after submission
  };

  return (
    <div className="ai-prompt-container">
      <form onSubmit={handlePromptSubmit} className="prompt-form">
        <textarea
          placeholder="Write your prompt here..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          required
        />
        <button type="submit">Get AI Response</button>
      </form>
      {aiResponse && (
        <div className="response-container">
          <h3>AI Response:</h3>
          <pre>{aiResponse}</pre>
        </div>
      )}
    </div>
  );
};

export default AIPrompt;