import './index.css';

export const Lists = () => {
 
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

        <tbody className="table-row">
          <tr className="wrapper">
            <td className="text-wrapper"></td>
            <td className="text-wrapper"></td>
            <td className="text-wrapper"></td>
            <td className="text-wrapper"></td>
            <td className="text-wrapper-type"> </td>
          </tr>
        </tbody>

      </table>
    </section>
  );
};
