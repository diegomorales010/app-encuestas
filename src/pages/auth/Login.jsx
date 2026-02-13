// src/pages/auth/Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import PhoneLoginForm from '../../components/auth/PhoneLoginForm';
import CodeVerificationForm from '../../components/auth/CodeVerificationForm';
import AuthHeader from '../../components/auth/AuthHeader';
import Alert from '../../components/ui/Alert';
import { authService } from '../../services/authService';

const Login = () => {
  const [showCodeInput, setShowCodeInput] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [code, setCode] = useState('');
  const navigate = useNavigate();

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
      const response = await authService.verifyCode(phoneNumber, code);
      
      if (response.isNewUser) {
        // Usuario nuevo - redirigir a completar registro
        navigate('/complete-registration');
      } else {
        // Usuario existente - redirigir a home
        navigate('/home');
      }
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
      <AuthHeader showCodeInput={showCodeInput} />

      <div className="bg-white rounded-3xl shadow-lg p-7">
        {error && (
          <Alert
            type="error"
            message={error}
            onClose={() => setError('')}
            className="mb-4"
          />
        )}
        {!showCodeInput ? (
          <PhoneLoginForm
            phoneNumber={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
              setError('');
            }}
            onSubmit={handleSendCode}
            loading={loading}
          />
        ) : (
          <CodeVerificationForm
            code={code}
            phoneNumber={phoneNumber}
            onChange={(e) => {
              setCode(e.target.value);
              setError('');
            }}
            onSubmit={handleVerifyCode}
            onBack={handleBackToPhone}
            loading={loading}
          />
        )}
      </div>
    </>
  );
};

export default Login;