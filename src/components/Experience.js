import React from 'react';
import PropTypes from 'prop-types';

export const Experience = (props) => {
  const { workDate, position, employer, responsibilities } = props.data;
  return (
    <div className="row">
      <div className="col-md-2 col-sm-12">{workDate}</div>
      <div className="col-md-10 col-sm-12 nopadding">
        <div className="work-title">{position}</div>
        <div className="work-employer">{employer}</div>
        <div className="history">
          <ul style={{ padding: '0 20px' }}>
            {responsibilities.length &&
              responsibilities.map((r, i) => (
                <li key={'responsibility-' + i}>{r}</li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

Experience.propTypes = {
  workDate: PropTypes.string,
  position: PropTypes.string,
  employer: PropTypes.string,
  responsibilities: PropTypes.array,
};
