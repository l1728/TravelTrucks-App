import { Router, Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout.jsx';
import HomePage from '../../pages/HomePage/HomePage.jsx';
import CatalogPage from '../../pages/CatalogPage/CatalogPage.jsx';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          {/* <Route path="/catalog:id" element={<CamperDetailPage />} /> */}
        </Route>
      </Routes>
    </>
  );
};

export default App;
