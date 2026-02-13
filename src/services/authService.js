// src/services/authService.js
import axiosInstance from './api/axiosConfig';

export const authService = {
  // Enviar código SMS al número de teléfono
  sendSmsCode: async (phoneNumber) => {
    try {
      const response = await axiosInstance.post('/auth/send-code', {
        phoneNumber,
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Error al enviar código' };
    }
  },

  // Verificar código SMS y validar si es login o registro
  verifyCode: async (phoneNumber, code) => {
    try {
      const response = await axiosInstance.post('/auth/verify-code', {
        phoneNumber,
        code,
      });
      
      // Guardar token temporal si es un nuevo usuario
      if (response.data.isNewUser) {
        localStorage.setItem('temp_token', response.data.tempToken);
        localStorage.setItem('temp_phone', phoneNumber);
      } else {
        // Si es usuario existente, guardar sesión completa
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
      }
      
      return response.data; // { isNewUser: boolean, token/tempToken, user? }
    } catch (error) {
      throw error.response?.data || { message: 'Código inválido' };
    }
  },

  // Completar registro con datos adicionales
  completeRegistration: async (userData) => {
    try {
      const tempToken = localStorage.getItem('temp_token');
      const response = await axiosInstance.post('/auth/complete-registration', userData, {
        headers: {
          'Authorization': `Bearer ${tempToken}`
        }
      });
      
      // Limpiar datos temporales
      localStorage.removeItem('temp_token');
      localStorage.removeItem('temp_phone');
      
      // Guardar sesión completa
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
      }
      
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Error al completar registro' };
    }
  },

  // Logout
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('temp_token');
    localStorage.removeItem('temp_phone');
  },

  // Obtener usuario actual
  getCurrentUser: () => {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  },

  // Verificar si hay token temporal (registro incompleto)
  hasTempToken: () => {
    return !!localStorage.getItem('temp_token');
  },
};