<script setup>
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";
import router from '../router';

defineProps(['producto','lista_productos'])

function eliminarProducto(producto,lista_productos){
      lista_productos.splice(lista_productos.indexOf(producto),1)
      deleteDoc(doc(db, "notas", producto.id));
}

function editarProducto(id){
      router.push(`/editar-producto/${id}`)
}
</script>

<template>
      <div class="producto-carrito">
            <input type="hidden" class="id-producto-carrito" :value="producto.id">
            <div class="contenedor-imagen-producto-carrito">
                  <img class="imagen-producto-carrito" :src="producto.imagen" :alt="producto.nombre">
            </div>
            <div class="contenedor-informacion-producto-carrito">
                  <h1 class="nombre-producto-carrito titulo">{{producto.nombre}} </h1>
                  <div class="contenedor-imagen-eliminar">
                        <div class="hover" @click="eliminarProducto(producto,lista_productos)">
                              <img class="imagen-eliminar"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Red_X.svg/1024px-Red_X.svg.png"
                                    alt="eliminar producto">
                        </div>
                        <div class="hover" @click="editarProducto(producto.id)">
                              <img class="imagen-eliminar"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Red_X.svg/1024px-Red_X.svg.png"
                                    alt="eliminar producto">
                        </div>
                  </div>
            </div>
      </div>
</template>

<style>
.contenedor-imagen-eliminar{
      display: flex;
      flex-direction: column;
}
</style>