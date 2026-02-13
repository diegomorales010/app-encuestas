// src/components/auth/AuthHeader.jsx
import { LogIn } from 'lucide-react';

const AuthHeader = ({ showCodeInput }) => {
  return (
    <div className="text-center mb-8">
      <div className="inline-flex p-4 bg-blue-600 rounded-3xl shadow-lg mb-4">
        <LogIn className="text-white" size={40} />
      </div>
      <h1 className="text-3xl font-bold text-gray-900">Bienvenido</h1>
      <p className="text-gray-500 mt-2">
        {showCodeInput
          ? 'Ingresa el código SMS'
          : 'Ingresa tu número para continuar'}
      </p>
    </div>
  );
};

export default AuthHeader;