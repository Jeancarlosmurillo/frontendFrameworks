<template>
  <div class="auth-container">
    <h2>Crear cuenta</h2>
    <form @submit.prevent="registerUser">
      <input type="text" v-model="name" placeholder="Nombre completo" required />
      <input type="email" v-model="email" placeholder="Correo electrónico" required />
      <input type="password" v-model="password" placeholder="Contraseña" required />
      <button type="submit">Registrarse</button>
    </form>
    <p class="switch">¿Ya tienes cuenta? <router-link to="/login">Inicia sesión</router-link></p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return { name: '', email: '', password: '' }
  },
  methods: {
    async registerUser() {
      try {
        await axios.post('http://localhost:3000/auth/register', {
          name: this.name,
          email: this.email,
          password: this.password
        })
        this.$router.push('/verify-email')
      } catch (error) {
        alert('Error al registrarse')
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
