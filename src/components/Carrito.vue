<script setup>
import { ref } from 'vue';
import productocarrito from './ProductoCarrito.vue'
import {usuario_activo} from '../main'
import {id_usuario_activo} from '../main'

var carrito = ref(false);
var carrito_usuario = ref(false);

if(usuario_activo){
      carrito.value = JSON.parse(localStorage.carrito);
      carrito_usuario.value = {
            productos: [],
            total : 2.99,
            gatos_envio : 2.99,
            numero_productos : 0
      };
      for (let element of carrito.value){
            console.log(element, id_usuario_activo.value)
            if (element.id == id_usuario_activo.value){
                  carrito_usuario.value.productos.push(element)
                  calcularTotal();
                  calcularNumeroProductos();
            }
      }
}

function calcularNumeroProductos(){
      carrito_usuario.value.numero_productos = carrito_usuario.value.productos.length
}

function calcularTotal(){
      for( let element of carrito_usuario.value.productos){
            carrito_usuario.value.total += element.precio * element.cantidad
      }
      carrito_usuario.value.total +=  carrito_usuario.value.gatos_envio;
}

function borrarCarrito(){
      carrito_usuario.value.productos = [];
      var copia = carrito.value;
      for(let i=0, j=0; i<carrito.value.length; i++){
            if(carrito.value[i].id == id_usuario_activo){
                  copia.splice(j,1);
            }else{
                  j++
            }
      }
      carrito.value = copia;
      // for( let element of carrito.value){
      //       if(element.id == id_usuario_activo.value){
      //             carrito.value.splice(carrito.value.indexOf(element),1)
      //       }
      // }
      carrito_usuario.total = 2.99;
      carrito_usuario.numero_productos = 0;
      localStorage.carrito = JSON.stringify(carrito.value)
}

</script>

<template>
      <div v-if="usuario_activo">
            <div v-if="carrito_usuario.productos == []" class='carrito-nulo'>
                  <h1>No hay productos en el carrito</h1>
            </div>
            <section v-if="carrito_usuario.productos != []" class="contenedor-carrito">
                  <div class="carrito-titulo">
                        <h1>Su Carrito</h1>
                  </div>
                  <div class="carrito-contenido">
                        <section class="contenedor-productos-carrito">
                              <productocarrito v-for="producto of carrito_usuario.productos" :producto="producto" :carrito_usuario="carrito_usuario" :carrito="carrito"></productocarrito>
                        </section>
                        <section class="contenedor-informacion-carrito">
                              <div class="precio-carrito">
                                    <div class="suma-carrito">
                                          <section class="gastos-carrito-contenedor">
                                                <span class="gastos">Gastos</span>
                                                <span class="euro">{{ carrito_usuario.gatos_envio }}</span>
                                          </section>
                                    </div>
                                    <div class="total-carrito-contenedor">
                                          <span class="total">Total</span>
                                          <span class="euro">{{ carrito_usuario.total }}</span>
                                    </div>
                              </div>
                              <div class="opciones-carrito">
                                    <button class="finalizar-compra">Finalizar Pedido</button>
                                    <button class="borrar-carrito" @click="borrarCarrito">Borrar carrito</button>
                              </div>
                        </section>
                  </div>
            </section>
      </div>
      <div v-else>
            <h1>Necesitas inicar sesion para tener un carrito</h1>
      </div>
</template>