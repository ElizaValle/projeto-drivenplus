import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPages from "./pages/Login/LoginPages";
import RegisterPages from "./pages/Register/RegisterPages";
import SubscriptionsPages from "./pages/Subscriptions/SubscriptionsPages";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPages />} />
        <Route path="/sign-up" element={<RegisterPages />} />
        <Route path="/subscriptions" element={<SubscriptionsPages />} />
        <Route path="/" />
      </Routes>
  
    </BrowserRouter>
  );
}