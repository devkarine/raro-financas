import './Inputs.css';
import { useState } from 'react';
import { TransactionProps } from '../../types';
import { BtnModal } from '../Button/BtnModal';

interface InputProps {
  pegarValor: (transaction: TransactionProps) => void;
  clicar: (mostrarModal: boolean) => void;

}



export const Inputs = ({ pegarValor, clicar }: InputProps) => {
  const [valor, setValor] = useState({
    nome: '',
    data: '',
    categoria: '',
    valor: '',
    tipo: ''
  });

  function test(){
    pegarValor(valor)
    clicar(false)
  }

  return (
    <>
      <label htmlFor="name">Nome</label>
      <input
        onChange={e => setValor({ ...valor, nome: e.target.value })}
        type="text"
        name="nome"
        placeholder="Digite o nome da sua transação"
      />

      <label htmlFor="date">Data</label>
      <input
        onChange={e => setValor({ ...valor, data: e.target.value })}
        type="text"
        name="date"
        id="date"
        placeholder="Selecione a data da transação"
      />

      <label htmlFor="categorie">Categoria</label>
      <input
        onChange={e => setValor({ ...valor, categoria: e.target.value })}
        type="text"
        name="categorie"
        placeholder="Digite a categoria da sua transação"
      />

      <label htmlFor="value">Valor</label>
      <input
        onChange={e => setValor({ ...valor, valor: e.target.value })}
        type="text"
        name="value"
        placeholder="Digite o valor da sua transação"
      />

      <label htmlFor="tipo">Tipo</label>
      <div className="radio">
        <input
          onChange={e => setValor({ ...valor, tipo: e.target.value })}
          className="inputRadio"
          type="radio"
          name="tipo"
          value="entrada"
        />
        <img src="src/assets/trending-up.svg" alt="" />
        Entradas
        <input
          onChange={e => setValor({ ...valor, tipo: e.target.value })}
          className="inputRadio"
          type="radio"
          name="tipo"
          id="saida"
          value="saida"
        />
        <img src="src/assets/trending-down.svg" alt="" />
        Saídas
      </div>
      <BtnModal
        onClick={() => clicar(false)}
        nome="Cancelar"
        img="x.svg"
        background="#F1F5F9"
        color="#1E40AF"
      />

      <BtnModal
        onClick={test}
        nome="Adicionar"
        img="check.svg"
        background="#1E40AF"
        color="#F1F5F9"
      />
    </>
  );
};
