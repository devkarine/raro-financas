interface CardContent {
    transaction: string;
    img: string;
    value: string;

}

export const Card = ({transaction, img, value }: CardContent) =>{
    const split = value.split(',');

    return(
        <>
            <div className="card">
                <div className="transaction">
                    <h2>{transaction}</h2>
                    <img src={`src/assets/${img}`} alt="Seta direcionando crescimento" />
                </div>
        
                <p>
                    {split[0]},<span>{split[1]}</span> 
                </p>
            </div>
            
        </>
        
    )
    
}