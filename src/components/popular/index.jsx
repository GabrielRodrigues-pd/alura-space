import React from 'react';

import styles from './Popular.module.scss';
import fotoPopular from './popular.json';
import { CardPop } from './popCard';

export const Popular = () => {
  return (
    <aside className={styles.popular}>
      <h2>Populares</h2>
      <ul className={styles.popular__imagens}>
        {fotoPopular.map(foto => {
          return <CardPop foto={foto} key={foto.id} />;
        })}
      </ul>
      <button>Ver mais fotos</button>
    </aside>
  );
};
