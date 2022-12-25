import { Route, Routes } from 'react-router-dom';

import HomePage from '../pages/HomePage';

function MainRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />;
    </Routes>
  );
}

export default MainRoutes;
