import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./contexts/UserContext";
import LoginPages from "./pages/Login/LoginPages";
import RegisterPages from "./pages/Register/RegisterPages";
import SubscriptionsPages from "./pages/Subscriptions/SubscriptionsPages";

export default function App() {
  const [user, setUser] = useState({});

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={<LoginPages />} />
          <Route path="/sign-up" element={<RegisterPages />} />
          <Route path="/subscriptions" element={<SubscriptionsPages />} />
          <Route path="/" />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}