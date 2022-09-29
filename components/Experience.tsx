import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Experience.module.css';

export const Experience = (props: { data: IExperience }) => {
  const { workDate, position, employer, responsibilities, projects } =
    props.data;

  return (
    <div className={styles.experienceContainer}>
      <div className={styles.workDate}>{workDate}</div>
      <div className={styles.workItem}>
        <div className={styles.workTitle}>
          {employer} - {position}
        </div>
        <div className={styles.workEmployer}>Responsibilities</div>
        <div className={styles.history}>
          <ul className={styles.responsibilities}>
            {!!responsibilities.length &&
              responsibilities.map((r, i) => (
                <li key={'responsibility-' + i}>{r}</li>
              ))}
          </ul>
          <strong>
            <i>Projects</i>
          </strong>
          <div>
            {!!projects.length &&
              projects.map((p, i) => (
                <li key={'project-' + i}>
                  {p.title}
                  <br />
                  <div>
                    &emsp;
                    <strong>Technology:</strong> {p.technologies.join(', ')}
                  </div>
                </li>
              ))}
          </div>
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
  projects: PropTypes.array,
};

export interface IExperience {
  workDate: string;
  position: string;
  employer: string;
  responsibilities: any[];
  projects: any[];
}
