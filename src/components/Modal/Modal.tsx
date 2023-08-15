import './index.css';
import { BtnModal } from '../Button/BtnModal';
import { Inputs } from '../Inputs/Input';




export const Modal = () => {

  return (
    <>
      <div className="modal" >
        <div className="wrapper-modal">
        <form >
          <h2>Nova Transação</h2>

          <Inputs/>
          
          <div className="btns">
          <BtnModal
              nome="Cancelar"
              img="x.svg"
              background="#F1F5F9"
              color="#1E40AF"
            />
            
            <BtnModal nome='Adicionar' img='check.svg' background='#1E40AF' color='#F1F5F9' />
          </div>
          

            
        </form>
        </div>
        
      </div>
    </>
  );
};
