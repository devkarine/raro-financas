interface CardContent {
  transaction: string;
  img: string;
  value: number;
  background: string;
}

export const Card = ({ transaction, img, value, background }: CardContent) => {
  const valueFormatted = value.toFixed(2).toString().split('.');
  const [integer, decimal] = valueFormatted;

  return (
    <>
      <div className="card">
        <div className="transaction">
          <h2>{transaction}</h2>
          <figure>
            <img
              src={`public/${img}`}
              style={{ background: background }}
              alt="Seta direcionando crescimento"
            />
          </figure>
        </div>

        <p>
          R${integer},<span>{decimal}</span>
        </p>
      </div>
    </>
  );
};
