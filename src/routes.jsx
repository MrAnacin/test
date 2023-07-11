import { Route, Routes } from "react-router-dom";
import Start from "./pages/start/start";
import Profile from "./pages/profile/profile";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Start/>} />

            <Route path="/profile" element={<Profile />} />
        </Routes>
    );
}
export default AppRoutes;