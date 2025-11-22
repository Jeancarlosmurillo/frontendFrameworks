<template>
  <div class="auth-container">
    <h2>Iniciar sesión</h2>
    <form @submit.prevent="loginUser">
      <input type="email" v-model="email" placeholder="Correo electrónico" required />
      <input type="password" v-model="password" placeholder="Contraseña" required />
      <button type="submit">Entrar</button>
    </form>
    <p class="switch">¿No tienes cuenta? <router-link to="/register">Regístrate</router-link></p>
  </div>
</template>

<script>
import authService from '../services/authService'

export default {
  data() {
    return { email: '', password: '' }
  },
  methods: {
    async loginUser() {
      try {
        const { data } = await authService.login({
          email: this.email,
          password: this.password
        })
        // El backend devuelve accessToken (login exitoso) o pide verificación
        if (data?.accessToken) {
          this.$store.commit('auth/setToken', data.accessToken)
          this.$router.push('/dashboard')
        } else if (data?.step === 'VERIFY_LOGIN') {
          this.$router.push({ path: '/verify-email', query: { email: this.email } })
        } else {
          this.$router.push('/dashboard')
        }
      } catch (error) {
        alert('Credenciales incorrectas')
      }
    }
  }
}
</script>

<style scoped>
.auth-container {
  width: 380px;
  margin: 10vh auto;
  background: #ffffff;
  border-radius: 15px;
  padding: 40px 30px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: 'Segoe UI', sans-serif;
}

.auth-container h2 {
  color: #222;
  margin-bottom: 25px;
  font-size: 24px;
  font-weight: 600;
}

form {
  display: flex;
  flex-direction: column;
}

form input {
  width: 100%;
  padding: 12px 14px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #fafafa;
  color: #333; /* ✅ texto oscuro y visible */
  font-size: 15px;
  transition: all 0.3s ease;
}

form input::placeholder {
  color: #999; /* texto del placeholder visible */
}

form input:focus {
  background: #fff;
  border-color: #4CAF50;
  box-shadow: 0 0 5px rgba(76, 175, 80, 0.3);
  outline: none;
}

button {
  width: 100%;
  padding: 12px;
  margin-top: 10px;
  background: #4CAF50;
  border: none;
  color: white;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover {
  background: #45a049;
}

.switch {
  margin-top: 15px;
  font-size: 14px;
  color: #555;
}

.switch a {
  color: #4CAF50;
  text-decoration: none;
  font-weight: 500;
}

.switch a:hover {
  text-decoration: underline;
}
</style>

