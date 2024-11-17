// src/MainComponent.jsx
import React from 'react';
import TradeForm from './TradeForm';
import AIPrompt from './AIPrompt';
import './MainComponent.css';
import tradeImage from '../assets/trade.jpg'; // Replace with your image path
import aiImage from '../assets/ai.jpeg'; // Replace with your image path

const MainComponent = () => {
  return (
    <div className="main-container">
      <div className="trade-form-section">
        <h2>
          <img src={tradeImage} alt="Trade Illustration" className="trade-image" />
          Trade Details Input
        </h2>
        <TradeForm />
      </div>
      <div className="ai-prompt-section">
        <h2>
          <img src={aiImage} alt="AI Illustration" className="ai-image" />
          AI Prompt Area
        </h2>
        <AIPrompt />
      </div>
    </div>
  );
};

export default MainComponent;