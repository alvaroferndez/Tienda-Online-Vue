<script setup>
import { productos } from '../firebase.js';
import productoadministracion from './ProductoAdministracion.vue'


</script>

<template>
      <div class="contenedor-administracion">
            <div class="administracion-contenido">
                  <div class="contenedor-agregar-producto">
                        <router-link to="/agregar-producto" value="agregar-producto" id="agregar-producto">Agregar Producto</router-link>
                  </div>
                  <div class="contenedor-productos-administracion">
                        <productoadministracion v-for="producto of productos" :producto="producto" :lista_productos="productos"></productoadministracion>
                  </div>
            </div>
      </div>
</template>


<style>
.contenedor-administracion{
      display: flex;
      align-items: center;
      justify-content: center;
}
.administracion-contenido{
      width: 70%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
}

.contenedor-agregar-producto{
      padding-bottom: 10%;
      padding-top: 5%;
}

#agregar-producto{
      border: 1px solid black;
      border-top: 1px solid black;
      padding:5px;
}
</style>