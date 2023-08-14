import './index.css';
import { BtnModal } from '../Button/BtnModal';
import { Inputs } from '../Inputs/Input';
import { useState } from "react";



export const Modal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const closeModal = () => {
    setIsModalVisible(false);
    
  };

  return (
    <>
      <div className={`modal ${isModalVisible && 'open'}`}>
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
              onClick={closeModal}
            />
            {isModalVisible ? <Modal/> : null}
            <BtnModal nome='Adicionar' img='check.svg' background='#1E40AF' color='#F1F5F9' />
          </div>
          

            
        </form>
        </div>
        
      </div>
    </>
  );
};
