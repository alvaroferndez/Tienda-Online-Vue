<script setup>
defineProps(['producto','carrito','carrito_usuario'])

function eliminarProducto(producto,carrito_usuario,carrito){
      carrito_usuario.productos.splice(carrito_usuario.productos.indexOf(producto),1);
      carrito.splice(carrito.indexOf(producto),1)
      localStorage.carrito = JSON.stringify(carrito)
}
</script>

<template>
      <div class="producto-carrito">
            <!-- <input type="hidden" class="id-producto-carrito" :value="producto.talla"> -->
            <input type="hidden" class="id-producto-carrito" :value="producto.id">
            <div class="contenedor-imagen-producto-carrito">
                  <img class="imagen-producto-carrito" :src="producto.imagen" :alt="producto.nombre">
            </div>
            <div class="contenedor-informacion-producto-carrito">
                  <h1 class="nombre-producto-carrito titulo">{{producto.nombre}} ({{producto.talla}})</h1>
                  <div class="contenedor-imagen-eliminar hover" @click="eliminarProducto(producto,carrito_usuario,carrito)">
                        <img class="imagen-eliminar"
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Red_X.svg/1024px-Red_X.svg.png"
                              alt="eliminar producto">
                  </div>
                  <span class="cantidad-producto-carrito-menos">-</span><span
                        class="cantidad-producto-carrito-numero">{{producto.cantidad}}</span><span
                        class="cantidad-producto-carrito-mas">+</span>
                  <span class="precio-producto-carrito">{{producto.precio}} €</span>
            </div>
      </div>
</template>