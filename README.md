# frontendFrameworks

Interfaz gráfica (SPA) con un sistema de autenticación completo (registro, verificación por código y login) y un dashboard principal. Consume el microservicio de seguridad del ecosistema MedCore.

## Tecnologías

- **Vite** – entorno de desarrollo y build
- **Vue 3** – framework de UI
- **Vue Router** – enrutamiento
- **Vuex** – manejo del estado global (token de sesión)
- **Axios** – comunicación con la API REST

## Flujo de autenticación

1. **Registro:** el usuario crea una cuenta (nombre, correo, contraseña).
2. **Verificación:** ingresa el código enviado a su correo.
3. **Login:** inicia sesión; el token se guarda en Vuex y `localStorage`.
4. **Dashboard:** acceso al panel principal.

## Configuración

Copia el archivo de ejemplo y ajusta la URL del backend si es necesario:

```bash
cp .env.example .env   # en Windows: copy .env.example .env
```

| Variable | Descripción |
|---|---|
| `VITE_API_URL` | URL base del microservicio de autenticación |

## Instalación y ejecución

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # build de producción
npm run preview  # previsualizar el build
```

## Estructura

```
src/
├── App.vue
├── main.js
├── router/       # rutas
├── store/        # Vuex (módulo auth)
├── services/     # authService (Axios + interceptor de token)
└── views/        # Register, Login, VerifyEmail, Dashboard
```
