import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./contexts/UserContext";
import LoginPages from "./pages/Login/LoginPages";
import Home from "./pages/PageHome/Home";
import RegisterPages from "./pages/Register/RegisterPages";
import SubscriptionPlan from "./pages/Subscriptions/SubscriptionPlan";
import SubscriptionsList from "./pages/Subscriptions/SubscriptionsList";

export default function App() {
  const [user, setUser] = useState({});

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={<LoginPages />} />
          <Route path="/sign-up" element={<RegisterPages />} />
          <Route path="/subscriptions" element={<SubscriptionsList />  }/>
          <Route path="/subscriptions/:idPlan" element={<SubscriptionPlan />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}