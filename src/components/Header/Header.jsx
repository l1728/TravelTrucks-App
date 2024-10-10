import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <img
        src="/src/img/logo-travel-truck.png"
        alt="TravelTrucks"
        className={css.logo}
      />
      <nav className={css.nav}>
        <a href="/" className={css.link}>
          Home
        </a>
        <a href="/catalog" className={css.link}>
          Catalog
        </a>
      </nav>
    </header>
  );
};

export default Header;
