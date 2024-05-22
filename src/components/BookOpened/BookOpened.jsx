import HTMLFlipBook from 'react-pageflip';
import './BookOpened.scss';
import { projectsArr } from '../../db';

function BookOpened({ isPortfolio }) {
  return isPortfolio ? (
    <HTMLFlipBook width={680} height={820}>
      <div className="page" data-density="hard">
        Aboutme
      </div>
      <div className="page" data-density="hard">
        Aboutme
      </div>
      <div className="page" data-density="hard">
        Aboutme
      </div>
      <div className="page" data-density="hard">
        Aboutme
      </div>
    </HTMLFlipBook>
  ) : (
    <HTMLFlipBook width={680} height={820}>
      {projectsArr.map((item) => (
        <div className="page" data-density="soft" key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.category}</p>
          <p>{item.description}</p>
          <p>{item.page}</p>
        </div>
      ))}
    </HTMLFlipBook>
  );
}

export default BookOpened;
