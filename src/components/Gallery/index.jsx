import React, { useState } from 'react';

import styles from './Gallery.module.scss';
import fotos from './fotos.json';
import { Tags } from '../tags';
import { Cards } from './Cards';

export const Gallery = () => {
  const [itens, setItens] = useState(fotos);
  const tags = [...new Set(fotos.map(valor => valor.tag))];

  const filterFoto = tag => {
    const newFotos = fotos.filter(foto => {
      return foto.tag === tag;
    });

    setItens(newFotos);
  };

  const allTags = () => {
    setItens(fotos);
  };

  return (
    <section className={styles.gallery}>
      <h2>Navegue pela galeria</h2>
      <Tags
        tags={tags}
        className={styles.galley__item}
        filterFoto={filterFoto}
        allTags={allTags}
      />
      <Cards fotos={itens} styles={styles} />
    </section>
  );
};
