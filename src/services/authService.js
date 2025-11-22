import axios from 'axios'

// URL base del microservicio de seguridad. Configurable por variable de entorno.
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3002/api/v1/auth'

// Incluir el token (si existe) en cada petición.
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

export default {
  register({ fullname, email, password }) {
    // El backend espera 'current_password'
    return axios.post(`${API_URL}/sign-up`, {
      fullname,
      email,
      current_password: password,
    })
  },
  verifyEmail({ email, code }) {
    // El backend espera 'verificationCode'
    return axios.post(`${API_URL}/verify-email`, {
      email,
      verificationCode: code,
    })
  },
  login({ email, password }) {
    return axios.post(`${API_URL}/sign-in`, {
      email,
      current_password: password,
    })
  },
}
