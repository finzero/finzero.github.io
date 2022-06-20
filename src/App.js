import './App.css';
import { Items } from './components/Items';
import { AboutMe } from './components/AboutMe';
// import data from '../public/json/data.json';
import { useEffect, useState, createRef } from 'react';
import { ThemeToggle } from './components/ThemeToggle';

function App() {
  const [skills, setSkills] = useState([]);
  const [works, setWorks] = useState([]);
  const [socialMedia, setSocialMedia] = useState([]);

  const containerRef = createRef();

  const toggleTheme = () => {
    containerRef.current.classList.toggle('night');
  };

  useEffect(() => {
    fetch('./json/data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setSkills(data.skills);
        setWorks(data.works);
        setSocialMedia(data.socialMedia);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="main-container" ref={containerRef}>
      <ThemeToggle onChange={toggleTheme} />
      <a href="/" onClick={(e) => e.preventDefault()} className="float-btn">
        Resume
      </a>
      <AboutMe />
      <Items title={'SKILLS'} className={'skills'} items={skills} />
      <Items title={'WORKS'} className={'projects'} items={works} />
      <Items
        title={'SOCIAL MEDIA'}
        className={'social-media'}
        items={socialMedia}
      />
    </div>
  );
}

export default App;
