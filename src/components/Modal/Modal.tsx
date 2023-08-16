import './style.css';
import { Inputs } from '../Inputs/Input';
import { TransactionProps } from '../../types';

interface ModalProps {
  pegarValor: (transaction: TransactionProps) => void;
  mostrarModal: boolean;
  clicar: (mostrarModal: boolean) => void;
}

export const Modal = ({ pegarValor, mostrarModal, clicar }: ModalProps) => {
  return (
    <>
      <div className={`modal ${mostrarModal && 'open'}`}>
        <div className="wrapper-modal">
          <form
            onSubmit={e => {
              e.preventDefault();
              e.currentTarget.reset();
            }}
          >
            <h2>Nova Transação</h2>

            <Inputs
              clicar={(mostrarModal: boolean) => clicar(mostrarModal)}
              pegarValor={(transaction: TransactionProps) =>
                pegarValor(transaction)
              }
            />
          </form>
        </div>
      </div>
    </>
  );
};
