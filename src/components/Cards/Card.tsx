interface CardContent {
    transaction: string;
    img: string;
    value: string;
    background?: string;

}

export const Card = ({transaction, img, value, background }: CardContent) =>{
    const split = value.split(',');

    return(
        <>
            <div className="card">
                <div className="transaction">
                    <h2>{transaction}</h2>
                    <figure>
                        <img src={`src/assets/${img}`} style={{background:background}} alt="Seta direcionando crescimento" />
                    </figure>
                    
                </div>
        
                <p>
                    {split[0]},<span>{split[1]}</span> 
                </p>
            </div>
            
        </>
        
    )
    
}