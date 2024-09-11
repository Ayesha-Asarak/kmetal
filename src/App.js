import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Signin from "./pages/signin";
import ForgotPasswordPage from "./pages/fp";
import ConfirmPasswordPage from "./pages/otp";
import ConfirmPasswordPage1 from "./pages/cpw"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signin />} />
        <Route path="/fp" element={<ForgotPasswordPage />} />
        <Route path="/otp" element={<ConfirmPasswordPage/>} />
        <Route path="/cpw" element={<ConfirmPasswordPage1/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
