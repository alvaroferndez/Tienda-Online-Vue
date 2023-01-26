<script setup>
import { ref } from 'vue'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
var iniciar = ref(true);

var usuario = ref("");
var contraseña = ref("");


function alta(){
      createUserWithEmailAndPassword(auth,usuario.value,contraseña.value)
      .then((userCredential) => {
            const user = userCredential.user;
      })
      .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
      })
}

function cambiarRegistrarse() {
      iniciar.value = false;
}

function cambiarIniciar() {
      iniciar.value = true;
}

</script>

<template>
      <section v-if="iniciar" class="contenedor-login">
            <section class="iniciar">
                  <h1 class="titulo-inicio titulo">Inicio de sesión</h1>
                  <form action="">
                        <input type="text" class="usuario" pattern="[a-záéíóúñA-ZÁÉÚÍÓÑ0-9]{2,25}"
                              placeholder="escriba su usuario" v-model="usuario" required>
                        <input type="password" class="contraseña" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                              placeholder="escriba su contraseña" v-model="contraseña" required>
                        <input type="submit" @click="alta" class="subcribirse" id="iniciar-sesion" value="iniciar sesión">
                  </form>
            </section>
            <section class="registrarse">
                  <div class="cambiar-registrarse" @click="cambiarRegistrarse()">
                        <h1 class="cambiar hover">Registrarse</h1>
                  </div>
            </section>
      </section>
      <section v-else class="contenedor-login">
            <section class="iniciar">
                  <div class="cambiar-iniciar" @click="cambiarIniciar()">
                        <h1 class="cambiar hover">Iniciar sesión</h1>
                  </div>
            </section>
            <section class="registrarse">
                  <h1 class="titulo-inicio titulo">Registrarse</h1>
                  <form action="">
                        <input type="text" class="usuario" placeholder="escriba su usuario"
                              pattern="[a-záéíóúñA-ZÁÉÚÍÓÑ0-9]{2,25}" required>
                        <input type="text" class="nombre" placeholder="escriba su nombre"
                              pattern="[a-záéíóúñA-ZÁÉÚÍÓÑ0-9]{2,25}" required>
                        <input type="text" class="apellidos" placeholder="escriba sus apellidos"
                              pattern="[a-záéíóúñA-ZÁÉÚÍÓÑ0-9]{2,25}[a-záéíóúñA-ZÁÉÚÍÓÑ0-9]{2,25}" required>
                        <input type="tel" class="telefono" placeholder="escriba su telefono" pattern="[0-9]{9}"
                              required>
                        <input type="email" class="correo" placeholder="escriba su correo" required>
                        <input type="password" class="contraseña" placeholder="escriba su contraseña"
                              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required>
                        <input type="password" class="repetir-contraseña" placeholder="repita su contraseña"
                              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required>
                        <input type="submit" class="subcribirse" id="registrarse" value="registrarse">
                  </form>
            </section>
      </section>
</template>