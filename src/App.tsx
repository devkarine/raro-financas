import './App.css';
import { useState } from 'react';
import { Header } from './components/Header';
import { Cards } from './components/Cards/Cards';
import { Lists } from './components/Lists/Lists';
import { Modal } from './components/Modal/Modal';
import { Footer } from './components/Footer/Footer';
import { TransactionProps } from './types';

function App() {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [transactionList, setTransactionList] = useState<TransactionProps[]>(
    [{nome:" Karine", data: "16/08/2023", categoria: "Salário", tipo: "+", valor: "4000,00"},
    {nome:" Notebook ", data: "01/07/2023", categoria: "Tecnologia", tipo: "-", valor: "3500,00"}]
  );

  let totalSaida = 0;
  let totalEntrada = 0;

  

  transactionList.forEach(transaction => {
    console.log(transaction)
    if (transaction.tipo === '+') {
      const valorNumero = Number(transaction.valor.replace(',', '.'));
      totalEntrada += valorNumero;

      
    } else if (transaction.tipo === '-') {
      const valorNumero = Number(transaction.valor.replace(',', '.'));
      totalSaida += valorNumero;
      console.log(totalSaida)
    }
  });
    
  return (
    <>
      <Header />
      <Cards
        saida={totalSaida}
        entrada={totalEntrada}
        clicar={() => setMostrarModal(true)}
      />
      <Lists transactions={transactionList} />

      <Modal
        clicar={(mostrarModal: boolean) => setMostrarModal(mostrarModal)}
        mostrarModal={mostrarModal}
        pegarValor={(transaction: TransactionProps) =>
          setTransactionList([...transactionList, transaction])
        }
      />
      <Footer />
    </>
  );
}

export default App;
