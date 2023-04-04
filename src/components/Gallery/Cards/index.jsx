import React from 'react';

import favorito from './favorito.png';
import open from './open.png';
import { Card } from './Card';

export const Cards = ({ fotos, styles }) => {
  return (
    <ul className={styles.gallery__cards}>
      {fotos.map(foto => {
        return (
          <Card
            key={foto.id}
            open={open}
            favorito={favorito}
            foto={foto}
            styles={styles}
          />
        );
      })}
    </ul>
  );
};
