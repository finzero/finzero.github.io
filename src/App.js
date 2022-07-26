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

  useEffect(() => {
    setPage('Resume');
  }, []);

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
