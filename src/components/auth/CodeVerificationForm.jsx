// src/components/auth/CodeVerificationForm.jsx
import { Lock, LogIn, ArrowLeft } from 'lucide-react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import Form from '../ui/Form';

const CodeVerificationForm = ({
  code,
  phoneNumber,
  onChange,
  onSubmit,
  onBack,
  loading,
}) => {
  return (
    <Form onSubmit={onSubmit}>
      <button
        type="button"
        onClick={onBack}
        className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-2"
      >
        <ArrowLeft size={16} />
        Cambiar número
      </button>

      <Input
        label="Código de verificación"
        icon={Lock}
        type="text"
        value={code}
        onChange={onChange}
        placeholder="123456"
        maxLength={6}
        className="text-center text-2xl tracking-widest"
        helperText={`Enviado a ${phoneNumber}`}
        required
      />

      <Button
        type="submit"
        variant="primary"
        icon={LogIn}
        loading={loading}
        className="w-full"
      >
        {loading ? 'Verificando...' : 'Verificar código'}
      </Button>
    </Form>
  );
};

export default CodeVerificationForm;