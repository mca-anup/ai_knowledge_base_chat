import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../templates/Layout';
import HomePage from '../pages/HomePage';
import FAQPage from '../pages/FAQPage';
import FAQDetailPage from '../pages/FAQDetailPage';
import ChatPage from '../pages/ChatPage';

const AppRouter = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* ✅ New Home */}
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/faq/:id" element={<FAQDetailPage />} />
        <Route path="/chat" element={<ChatPage />} />
        {/* Optional: catch-all redirect */}

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  </Router>
);

export default AppRouter;
