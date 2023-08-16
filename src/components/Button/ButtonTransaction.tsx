import './ButtonTransaction.css';

interface ButtonProps {
  clicar: () => void;
}

export const BtnTransaction = ({ clicar }: ButtonProps) => {
  return (
    <>
      <button onClick={clicar} className="btn-transaction">
        <figure>
          <img src="src/assets/plus-sm.svg" alt="Sinal de soma" />
        </figure>
        TRANSAÇÃO
      </button>
    </>
  );
};
