import React from 'react';
import Layout from './layout';
import Masonry from 'react-masonry-css';
import Image from 'next/image';
import ContentContainer from '@/components/ContentContainer';
import Title from '@/components/Title';
import styled from 'styled-components';

const breakpointColumnsObj = {
  default: 4,
  768: 3,
  425: 1,
};

let items: any[] = [
  { id: 1, img: 'whatiwear.jpeg' },
  { id: 2, img: 'oktagon.jpeg' },
  // { id: 3, img: 'new-me-3.png' },
  // { id: 5, img: 'telmed-cms-1.png' },
  // { id: 4, img: 'telmed-1.png' },
  // { id: 6, img: 'mobile-entry-corp.png' },
  // { id: 7, img: 'bcafme-1.png' },
  // { id: 8, img: 'telmed-dok-1.png' },
  // { id: 9, img: 'telmed-pro-4.png' },
  { id: 10, img: 'my-porto-2.png' },
];

const GridContainer = styled.div`
  img {
    transition: all 0.5s;
    cursor: pointer;
  }
  img:hover {
    transform: scale(1.1);
  }
`;

const CardMansory = styled.div`
  opacity: 0.7;
  border: 1px solid #fff;
  background: white;
  /* margin-bottom: 10px; */
  text-align: center;
  max-height: 50vh;
  overflow: hidden;

  &:hover {
    opacity: 1;
  }
`;

// Convert array to JSX items
items = items.map((item) => {
  return (
    <CardMansory key={item.id}>
      {item.img ? (
        <Image
          src={require(`@/public/img/${item.img}`)}
          objectFit="cover"
          alt="work"
        ></Image>
      ) : null}
    </CardMansory>
  );
});

const Work = () => {
  return (
    <Layout>
      <ContentContainer>
        <Title>Some of my Work</Title>
        <GridContainer>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {items}
          </Masonry>
        </GridContainer>
      </ContentContainer>
    </Layout>
  );
};

export default Work;
