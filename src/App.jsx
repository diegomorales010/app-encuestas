// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";

import Login from "./pages/auth/Login";
import CompleteRegistration from "./pages/auth/CompleteRegistration";
import Home from "./pages/Home";
import ActivityPage from "./pages/Activity";
import InvitePage from "./pages/Invite";
import ProfilePage from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* AUTH ROUTES */}
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Login />} />
          <Route path="/complete-registration" element={<CompleteRegistration />} />
        </Route>

        {/* APP ROUTES */}
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/activity" element={<ActivityPage />} />
          <Route path="/invite" element={<InvitePage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;