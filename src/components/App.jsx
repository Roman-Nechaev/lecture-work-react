import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Dogs from 'pages/Dogs';

import DogsDetails from 'pages/DogsDetails';
import Layout from './Layout';
import Gallery from './Gallery';
import SubBreeds from './Subbreeds';

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
