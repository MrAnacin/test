import { Route, Routes } from 'react-router-dom';
import Start from './pages/start/start';
import Profile from './pages/profile/profile';
import Yogapage from './pages/yogapage/yogapage';
import Stretching from './pages/stretching/stretching';
import Yogatraining from './pages/yogatraining/yogatraining';
import Stretchingtraining from './pages/stretchingtraining/stretchingtraining';
const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/yogapage" element={<Yogapage />} />
      <Route path="/stretching" element={<Stretching />} />
      <Route path="/yogatraining" element={<Yogatraining />} />
      <Route path="/stretchingtraining" element={<Stretchingtraining />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};
export default AppRoutes;
