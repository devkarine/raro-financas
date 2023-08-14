
import './App.css';
import { Header } from './components/Header/index';
import { Cards } from './components/Cards/Cards';
import { Lists } from './components/Lists/Lists';
import { Modal } from './components/Modal/Modal';
import { Footer } from './components/Footer/Footer';


function App() {
  return (
    <>
      <Header />
      <Cards />
      <Lists />
      <Modal />
      <Footer />
      
    </>
  );
}

export default App;
