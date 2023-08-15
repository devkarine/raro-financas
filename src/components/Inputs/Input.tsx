import './Inputs.css';

export const Inputs = () => {
  return (
    <>
      <label htmlFor="name">Nome</label>
      <input
        type="text"
        name="name"
        placeholder="Digite o nome da sua transação"
      />

      <label htmlFor="date">Data</label>
      <input
        type="text"
        name="date"
        id="date"
        placeholder="Selecione a data da transação"
      />

      <label htmlFor="categorie">Categoria</label>
      <input
        type="text"
        name="categorie"
        placeholder="Digite a categoria da sua transação"
      />

      <label htmlFor="value">Valor</label>
      <input
        type="text"
        name="value"
        placeholder="Digite o valor da sua transação"
      />

      <label htmlFor="tipo" >Tipo</label>
      <div className="radio">
        <input className='inputRadio' type="radio" name="tipo" value="entrada" />
        <img src="src/assets/trending-up.svg" alt="" />
        Entradas
        <input className='inputRadio' type="radio" name="tipo" id="saida" value="saida" />
        <img src="src/assets/trending-down.svg" alt="" />
        Saídas
      </div>
    </>
  );
};
