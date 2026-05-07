import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
    <div className="homepage">
        <h1>Welcome to the AI Knowledge Base</h1>
        <p>
            This system helps you find answers to common questions and lets you chat
            with an AI assistant that learns over time.
        </p>
        <div className="navigation-links">
            <Link to="/faq" className="btn btn-primary m-2">View FAQs</Link>
            <Link to="/chat" className="btn btn-secondary m-2">Chat with AI</Link>
        </div>
    </div>
);

export default HomePage;