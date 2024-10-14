import Header from '../../components/Header/Header.jsx';
import HomeContent from '../../components/HomeContent/HomeContent.jsx';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.homeContainer}>
      <Header />
      <HomeContent />
    </div>
  );
};

export default HomePage;
