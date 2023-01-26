<script setup>
import { useRoute } from 'vue-router';
import { productos } from '../firebase.js'

const router = useRoute();

var producto = productos.value.find((producto) => producto.id == router.params.id)

function enviarAlCArrito(){
      var carrito = JSON.parse(localStorage.carrito);
      carrito.push(producto);
      localStorage.carrito = JSON.stringify(carrito);
}
</script>


<template>
      <div class="contenedor-producto">
            <section class="producto-unico">
                  <h1 class="nombre-producto-unico titulo">{{ producto.nombre }}</h1>
                  <div class="contenendor-imagen-producto-unico">
                        <img class="imagen-producto-unico" :src="producto.imagen">
                  </div>
                  <h3 class="categoria-producto-unico">{{producto.categoria}}</h3>
                  <p class="descripcion-producto-unico">{{producto.descripcion}}</p>
                  <p class="precio-producto-unico">{{producto.precio}}</p>
                  <div class="rating-producto-unico">Votos: {{producto.votos}} Rating: {{producto.rating}}</div>
                  <div class="caracteristicas-producto-unico">
                        <div class="contenendor-cantidad-producto-unico">
                              <span>Cantidad: </span>
                              <select class="cantidad-producto-unico" name="cantidad">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                              </select>
                        </div>
                        <div class="contenendor-talla-producto-unico">
                              <span>Talla: </span>
                              <select class="talla-producto-unico" name="talla">
                                    <option value="xs">XS</option>
                                    <option value="s">S</option>
                                    <option value="m">M</option>
                                    <option value="l">L</option>
                                    <option value="xl">XL</option>
                              </select>
                        </div>
                  </div>
            </section>
            <!-- v-if si Auth esta logueado -->
            <button class="comprar" @click="enviarAlCArrito">Enviar al carrito</button>
            <!-- v-else <p>Necesitas iniciar sesion para añadir al carrito</p> -->
      </div>
</template>