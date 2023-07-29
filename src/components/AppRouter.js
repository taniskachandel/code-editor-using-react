import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FrontPage from './FrontPage';
import Landing from './Landing';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<FrontPage />} />
        <Route path="/code-editor" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;