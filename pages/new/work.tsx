import React from 'react';
import Layout from './layout';
import Masonry from 'react-masonry-css';
import Image from 'next/image';

const breakpointColumnsObj = {
  default: 3,
  700: 2,
  500: 1,
};

var items: any[] = [
  {
    id: 1,
    img: 'whatiwear.jpeg',
  },
  { id: 2, img: 'oktagon.jpeg' },
  { id: 3, img: 'new-me-3.png' },
  { id: 5, img: 'telmed-cms-1.png' },
  { id: 4, img: 'telmed-1.png' },
  { id: 6, img: 'mobile-entry-corp.png' },
  { id: 7, img: 'bcafme-1.png' },
  { id: 8, img: 'telmed-dok-1.png' },
  { id: 9, img: 'telmed-pro-4.png' },
  { id: 10, img: 'my-porto-2.png' },
];

// Convert array to JSX items
items = items.map(function (item) {
  return (
    <div className="cardMansory" key={item.id}>
      {item.img ? (
        <Image
          src={require(`@/public/img/${item.img}`)}
          objectFit="fill"
        ></Image>
      ) : null}
    </div>
  );
});

const Work = () => {
  return (
    <Layout>
      <div className="containerContent">
        <div className="gridContainer">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {items}
          </Masonry>
        </div>
      </div>
    </Layout>
  );
};

export default Work;
