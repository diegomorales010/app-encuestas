import { User, Mail, Award, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
const Profile = () => {
    const navigate = useNavigate();
    const handleLogout = (e) => {
        e.preventDefault();
        navigate('/');
    };
    return (
        <div className="px-5 pt-safe pt-6">

        <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Perfil
        </h1>

        {/* INFO USUARIO */}
        <div className="bg-white rounded-2xl p-6 shadow-sm text-center">

            <div className="inline-flex p-4 bg-blue-100 rounded-full mb-3">
            <User className="text-blue-600" size={30} />
            </div>

            <h2 className="font-semibold text-gray-800">
            Usuario Demo
            </h2>

            <p className="text-gray-500 text-sm mt-1">
            usuario@email.com
            </p>

        </div>

        {/* ESTADISTICAS */}
        <div className="grid grid-cols-2 gap-3 mt-6">

            <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
            <Award className="mx-auto text-blue-600 mb-2" />
            <p className="text-xs text-gray-500">Nivel</p>
            <p className="font-bold text-blue-600">Explorador</p>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
            <Mail className="mx-auto text-blue-600 mb-2" />
            <p className="text-xs text-gray-500">Encuestas</p>
            <p className="font-bold text-blue-600">12</p>
            </div>

        </div>

        {/* LOGOUT */}
        <button className="mt-8 w-full bg-red-500 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 active:scale-95 transition" onClick={handleLogout}>
            <LogOut size={18} />
            Cerrar sesión
        </button>

        </div>
    );
};

export default Profile;
