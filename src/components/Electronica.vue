<script setup >
import { productos } from '../firebase.js';
import productocomponente from './Producto.vue'

function filtrarProductos(productos){
      return productos.filter((producto) => 
            producto.categoria == "electronics"
      )
}

 
</script>

<template>
      <!-- contenendor -->
      <div class="contenedor-categorias">
            <section class='vistas categoria'>
                  <!-- cabecera -->
                  <section class='cabecera'>
                        <!-- titulo -->
                        <h1 class="titulo-seccion">Electronica</h1>
                        <!-- elegir orden -->
                        <span class="ordenar ascendente">Ascendente</span>
                        <span class="ordenar descendente">Descendente</span>
                  </section>
                  <!-- productos -->
                  <section class='productos'>
                        <productocomponente v-for="producto in filtrarProductos(productos)" :producto="producto"></productocomponente>
                  </section>
            </section>
      </div>
</template>
