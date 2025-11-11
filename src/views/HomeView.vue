<template>
  <div class="container">
    <h2>Bienvenido a la App</h2>
    <p>Has iniciado sesión correctamente 🎉</p>
    <button @click="logout">Cerrar Sesión</button>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      alert('Sesión cerrada')
      window.location.href = '/login'
    }
  }
}
</script>
