import { Suspense } from 'react';
// import { Header } from '../Header/Header.jsx';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div style={{ margin: '0 auto', padding: '0 16px' }}>
      {/* <Header /> */}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
