// src/components/auth/PhoneLoginForm.jsx
import { Phone } from 'lucide-react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import Form from '../ui/Form';

const PhoneLoginForm = ({ phoneNumber, onChange, onSubmit, loading }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input
        label="Número celular"
        icon={Phone}
        type="tel"
        value={phoneNumber}
        onChange={onChange}
        placeholder="5512345678"
        maxLength={10}
        helperText="Te enviaremos un código de verificación por SMS"
        required
      />

      <Button
        type="submit"
        variant="primary"
        icon={Phone}
        loading={loading}
        className="w-full"
      >
        {loading ? 'Enviando...' : 'Enviar código'}
      </Button>
    </Form>
  );
};

export default PhoneLoginForm;