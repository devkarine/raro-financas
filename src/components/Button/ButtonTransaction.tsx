import './ButtonTransaction.css';
import { useState } from "react";
import { Modal } from '../Modal/Modal';



export const BtnTransaction = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    return(
        
        <>
            <button onClick= {() => setIsModalVisible(true)} className="btn-transaction">
               <figure>
                <img src="src/assets/plus-sm.svg" alt="Sinal de soma" />
               </figure>
                TRANSAÇÃO
            </button>
            {isModalVisible ? <Modal/> : null}
        </>
    )
}


