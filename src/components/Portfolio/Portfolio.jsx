import { useRef } from 'react';
import './portfolio.scss';

function Portfolio({ isZoom, setOpen, setPortfolio, setMistake }) {
  // вынести в отдельный обработчик для Portfolio.jsx и Projects.jsx
  const ref = useRef(null);
  const handleClick = () => {
    if (ref.current.classList.contains('zoom')) {
      setOpen(true);
      setPortfolio(true);
    } else {
      setMistake(true);
    }
  };

  return (
    <div
      className={isZoom ? 'portfolio zoom' : 'portfolio'}
      ref={ref}
      onClick={() => {
        handleClick();
      }}
    >
      <h2 className="portfolio__title">About me</h2>
      <p className="portfolio__description">This book is a portfolio.</p>
      <p className="portfolio__subtitle">For recruiters</p>
    </div>
  );
}

export default Portfolio;
