import React from 'react';
import Layout from './layout';

const items = [
  {
    src: 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg',
    width: 300,
    height: 200,
    caption: 'Gray Cat',
    customOverlay: (
      <div className="custom-overlay__caption">
        <div>Gray Cat</div>
      </div>
    ),
  },
  {
    src: 'https://icatcare.org/app/uploads/2018/06/Layer-1704-1200x630.jpg',
    width: 300,
    height: 200,
    caption: 'Watching You',
    customOverlay: (
      <div className="custom-overlay__caption">
        <div>Gray Cat</div>
      </div>
    ),
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIi_a9WP926ruhJ1h6znk6nYQndHRnQ995Ig&usqp=CAU',
    width: 220,
    height: 250,
    caption: 'Kitten',
    customOverlay: (
      <div className="custom-overlay__caption">
        <div>Gray Cat</div>
      </div>
    ),
  },
  {
    src: 'https://i.insider.com/61d1c0e2aa741500193b2d18?width=700',
    width: 250,
    height: 200,
    caption: 'Kitten',
    customOverlay: (
      <div className="custom-overlay__caption">
        <div>Gray Cat</div>
      </div>
    ),
  },
];

const Work = () => {
  return (
    <Layout>
      <div className="containerContent">content goes here</div>
    </Layout>
  );
};

export default Work;
