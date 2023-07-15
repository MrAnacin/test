import { Route, Routes } from 'react-router-dom';
import Start from './pages/start/start';
import Profile from './pages/profile/profile';
import Yoga from './pages/yogapage/yogapage';
import Bodyflex from './pages/bodyflex/bodyflexpage';
import Step from './pages/step/steppage'
import Stretching from './pages/stretching/stretching';
import Dancefitnes from './pages/danceFitness/danceFitness';
import Yogatraining from './pages/yogatraining/yogatraining';
import Stretchingtraining from './pages/stretchingtraining/stretchingtraining';
const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/yoga" element={<Yoga />} />
      <Route path="/bodyflex" element={<Bodyflex />} />
      <Route path="/stretching" element={<Stretching />} />
      <Route path="/stepauerobica" element={<Step />} />
      <Route path="/dancefitness" element={<Dancefitnes />} />
      <Route path="/yogatraining" element={<Yogatraining />} />
      <Route path="/stretchingtraining" element={<Stretchingtraining />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};
export default AppRoutes;
