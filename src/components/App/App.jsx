import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout.jsx';
import HomePage from '../../pages/HomePage/HomePage.jsx';
import CatalogPage from '../../pages/CatalogPage/CatalogPage.jsx';
import CamperDetailPage from '../../pages/CamperDetailPage/CamperDetailPage.jsx';
import FavoritesPage from '../../pages/FavoritesPage/FavoritesPage.jsx';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/camper/:camperId" element={<CamperDetailPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
