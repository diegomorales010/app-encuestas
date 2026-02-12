import { Outlet } from "react-router-dom";
import BottomNav from "../components/BottomNav";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-blue-50 pb-24 pt-6">

      {/* CONTENIDO VARIABLE */}
      <Outlet />

      {/* NAVBAR */}
      <BottomNav />

    </div>
  );
};

export default MainLayout;
