import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Items.module.css';
import Image from 'next/image';

export const Item = (props: any) => {
  const { src, alt, title, link, label } = props.item;
  const Img = (
    <Image src={src} alt={alt} title={title} width={50} height={50} />
  );
  return (
    <div className={label ? styles.withTitle : ''}>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {Img}
        </a>
      ) : (
        <React.Fragment>
          {Img} <div>{label}</div>
        </React.Fragment>
      )}
    </div>
  );
};

Item.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  item: PropTypes.any,
};
