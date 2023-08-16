import './style.css';
import { Card } from './Card';
import { BtnTransaction } from '../Button/ButtonTransaction';

interface cards {
  clicar: () => void;
  entrada: number;
  saida: number;
}
export const Cards = ({ clicar, entrada, saida }: cards) => {
  return (
    <section className="cards">
      <Card
        transaction="Entradas"
        img="trending-up.svg"
        background="#DCFCE7"
        value={entrada}
      />
      <Card
        transaction="Saídas"
        img="trending-down.svg"
        background="#FEE2E2"
        value={saida}
      />
      <Card
        transaction="Saldo"
        img="$.svg"
        background="#DBEAFE"
        value={entrada - saida}
      />
      <BtnTransaction clicar={clicar} />
    </section>
  );
};
