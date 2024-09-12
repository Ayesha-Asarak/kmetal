import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from "./pages/signin";
import ForgotPasswordPage from "./pages/fp";
import ConfirmPasswordPage1 from "./pages/cpw";
import ConfirmPasswordPage from "./pages/otp";
import Login from "./pages/login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/signup" element={<Signin />} />
        <Route path="/fp" element={<ForgotPasswordPage />} />
        <Route path="/otp" element={<ConfirmPasswordPage />} />
        <Route path="/cpw" element={<ConfirmPasswordPage1 />} />
      </Routes>
    </Router>
  );
};

export default App;
