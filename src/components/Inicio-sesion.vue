<script setup>
import { ref } from 'vue'
import { auth } from '../firebase';
import router from '../router';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from 'firebase/auth';

var iniciar = ref(true);

var correo = ref("");
var contraseña = ref("");

const provider = new GoogleAuthProvider();


function alta(){
      signInWithEmailAndPassword(auth, correo.value, contraseña.value)
  .then((userCredential) => {
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

function registro(){
      createUserWithEmailAndPassword(auth,correo.value,contraseña.value)
      .then((userCredential) => {
      })
      .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
      })
}

function altaGoogle(){
      signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;

  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  });
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
                        <input type="text" class="correo"
                              placeholder="escriba su correo" v-model="correo" required>
                        <input type="password" class="contraseña"
                              placeholder="escriba su contraseña" v-model="contraseña" required>
                        <input type="button" @click="alta" class="subcribirse" id="iniciar-sesion" value="iniciar sesión">
                  </form>
                  <form action="">
                        <input type="button" @click="altaGoogle" name="google" id="google" value="google">
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
                  </form>
            </section>
      </section>
</template>