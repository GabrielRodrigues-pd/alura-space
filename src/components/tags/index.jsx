import React from 'react';
import styles from './Tags.module.scss';

export const Tags = ({ tags, filterFoto, allTags }) => {
  return (
    <div className={styles.tags}>
      <p>Filtre por tags:</p>
      <ul className={styles.tags__lista}>
        <li onClick={() => allTags()}>Todos</li>
        {tags.map(tag => {
          return (
            <li key={tag} onClick={() => filterFoto(tag)}>
              {tag}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
