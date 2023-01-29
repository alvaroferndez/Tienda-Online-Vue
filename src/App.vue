<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { usuario_activo } from './main';
import { ref } from 'vue';
import { auth } from './firebase';
import { signOut } from 'firebase/auth'

var a = ref(usuario_activo)

function desloguear(){
      signOut(auth).then(() => {
      }).catch((error) => {

})
}

</script>

<template>
      <header>
            <!-- logo -->
            <div class="contenedor-logo">
                  <router-link to="/">
                        <img src='./imagenes/logo.png' alt='logo' class='logo'>
                  </router-link>
            </div>
            <!-- secciones -->
            <nav id='enlace-secciones'>
                  <li class='hover vistas'>
                        <router-link to="/hombre" value="hombre">Hombre</router-link>
                  </li>
                  <li class='hover vistas'>
                        <router-link to="/mujer" value="mujer">Mujer</router-link>
                  </li>
                  <li class='hover vistas'>
                        <router-link to="/joyas" value="joyas">Joyas</router-link>
                  </li>
                  <li class='hover vistas'>
                        <router-link to="/electronica" value="electronica">Electronica</router-link>
                  </li>
                  <li class='hover vistas' v-if="usuario_activo">
                        <router-link to="/administracion" value="administracion">Administracion</router-link>
                  </li>
            </nav>
            <!-- opciones usuario -->
            <div class='opciones-usuario'>
                  <router-link v-if="!usuario_activo" to="/inicio-sesion" id="inicio-sesion"><i class='fas fa-user' id='inicio-sesion'></i></router-link>
                  <i v-if="usuario_activo" @click="desloguear" class="fa-solid fa-right-from-bracket" id="inicio-sesion"></i>
                  <router-link to="/carrito" id="carrito"><i class='fa-solid fa-cart-shopping' id='carrito'></i></router-link>
            </div>
            <div class="menu-hamburguesa">
                  <div id="circulo">
                        <div class="linea"></div>
                        <div class="linea"></div>
                        <div class="linea"></div>
                  </div>
                  <!-- secciones -->
                  <nav id='enlace-secciones-hamburguesa'>
                        <li class='hover vistas'>Hombre</li>
                        <li class='hover vistas'>Mujer</li>
                        <li class='hover vistas'>Joyería</li>
                        <li class='hover vistas'>Eletrónica</li>
                  </nav>
                  <!-- opciones usuario -->
                  <div class='opciones-usuario-hamburguesa'>
                        <i class='fas fa-user' id='inicio-sesion-hamburguesa'></i>
                        <i class='fa-solid fa-cart-shopping' id='carrito-hamburguesa'></i>
                  </div>
            </div>
      </header>

      <main>
            <RouterView/>
      </main>

      <footer>
            <!-- seccion ayuda -->
            <section class='secciones-footer ayuda'>
                  <h2>Ayuda</h2>
                  <a href='' class='hover'>lorem</a>
                  <a href='' class='hover'>lorem</a>
                  <a href='' class='hover'>lorem</a>
                  <a href='' class='hover'>lorem</a>
            </section>
            <!-- seccion nosotros -->
            <section class='secciones-footer nosotros'>
                  <h2>Nosotros</h2>
                  <a href='' class='hover'>lorem</a>
                  <a href='' class='hover'>lorem</a>
                  <a href='' class='hover'>lorem</a>
                  <a href='' class='hover'>lorem</a>
            </section>
            <!-- seccion legal -->
            <section class='secciones-footer legal'>
                  <h2>Legal</h2>
                  <a href='' class='hover'>lorem</a>
                  <a href='' class='hover'>lorem</a>
                  <a href='' class='hover'>lorem</a>
                  <a href='' class='hover'>lorem</a>
            </section>
            <!-- seccion metodos de pago y redes -->
            <section class='secciones-footer pago'>
                  <h2>Metodos de pago</h2>
                  <!-- seccion metodos de pago -->
                  <div class='opciones-pago-footer'>
                        <i class='fa-brands fa-cc-visa hover'></i>
                        <i class='fa-brands fa-cc-paypal hover'></i>
                        <i class='fa-brands fa-cc-mastercard hover'></i>
                  </div>
                  <!-- seccion redes sociales -->
                  <div class='opciones-pago-footer'>
                        <a href='https://twitter.com/' target="_blank"><i class='fa-brands fa-twitter hover'></i></a>
                        <a href='https://youtube.com/' target="_blank"><i class='fa-brands fa-youtube hover'></i></a>
                        <a href='https://facebook.com/' target="_blank"><i class='fa-brands fa-facebook hover'></i></a>
                        <a href='https://www.instagram.com/' target="_blank"><i
                                    class='fa-brands fa-instagram hover'></i></a>
                  </div>
            </section>
      </footer>
</template>