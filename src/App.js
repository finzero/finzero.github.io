import './App.css';
import React, { Fragment, useState } from 'react';
import { Portofolio } from './views/Portofolio';
import { Resume } from './views/Resume';
import { useEffect } from 'react';

function App() {
  const [page, setPage] = useState('Portofolio');

  const togglePage = () => {
    setPage(page === 'Portofolio' ? 'Resume' : 'Portofolio');
  };

  return (
    <Fragment>
      <button onClick={togglePage} className={'float-btn ' + page}>
        {page === 'Portofolio' ? 'Resume' : 'Portofolio'}
      </button>
      {page === 'Portofolio' ? <Portofolio /> : <Resume />}
    </Fragment>
  );
}

export default App;
