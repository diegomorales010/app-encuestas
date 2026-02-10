import { NavLink } from "react-router-dom";
import {
  Home,
  Activity,
  Users,
  User
} from "lucide-react";

const BottomNav = () => {
  const navItems = [
    { to: "/home", label: "Home", icon: Home },
    { to: "/activity", label: "Actividad", icon: Activity },
    { to: "/invite", label: "Invitar", icon: Users },
    { to: "/profile", label: "Perfil", icon: User }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl border-t border-gray-200 px-6 py-3 pb-safe">

      <div className="flex justify-between">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex flex-col items-center text-xs ${
                isActive ? "text-blue-600" : "text-gray-400"
              }`
            }
          >
            <Icon size={22} />
            <span className="mt-1">{label}</span>
          </NavLink>
        ))}
      </div>

    </div>
  );
};

export default BottomNav;
