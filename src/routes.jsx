import { Route, Routes } from 'react-router-dom';
import Start from './pages/start/start';
import Profile from './pages/profile/profile';
import Yogapage from './pages/yogapage/yogapage';
import Stretching from './pages/yogapage/yogapage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/yogapage" element={<Yogapage />} />
      <Route path="/stretching" element={<Stretching />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};
export default AppRoutes;
