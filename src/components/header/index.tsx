import './styles.css';

export const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img
          src="credit-card.svg"
          alt="Icone de cartão de crédito"
        />
        <h1>Raro Finanças</h1>
      </div>
      <div className="user">
        <div className="user-name-email">
          <p className="name">Karine Pereira</p>
          <p className="email">karinedeveloper@gmail.com</p>
        </div>
        <img src="PROFILE.png" alt="Profile" />
      </div>
    </header>
  );
};
