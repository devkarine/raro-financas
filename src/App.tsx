
import './App.css';
import { useState } from 'react';
import { Header } from './components/Header/index';
import { Cards } from './components/Cards/Cards';
import { Lists } from './components/Lists/Lists';
import { Modal } from './components/Modal/Modal';
import { Footer } from './components/Footer/Footer';


function App() {
  const [mostrarModal, setMostrarModal] = useState(false)
  return (
    <>
      <Header />
      <Cards clicar={() => setMostrarModal(true)} />
      <Lists />
      
      {mostrarModal &&  <Modal/>}
      <Footer />
      
    </>
  );
}

export default App;
