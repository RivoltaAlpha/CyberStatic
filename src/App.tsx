import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Contact from './pages/contact';
import Footer from './components/footer';
import Home from './pages/home';
import FooterSignUp from './pages/signup';
import About from './pages/about-us';
import CybersecurityPage from './pages/cyberSec';
import SoftwareEng from './pages/software-eng';
import NewsHub from './pages/newsHub';
import CTFPlatform from './pages/ctfPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<FooterSignUp />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/CTFPlatform" element={<CTFPlatform />} />
            <Route path="/cyber-security" element={<CybersecurityPage />} />
            <Route path="/software-engineering" element={<SoftwareEng />} />
            <Route path="/newsHub" element={<NewsHub />} />
            {/* <Route path="/articles" element={<ArticlePage />} /> */}
            {/* <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/materials" element={<Materials />} />
            <Route path="/user-dashboard" element={<UserDashboard />} />
            <Route path="*" element={<Error />} />  */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};


export default App;