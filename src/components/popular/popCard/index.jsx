import React from 'react';

export const CardPop = ({ foto }) => {
  return (
    <li>
      <img src={foto.path} alt={foto.alt} />
    </li>
  );
};
