import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ForgotPassword from "./Components/ForgotPassword";
import ChangePassword from "./Components/ChangePassword";
import Loginnew from "./Components/Loginnew";
import Registernew from "./Components/Registernew";
import MainComponent from "./Components/MainComponent";

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loginnew />} />
          <Route path="/register" element={<Registernew />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/changepassword/:userId/:token" element={<ChangePassword />} />
          <Route path="/main" element={<MainComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
