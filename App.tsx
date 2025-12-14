import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ServiceDeepDive from './pages/ServiceDeepDive';
import Pricing from './pages/Pricing';
import Knowledge from './pages/Knowledge';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<ServiceDeepDive />} />
          <Route path="/knowledge" element={<Knowledge />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;