import './styles.css';

export const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img
          src="public/credit-card.svg"
          alt="Icone de cartão de crédito"
        />
        <h1>Raro Finanças</h1>
      </div>
      <div className="user">
        <div className="user-name-email">
          <p className="name">Karine Pereira</p>
          <p className="email">karinedeveloper@gmail.com</p>
        </div>
        <img src="public/PROFILE.png" alt="Profile" />
      </div>
    </header>
  );
};
