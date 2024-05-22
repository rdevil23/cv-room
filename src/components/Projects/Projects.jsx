import { useRef } from 'react';
import './projects.scss';

function Projects({ isZoom, setOpen, setPortfolio, setMistake }) {
  // вынести в отдельный обработчик для Portfolio.jsx и Projects.jsx
  const ref = useRef(null);
  const handleClick = () => {
    if (ref.current.classList.contains('zoom')) {
      setOpen(true);
      setPortfolio(false);
    } else {
      setMistake(true);
    }
  };

  return (
    <div
      className={isZoom ? 'projects zoom' : 'projects'}
      ref={ref}
      onClick={() => {
        handleClick();
      }}
    >
      <h2 className="project__title">My projects</h2>
      <p className="project__description">This book contains all my projects</p>
      <p className="project__subtitle">For programmers</p>
    </div>
  );
}

export default Projects;
