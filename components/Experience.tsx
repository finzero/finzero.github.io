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
        <div className={styles.history}>
          {projects.length ? (
            <div className={styles.projectLabel}>Projects:</div>
          ) : null}
          <div>
            {!!projects.length &&
              projects.map((p, i) => (
                <div key={'project-' + i}>
                  <div className={styles.projectName}>{p.title}</div>
                  <div className={styles.projectDesc}>{p.description}</div>
                  {p.technologies && (
                    <div>
                      <strong>Stack:</strong> {p.technologies.join(', ')}.
                    </div>
                  )}
                  <div className="">
                    <strong>Responsibilities:</strong>
                  </div>
                  {p.responsibilities &&
                    p.responsibilities.map((res: any, resI: number) => (
                      <li key={resI}>{res}</li>
                    ))}
                </div>
              ))}
          </div>
          {responsibilities && (
            <div>
              <strong>Responsibilities:</strong>
            </div>
          )}
          {responsibilities &&
            responsibilities.map((r: any, rIdx: number) => (
              <li key={'responsibility-' + rIdx}>{r}</li>
            ))}
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
  responsibilities?: any[];
  projects: any[];
}
