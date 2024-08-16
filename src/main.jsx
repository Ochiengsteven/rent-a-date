import { StrictMode } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import SignupChatbot from "./components/SignupChatbot.jsx";
import LoginPage from "./components/login.jsx";
import RegistrationPage from "./components/registration.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/signup" element={<RegistrationPage />} />
          <Route path="/onboard" element={<SignupChatbot />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </Provider>
  </StrictMode>
);
