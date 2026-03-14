/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { useEffect } from 'react';

import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} {...({ key: location.pathname } as any)}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="project-collection" element={<Projects />} />
          <Route path="project-collection/:id" element={<ProjectDetail />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:id" element={<ServiceDetail />} />
          <Route path="contact-us" element={<Contact />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnimatedRoutes />
    </Router>
  );
}
