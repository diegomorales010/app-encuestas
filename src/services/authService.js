// src/services/authService.js
import axiosInstance from './api/axiosConfig';

export const authService = {
  // Registro de usuario
  register: async (userData) => {
    try {
      const response = await axiosInstance.post('/auth/register', userData);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Error en el registro' };
    }
  },

  // Enviar código SMS
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

  // Verificar código SMS
  verifyCode: async (phoneNumber, code) => {
    try {
      const response = await axiosInstance.post('/auth/verify-code', {
        phoneNumber,
        code,
      });
      
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
      }
      
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Código inválido' };
    }
  },

  // Logout
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  // Obtener usuario actual
  getCurrentUser: () => {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  },
};