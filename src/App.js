import './App.css';
import React, { Fragment, useState } from 'react';
import { Portofolio } from './views/Portofolio';
import { Resume } from './views/Resume';

function App() {
  const [page, setPage] = useState('Portofolio');

  const togglePage = () => {
    setPage(page === 'Portofolio' ? 'Resume' : 'Portofolio');
  };

  return (
    <Fragment>
      <button onClick={togglePage} className={'float-btn ' + page}>
        {page}
      </button>
      {page === 'Portofolio' ? <Portofolio /> : <Resume />}
    </Fragment>
  );
}

export default App;
