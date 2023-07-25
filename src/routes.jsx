import { Route, Routes } from 'react-router-dom';
import Start from './pages/start/start';
import Profile from './pages/profile/profile';
import Yoga from './pages/yogapage/yogapage';
import Bodyflex from './pages/bodyflex/bodyflexpage';
import Step from './pages/step/steppage'
import Stretching from './pages/stretching/stretching';
import Dancefitnes from './pages/danceFitness/danceFitness';
import YogaForAuth from './pages/yogaForAuth/yogaForAuth';
import Registration from './components/registartion/reg';
import Login from './components/registartion/login';
import Loginpage from './pages/loginpage/loginpage';
// import { ProtectedRoute } from './components/protected-routs/protected-routs'
const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/yoga" element={<Yoga />} />
      <Route path="/bodyflex" element={<Bodyflex />} />
      <Route path="/stretching" element={<Stretching />} />
      <Route path="/stepauerobica" element={<Step />} />
      <Route path="/dancefitness" element={<Dancefitnes />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/yoga-training" element={<YogaForAuth />} />
      <Route path="/reg" element={<Registration />} />     
      <Route path="/login" element={<Login />} />
      <Route path="/loginpage" element={<Loginpage />} /> 
      {/* <Route element={<ProtectedRoute />}>
        <Route path="/profile" element={<Profile />} />
      </Route>     */}
    </Routes>
  );
};
export default AppRoutes;
