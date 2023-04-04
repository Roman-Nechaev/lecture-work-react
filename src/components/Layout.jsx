import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <ul>
          <li>
            <NavLink to="/">Домашняя</NavLink>
          </li>
          <li>
            <NavLink to="/dogs">Коллекция</NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <footer>Footer</footer>
    </>
  );
};

export default Layout;
