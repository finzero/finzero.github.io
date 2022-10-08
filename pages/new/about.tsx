import React from 'react';
import Layout from './layout';

const About = () => {
  return (
    <Layout>
      <div className="contentContainer">
        <div>
          <div className="porto-title">About Me</div>
          <p>I&apos;m Fazrin, an Enthusiast Frontend Developer and a father.</p>
          <p>
            I love browsing web since i was in highschool, i interested how they
            make blinking color, moving text and other animation. Thats how i
            get interested into making website, starting from using{' '}
            <code>Dreamweaver</code> to make layout with table and then learning
            how to make layout with <code>DIV</code> and <code>CSS</code>.
          </p>
          <p>
            My first programming language was <code>C++</code> because it is a
            subject in my college, then i learn <code>Visual Basic</code> and{' '}
            <code>PHP</code>, also database such as <code>MySQL</code> to store
            data.
          </p>
          <p>
            Not long after i got job as a programmer, Google the big company
            release their Frontend Framework <code>AngularJS</code> and there is
            a client who want their website build with <code>AngularJS</code>{' '}
            thus i learn AngularJS. Technology keep updating, many frontend
            framework and libraries appear such as <code>React</code> from
            facebook, <code>Angular (2+)</code> an entirely different angular
            framework than it&apos;s predecesor, then <code>VueJs</code> a
            framework made by community which is combined <code>AngularJS</code>{' '}
            , <code>ReactJS</code> and it&apos;s own original concepts.
          </p>
          <p>
            I love to code <code>Javascript</code> coz we can make something
            beautiful from it.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
