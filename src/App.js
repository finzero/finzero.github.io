import './App.css';
import React, { Fragment } from 'react';
import { Portofolio } from './views/Portofolio';

function App() {
  return (
    <Fragment>
      <a href="/" onClick={(e) => e.preventDefault()} className="float-btn">
        Resume
      </a>
      <Portofolio />
    </Fragment>
  );
}

export default App;
