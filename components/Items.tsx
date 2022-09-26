import React from 'react';
import { Item } from './Item';
import PropTypes from 'prop-types';

export const Items = (props: any) => {
  const { title, items, className } = props;
  return (
    <div className="item-container mt-4">
      <span className="title">{title}</span>
      <div className={className}>
        {items.length
          ? items.map((s: any) => <Item key={s.title} item={s} />)
          : null}
      </div>
    </div>
  );
};

Items.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  items: PropTypes.any,
  skills: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
  }),
};
