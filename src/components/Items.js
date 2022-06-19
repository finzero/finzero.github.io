import React from 'react';
import { Item } from './Item';
import PropTypes from 'prop-types';

export const Items = (props) => {
  const { title, items, className } = props;
  return (
    <div className="item-container">
      <span className="title">{title}</span>
      <div className={className + ' mb-2'}>
        {items.length && items.map((s) => <Item key={s.title} item={s} />)}
      </div>
    </div>
  );
};

Items.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  skills: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
  }),
};
