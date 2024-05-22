import './App.css';

import { useState } from 'react';

import Modal from './components/Modal/Modal';
import Portfolio from './components/Portfolio/Portfolio';
import Projects from './components/Projects/Projects';
import BookOpened from './components/BookOpened/BookOpened';

function App() {
  const [isZoom, setZoom] = useState(false);

  const [isOpen, setOpen] = useState(false);
  const [isPortfolio, setPortfolio] = useState(true);
  const [isMistake, setMistake] = useState(false);

  const zoomTable = () => {
    setZoom(!isZoom);
    setMistake(false);
  };

  return (
    <main className="room">
      <div className={isZoom ? 'wall zoom' : 'wall'}></div>
      <div className={isZoom ? 'real-life zoom' : 'real-life'}></div>
      <ul className={isZoom ? 'blinds zoom' : 'blinds'}>
        <li className="blinds__elem"></li>
        <li className="blinds__elem"></li>
        <li className="blinds__elem"></li>
        <li className="blinds__elem"></li>
        <li className="blinds__elem"></li>
      </ul>
      <div className="table-block">
        <Portfolio
          isZoom={isZoom}
          setOpen={setOpen}
          setPortfolio={setPortfolio}
          setMistake={setMistake}
        />
        <Projects
          isZoom={isZoom}
          setOpen={setOpen}
          setPortfolio={setPortfolio}
          setMistake={setMistake}
        />

        <div
          onClick={() => zoomTable()}
          className={isZoom ? 'table zoom' : ' table table__animation'}
        >
          <span className={isMistake ? 'table__mistake table__mistake_show' : 'table__mistake'}>
            {'Pls first click on the table to open the book :)'}
          </span>
          <div className="table-leg table-leg-1"></div>
          <div className="table-leg table-leg-2"></div>
          <div className="table-leg table-leg-3"></div>
          <div className="table-leg table-leg-4"></div>
        </div>
      </div>
      <div className={isZoom ? 'floor zoom' : 'floor'}></div>

      {/* <Modal isVisible={isOpen} onClose={() => setOpen(false)}>
        {isPortfolio ? <Portfolio /> : <Projects />}
      </Modal> */}

      <Modal isVisible={isOpen} onClose={() => setOpen(false)}>
        <BookOpened isPortfolio={isPortfolio} />
      </Modal>

      {/* <Cursor /> */}
    </main>
  );
}

export default App;
