import { Route, Routes } from 'react-router-dom';

import MainPage from '../pages/MainPage';
import NavigationBar from '../shared/molecules/NavigationBar';

function MainRoutes() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<MainPage />} />;
      </Routes>
    </>
  );
}

export default MainRoutes;
