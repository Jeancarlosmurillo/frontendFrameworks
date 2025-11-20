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
    return axios.post(`${API_URL}/sign-up`, { fullname, email, password })
  },
  verifyEmail({ email, code }) {
    return axios.post(`${API_URL}/verify-email`, { email, code })
  },
  login({ email, password }) {
    return axios.post(`${API_URL}/sign-in`, { email, password })
  },
}
