import React from 'react';

export const Card = ({ styles, foto, open, favorito }) => {
  return (
    <li className={styles.gallery__card}>
      <img
        className={styles.gallery__imagem}
        src={foto.imagem}
        alt={foto.titulo}
      />
      <p className={styles.gallery__descricao}>{foto.titulo}</p>
      <div>
        <p>{foto.creditos}</p>
        <span>
          <img src={favorito} alt="Ícone coração de curtir" />
          <img src={open} alt="Ícone de abrir modal" />
        </span>
      </div>
    </li>
  );
};
