import { TransactionProps } from '../../types';
import './index.css';

interface ListProps{
  transactions: TransactionProps[]
}

export const Lists = ({transactions}: ListProps) => {
 
  return (
    <section className='card-lists'>

      <h2>Histórico de transações</h2>

      <table className="lists">
        <thead className="table-header">
          <tr className="wrapper">
            <th className='header-lists'>Nome</th>
            <th className='header-lists'>Data</th>
            <th className='header-lists'>Categoria</th>
            <th className='header-lists'>Valor</th>
            <th className='header-lists-type'>Tipo</th>
          </tr>
        </thead>

        {transactions.map((transaction, index)=>(
          <tbody key={index} className="table-row">

          <tr className="wrapper">
            <td className="text-wrapper">{transaction.nome}</td>
            <td className="text-wrapper">{transaction.data}</td>
            <td className="text-wrapper">{transaction.categoria}</td>
            <td className="text-wrapper">{transaction.valor}</td>
            <td className="text-wrapper-type">{transaction.tipo} </td>
          </tr>
        </tbody>
        ))}

      </table>
    </section>
  );
};
