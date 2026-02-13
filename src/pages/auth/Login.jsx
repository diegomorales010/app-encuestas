// src/pages/Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Phone,
  Lock,
  LogIn,
  UserPlus,
  Calendar,
  User,
  CreditCard,
  ArrowLeft,
} from 'lucide-react';
import { authService } from '../../services/authService';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showCodeInput, setShowCodeInput] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Estados para registro
  const [registerData, setRegisterData] = useState({
    fullName: '',
    birthDate: '',
    curp: '',
    phoneNumber: '',
  });

  // Estados para login
  const [phoneNumber, setPhoneNumber] = useState('');
  const [code, setCode] = useState('');

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    
    // Formatear CURP a mayúsculas
    if (name === 'curp') {
      setRegisterData(prev => ({
        ...prev,
        [name]: value.toUpperCase()
      }));
    } else {
      setRegisterData(prev => ({
        ...prev,
        [name]: value
      }));
    }
    setError('');
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await authService.register(registerData);
      alert('Registro exitoso. Ahora puedes iniciar sesión.');
      setIsSignUp(false);
      setRegisterData({
        fullName: '',
        birthDate: '',
        curp: '',
        phoneNumber: '',
      });
    } catch (err) {
      setError(err.message || 'Error al registrar usuario');
    } finally {
      setLoading(false);
    }
  };

  const handleSendCode = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await authService.sendSmsCode(phoneNumber);
      setShowCodeInput(true);
    } catch (err) {
      setError(err.message || 'Error al enviar código SMS');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyCode = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await authService.verifyCode(phoneNumber, code);
      navigate('/home');
    } catch (err) {
      setError(err.message || 'Código inválido');
    } finally {
      setLoading(false);
    }
  };

  const handleBackToPhone = () => {
    setShowCodeInput(false);
    setCode('');
    setError('');
  };

  return (
    <>
      {/* Logo */}
      <div className="text-center mb-8">
        <div className="inline-flex p-4 bg-blue-600 rounded-3xl shadow-lg mb-4">
          <LogIn className="text-white" size={40} />
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Bienvenido</h1>
        <p className="text-gray-500 mt-2">
          {isSignUp
            ? 'Crea tu cuenta'
            : showCodeInput
            ? 'Ingresa el código SMS'
            : 'Inicia sesión para continuar'}
        </p>
      </div>

      {/* Card */}
      <div className="bg-white rounded-3xl shadow-lg p-7">
        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
            {error}
          </div>
        )}

        {/* FORMULARIO DE REGISTRO */}
        {isSignUp ? (
          <form onSubmit={handleRegisterSubmit} className="space-y-5">
            {/* Nombre Completo */}
            <div>
              <label className="text-sm text-gray-600 font-medium">
                Nombre completo
              </label>
              <div className="relative mt-2">
                <User
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  name="fullName"
                  value={registerData.fullName}
                  onChange={handleRegisterChange}
                  placeholder="Juan Pérez García"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none bg-gray-50"
                  required
                />
              </div>
            </div>

            {/* Fecha de Nacimiento */}
            <div>
              <label className="text-sm text-gray-600 font-medium">
                Fecha de nacimiento
              </label>
              <div className="relative mt-2">
                <Calendar
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="date"
                  name="birthDate"
                  value={registerData.birthDate}
                  onChange={handleRegisterChange}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none bg-gray-50"
                  required
                />
              </div>
            </div>

            {/* CURP */}
            <div>
              <label className="text-sm text-gray-600 font-medium">CURP</label>
              <div className="relative mt-2">
                <CreditCard
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  name="curp"
                  value={registerData.curp}
                  onChange={handleRegisterChange}
                  placeholder="ABCD123456HDFRNN09"
                  maxLength={18}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none bg-gray-50 uppercase"
                  required
                />
              </div>
            </div>

            {/* Número Celular */}
            <div>
              <label className="text-sm text-gray-600 font-medium">
                Número celular
              </label>
              <div className="relative mt-2">
                <Phone
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="tel"
                  name="phoneNumber"
                  value={registerData.phoneNumber}
                  onChange={handleRegisterChange}
                  placeholder="5512345678"
                  maxLength={10}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none bg-gray-50"
                  required
                />
              </div>
            </div>

            {/* Botón Registro */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 active:scale-95 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <UserPlus size={18} />
              {loading ? 'Registrando...' : 'Crear cuenta'}
            </button>
          </form>
        ) : (
          <>
            {/* FORMULARIO DE LOGIN */}
            {!showCodeInput ? (
              <form onSubmit={handleSendCode} className="space-y-5">
                {/* Número Celular */}
                <div>
                  <label className="text-sm text-gray-600 font-medium">
                    Número celular
                  </label>
                  <div className="relative mt-2">
                    <Phone
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => {
                        setPhoneNumber(e.target.value);
                        setError('');
                      }}
                      placeholder="5512345678"
                      maxLength={10}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none bg-gray-50"
                      required
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Te enviaremos un código de verificación por SMS
                  </p>
                </div>

                {/* Botón Enviar Código */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 active:scale-95 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Phone size={18} />
                  {loading ? 'Enviando...' : 'Enviar código'}
                </button>
              </form>
            ) : (
              <form onSubmit={handleVerifyCode} className="space-y-5">
                {/* Botón Volver */}
                <button
                  type="button"
                  onClick={handleBackToPhone}
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-2"
                >
                  <ArrowLeft size={16} />
                  Cambiar número
                </button>

                {/* Código SMS */}
                <div>
                  <label className="text-sm text-gray-600 font-medium">
                    Código de verificación
                  </label>
                  <div className="relative mt-2">
                    <Lock
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                      type="text"
                      value={code}
                      onChange={(e) => {
                        setCode(e.target.value);
                        setError('');
                      }}
                      placeholder="123456"
                      maxLength={6}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none bg-gray-50 text-center text-2xl tracking-widest"
                      required
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Enviado a {phoneNumber}
                  </p>
                </div>

                {/* Botón Verificar */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 active:scale-95 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <LogIn size={18} />
                  {loading ? 'Verificando...' : 'Verificar código'}
                </button>
              </form>
            )}
          </>
        )}

        {/* TOGGLE Login/Registro */}
        <div className="text-center mt-6 text-sm text-gray-600">
          {isSignUp ? '¿Ya tienes cuenta?' : '¿No tienes cuenta?'}{' '}
          <button
            onClick={() => {
              setIsSignUp(!isSignUp);
              setShowCodeInput(false);
              setError('');
              setCode('');
            }}
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