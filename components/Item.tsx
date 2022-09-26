import React from 'react';
import PropTypes from 'prop-types';

export const Item = (props: any) => {
  const { src, alt, title, link, label } = props.item;
  const Img = <img src={src} alt={alt} title={title} srcSet="" />;
  return (
    <div>
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
