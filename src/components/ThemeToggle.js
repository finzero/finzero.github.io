import React from 'react';
import './ThemeToggle.css';

export const ThemeToggle = (props) => {
  return (
    <React.Fragment>
      <input type="checkbox" id="toggle_checkbox" onChange={props.onChange} />

      <label htmlFor="toggle_checkbox">
        <div id="star">
          <div className="star" id="star-1">
            ★
          </div>
          <div className="star" id="star-2">
            ★
          </div>
        </div>
        <div id="moon"></div>
      </label>
    </React.Fragment>
  );
};
