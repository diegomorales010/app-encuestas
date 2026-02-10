import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  LogIn,
  UserPlus
} from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <>

        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex p-4 bg-blue-600 rounded-3xl shadow-lg mb-4">
            <LogIn className="text-white" size={40} />
          </div>

          <h1 className="text-3xl font-bold text-gray-900">
            Bienvenido
          </h1>

          <p className="text-gray-500 mt-2">
            {isSignUp ? 'Crea tu cuenta' : 'Inicia sesión para continuar'}
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-lg p-7">

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* EMAIL */}
            <div>
              <label className="text-sm text-gray-600 font-medium">
                Correo electrónico
              </label>

              <div className="relative mt-2">
                <Mail
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="correo@email.com"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none bg-gray-50"
                  required
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-sm text-gray-600 font-medium">
                Contraseña
              </label>

              <div className="relative mt-2">
                <Lock
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-10 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none bg-gray-50"
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* BOTON LOGIN */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 active:scale-95 transition"
            >
              {isSignUp ? <UserPlus size={18} /> : <LogIn size={18} />}
              {isSignUp ? 'Crear cuenta' : 'Iniciar sesión'}
            </button>

          </form>

          {/* TOGGLE */}
          <div className="text-center mt-6 text-sm text-gray-600">
            {isSignUp ? '¿Ya tienes cuenta?' : '¿No tienes cuenta?'}{' '}
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-blue-600 font-semibold"
            >
              {isSignUp ? 'Inicia sesión' : 'Regístrate'}
            </button>
          </div>

        </div>

    </>
  );
};

export default Login;
