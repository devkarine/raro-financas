import { useState } from 'react';
import './App.css';
import { Header } from './components/Header/index';
import { Cards } from './components/Cards/Cards';
import { Lists } from './components/Lists/Lists';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Cards />
      <Lists />
      <Footer />
    </>
  );
}

export default App;
