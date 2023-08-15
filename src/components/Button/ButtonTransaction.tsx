import './ButtonTransaction.css';

interface ButtonProps{
    clicar: () => void;
}


export const BtnTransaction = (props: ButtonProps) => {
    return(
        <>
            <button onClick={props.clicar} className="btn-transaction">
               <figure>
                <img src="src/assets/plus-sm.svg" alt="Sinal de soma" />
               </figure>
                TRANSAÇÃO
            </button>
        </>
    )
}


