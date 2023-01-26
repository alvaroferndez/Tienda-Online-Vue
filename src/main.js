//librerias
import { createApp } from 'vue';
import { VueFire, VueFireAuth } from 'vuefire';
// import { firebaseApp } from './firebase.js';
import router from './router';

//vistas
import App from './App.vue';


//css
import './assets/main.css'

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
