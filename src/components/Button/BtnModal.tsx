import './BtnModal.css';

interface Button {
  nome: string;
  img: string;
  background: string;
  color: string;
  onClick?: () => void;
}

export const BtnModal = ({ nome, img, background, color, onClick }: Button) => {
  return (
    <button style={{ background: background, color: color }} onClick={onClick}>
      <img src={`src/assets/${img}`} alt="" />
      {nome}
    </button>
  );
};
