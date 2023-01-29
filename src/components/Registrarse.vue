<script setup>
import { ref } from 'vue'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword} from 'firebase/auth';

var correo = ref("");
var contraseña = ref("");

function registro(){
      createUserWithEmailAndPassword(auth,correo.value,contraseña.value)
      .then((userCredential) => {
            const user = userCredential.user;
      })
      .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
      })
}
</script>

<template>
      <section class="registrarse">
                  <h1 class="titulo-inicio titulo">Registrarse</h1>
                  <form action="">
                        <input type="email" class="correo" placeholder="escriba su correo" v-model="correo" required>
                        <input type="password" class="contraseña" placeholder="escriba su contraseña" v-model="contraseña" required>
                        <input type="button" @click="registro" class="subcribirse" id="registrarse" value="registrarse">
                  </form>
            </section>
</template>