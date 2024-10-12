import { useLocation } from 'react-router-dom';
import css from './Header.module.css';

const Header = ({ className }) => {
  const location = useLocation();

  return (
    <header className={`${css.header} ${className}`}>
      <img
        src="/img/logo-travel-truck.png"
        alt="TravelTrucks"
        className={css.logo}
      />
      <nav className={css.nav}>
        <a
          href="/"
          className={`${css.link} ${
            location.pathname === '/' ? css.active : ''
          }`}
        >
          Home
        </a>
        <a
          href="/catalog"
          className={`${css.link} ${
            location.pathname === '/catalog' ? css.active : ''
          }`}
        >
          Catalog
        </a>
      </nav>
    </header>
  );
};

export default Header;
