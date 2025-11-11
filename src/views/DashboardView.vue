<template>
  <div class="dashboard">
    <h1>Bienvenido a tu Dashboard</h1>
    <p>Has iniciado sesión correctamente 🎉</p>
    <button @click="logout">Cerrar sesión</button>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to right, #74ebd5, #ACB6E5);
  color: #333;
  text-align: center;
}
button {
  margin-top: 20px;
  background: #333;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
}
button:hover {
  background: #555;
}
</style>
