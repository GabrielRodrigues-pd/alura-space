import React from 'react';
import styles from './Menu.module.scss';

import home from '../../assets/icones/home-ativo.png';
import moreLikes from '../../assets/icones/mais-curtidas-inativo.png';
import mostViews from '../../assets/icones/mais-vistas-inativo.png';
import news from '../../assets/icones/novas-inativo.png';
import surprise from '../../assets/icones/surpreenda-me-inativo.png';

export const Menu = () => {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__lista}>
        <li className={styles.menu__item}>
          <img src={home} alt="" />
          <a href="/">First</a>
        </li>
        <li className={styles.menu__item}>
          <img src={moreLikes} alt="" />
          <a href="/">More likes</a>
        </li>
        <li className={styles.menu__item}>
          <img src={mostViews} alt="" />
          <a href="/">Most views</a>
        </li>
        <li className={styles.menu__item}>
          <img src={news} alt="" />
          <a href="/">News</a>
        </li>
        <li className={styles.menu__item}>
          <img src={surprise} alt="" />
          <a href="/">Surprise</a>
        </li>
      </ul>
    </nav>
  );
};
