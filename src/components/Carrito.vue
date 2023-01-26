<script setup>
import { ref } from 'vue';
import productocarrito from './ProductoCarrito.vue'

var carrito = ref(false);
if (localStorage.carrito) {
      carrito.value = JSON.parse(localStorage.carrito);
}

function borrarCarrito(){
      localStorage.carrito = JSON.stringify([])
      carrito.value = JSON.parse(localStorage.carrito);
}

</script>

<template>
      <!-- Englobar todo en un contenedor que sea un -if v-else de si hay un usuario activo -->
      <div v-if="!carrito" class='carrito-nulo'>
            <h1>No hay productos en el carrito</h1>
      </div>
      <section v-else class="contenedor-carrito">
            <div class="carrito-titulo">
                  <h1>Su Carrito</h1>
            </div>
            <div class="carrito-contenido">
                  <section class="contenedor-productos-carrito">
                        <productocarrito v-for="producto of carrito" :producto="producto" :carrito="carrito"></productocarrito>
                  </section>
                  <section class="contenedor-informacion-carrito">
                        <div class="precio-carrito">
                              <div class="suma-carrito">
                                    <section class="subtotal-carrito-contenedor">
                                          <span class="subtotal">Subtotal</span>
                                          <span class="euro">${this.usuario_activo.carrito.subtotal}€</span>
                                    </section>
                                    <section class="gastos-carrito-contenedor">
                                          <span class="gastos">Gastos</span>
                                          <span class="euro">${this.usuario_activo.carrito.gastos_envio}€</span>
                                    </section>
                              </div>
                              <div class="total-carrito-contenedor">
                                    <span class="total">Total</span>
                                    <span class="euro">${this.usuario_activo.carrito.total}€</span>
                              </div>
                        </div>
                        <div class="opciones-carrito">
                              <button class="finalizar-compra">Finalizar Pedido</button>
                              <button class="borrar-carrito" @click="borrarCarrito">Borrar carrito</button>
                        </div>
                  </section>
            </div>
      </section>
</template>