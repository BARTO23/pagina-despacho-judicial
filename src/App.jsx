import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      <Header />
      <main>
        <Hero />
        <Services />
      </main>
      <Footer />
    </div>
  );
}

export default App;
