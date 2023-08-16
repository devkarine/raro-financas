
import './App.css';
import { useState } from 'react';
import { Header } from './components/Header/index';
import { Cards } from './components/Cards/Cards';
import { Lists } from './components/Lists/Lists';
import { Modal } from './components/Modal/Modal';
import { Footer } from './components/Footer/Footer';
import { TransactionProps } from './types';


function App() {
  const [mostrarModal, setMostrarModal] = useState(false)
  const [transactionList, setTransactionList] = useState<TransactionProps[]>([])
 
  

  return (
    <>
      <Header />
      <Cards clicar={() => setMostrarModal(true)} />
      <Lists transactions={transactionList} />
      
      <Modal clicar={(mostrarModal: boolean) => setMostrarModal(mostrarModal)} mostrarModal={mostrarModal} pegarValor={(transaction: TransactionProps)=> setTransactionList([...transactionList, transaction])} />
      <Footer />
      
    </>
  );
}

export default App;
