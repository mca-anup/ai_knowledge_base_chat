import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">AI Knowledge Base</Link>
        <div className="navbar-nav">
          <Link className="nav-link btn btn-sm btn-info rounded-0 text-white" to="/">FAQ</Link>
          <Link className="nav-link btn btn-sm btn-info rounded-0 text-white" to="/chat">Chat</Link>
        </div>
      </div>
    </nav>
    <main className="container mt-4 mb-5">{children}</main>
    <footer className="bg-light text-center py-3 mt-5 fixed-bottom">
      © 2026 AI Knowledge Base.
    </footer>
  </div>
);

export default Layout;
