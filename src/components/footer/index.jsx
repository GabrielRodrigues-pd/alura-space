import React from 'react';

import styles from './Footer.module.scss';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

export const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <ul>
          <li>
            <BsFacebook />
          </li>
          <li>
            <BsTwitter />
          </li>
          <li>
            <BsInstagram />
          </li>
        </ul>
        <p>Todos os direitos reservados!</p>
      </footer>
    </>
  );
};
