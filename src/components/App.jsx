import { lazy } from 'react';

import { Route, Routes } from 'react-router-dom';
// import Home from 'pages/Home';
// import Dogs from 'pages/Dogs';
// import DogsDetails from 'pages/DogsDetails';

// import Layout from './Layout';
// import Gallery from './Gallery';
import SubBreeds from './Subbreeds';

const Home = lazy(() => import('../pages/Home'));
const Dogs = lazy(() => import('../pages/Dogs'));
const DogsDetails = lazy(() => import('../pages/DogsDetails'));
const Gallery = lazy(() => import('./Gallery'));
const Layout = lazy(() => import('./Layout'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dogs" element={<Dogs />} />
          <Route path="dogs/:dogId" element={<DogsDetails />}>
            <Route path="gallery" element={<Gallery />} />
            <Route path="subbreeds" element={<SubBreeds />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
