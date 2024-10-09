import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      <div className={css.container}>
        <h1 className={css.title}>
          Campers of your dreams{' '}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1>
      </div>
    </>
  );
};

export default HomePage;
