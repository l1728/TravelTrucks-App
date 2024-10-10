import { useState } from 'react';
import CatalogListItem from '../CatalogListItem/CatalogListItem.jsx';
import css from './CatalogList.module.css';
import Button from '../Button/Button.jsx';

const CatalogList = ({ campers }) => {
  const [visibleItems, setVisibleItems] = useState(4);

  const handleLoadMore = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + 4);
  };

  return (
    <div className={css.list}>
      {campers && campers.length > 0 ? (
        campers
          .slice(0, visibleItems)
          .map(camper => <CatalogListItem key={camper.id} camper={camper} />)
      ) : (
        <p>No campers available</p>
      )}

      {campers && visibleItems < campers.length && (
        <Button onClick={handleLoadMore} className={css.loadMoreBtn}>
          Load More
        </Button>
      )}
    </div>
  );
};

export default CatalogList;
