//librerias
import { createApp, ref } from 'vue';
import { VueFire, VueFireAuth } from 'vuefire';


// import { firebaseApp } from './firebase.js';
import router from './router';
import { auth } from './firebase';
import { onAuthStateChanged } from "firebase/auth";


//vistas
import App from './App.vue';


//css
import './assets/main.css'

// usuario activo
export var usuario_activo=ref(false);
export var id_usuario_activo=ref(false);

onAuthStateChanged(auth, (user) => {
      if (user) {
        usuario_activo.value = true
        if(!localStorage.carrito){
          localStorage.carrito = JSON.stringify([])
        }
        id_usuario_activo.value = user.uid;
      } else {
        usuario_activo.value = false;
        id_usuario_activo.value = false;
      }
    });
    

const miapp= createApp(App)

// miapp.use(VueFire, {
//       // imported above but could also just be created here
//       firebaseApp,
//       modules: [
//         // we will see other modules later on
//         VueFireAuth(),
//       ],
//     })

miapp.use(router).mount('#contenedor-body')
