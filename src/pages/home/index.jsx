import React from 'react';

import styles from './Home.module.scss';

import { Banner } from 'components/banner';
import { Header } from 'components/header';
import { Menu } from 'components/menu';
import { Gallery } from 'components/Gallery';
import { Footer } from 'components/footer';
import { Popular } from 'components/popular';

export const Home = () => {
  return (
    <>
      <Header />
      <main>
        <section className={styles.section}>
          <Menu />
          <Banner />
        </section>
        <div className={styles.gallery}>
          <Gallery />
          <Popular />
        </div>
      </main>
      <Footer />
    </>
  );
};
