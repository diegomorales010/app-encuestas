// src/pages/auth/CompleteRegistration.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Calendar, CreditCard, Phone } from 'lucide-react';
import Input from '../../components/ui/Input';
import Select from '../../components/ui/Select';
import Button from '../../components/ui/Button';
import Form from '../../components/ui/Form';
import Alert from '../../components/ui/Alert';
import { authService } from '../../services/authService';

const CompleteRegistration = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [formData, setFormData] = useState({
    fullName: '',
    curp: '',
    rfc: '',
    birthDate: '',
    gender: '',
  });

  useEffect(() => {
    // Verificar si hay token temporal
    if (!authService.hasTempToken()) {
      navigate('/');
      return;
    }

    // Obtener número de teléfono temporal
    const tempPhone = localStorage.getItem('temp_phone');
    if (tempPhone) {
      setPhoneNumber(tempPhone);
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Formatear CURP y RFC a mayúsculas
    if (name === 'curp' || name === 'rfc') {
      setFormData((prev) => ({
        ...prev,
        [name]: value.toUpperCase(),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await authService.completeRegistration({
        ...formData,
        phoneNumber,
      });
      navigate('/home');
    } catch (err) {
      setError(err.message || 'Error al completar el registro');
    } finally {
      setLoading(false);
    }
  };

  const genderOptions = [
    { value: 'M', label: 'Masculino' },
    { value: 'F', label: 'Femenino' },
    { value: 'O', label: 'Otro' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex p-4 bg-blue-600 rounded-3xl shadow-lg mb-4">
            <User className="text-white" size={40} />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Completa tu perfil</h1>
          <p className="text-gray-500 mt-2">
            Necesitamos algunos datos más para crear tu cuenta
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-lg p-7">
          {error && (
            <Alert
              type="error"
              message={error}
              onClose={() => setError('')}
              className="mb-4"
            />
          )}

          <Form onSubmit={handleSubmit}>
            {/* Número de Teléfono (No modificable) */}
            <Input
              label="Número celular"
              icon={Phone}
              type="tel"
              value={phoneNumber}
              disabled
              className="bg-gray-100 cursor-not-allowed"
            />

            {/* Nombre Completo */}
            <Input
              label="Nombre completo"
              icon={User}
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Juan Pérez García"
              required
            />

            {/* Fecha de Nacimiento */}
            <Input
              label="Fecha de nacimiento"
              icon={Calendar}
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              required
            />

            {/* Sexo */}
            <Select
              label="Sexo"
              icon={User}
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              options={genderOptions}
              placeholder="Selecciona tu sexo"
              required
            />

            {/* CURP */}
            <Input
              label="CURP"
              icon={CreditCard}
              type="text"
              name="curp"
              value={formData.curp}
              onChange={handleChange}
              placeholder="ABCD123456HDFRNN09"
              maxLength={18}
              className="uppercase"
              required
            />

            {/* RFC */}
            <Input
              label="RFC"
              icon={CreditCard}
              type="text"
              name="rfc"
              value={formData.rfc}
              onChange={handleChange}
              placeholder="ABCD123456XYZ"
              maxLength={13}
              className="uppercase"
              required
            />

            {/* Botón Completar Registro */}
            <Button
              type="submit"
              variant="primary"
              icon={User}
              loading={loading}
              className="w-full"
            >
              {loading ? 'Completando registro...' : 'Completar registro'}
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CompleteRegistration;