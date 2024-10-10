import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button.jsx';
import css from './HomeContent.module.css';

const HomeContent = () => {
  const navigate = useNavigate();

  const handleViewNowClick = () => {
    navigate('/catalog');
  };
  return (
    <>
      <div className={css.container}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p className={css.text}>
          You can find everything you want in our catalog
        </p>
        <Button onClick={handleViewNowClick} className={css.handleViewNowBtn}>
          View Now
        </Button>
      </div>
    </>
  );
};

export default HomeContent;
