import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "../pages/login";
import { Register } from "../pages/register";






export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login"  element={<Login />} />
                <Route path="/register"  element={<Register />} />
            </Routes>
        </Router>
    );
};
