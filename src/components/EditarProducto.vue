<script setup>
import { useRoute } from 'vue-router';
import { productos, db } from '../firebase.js'
import { doc, deleteDoc, collection, addDoc } from "firebase/firestore";
import { getStorage, ref as ref2, uploadBytes, getDownloadURL } from "firebase/storage";

const router = useRoute();

var producto = productos.value.find((producto) => producto.id == router.params.id)

var nombre = producto.nombre;
var descripcion = producto.descripcion;
var precio = producto.precio;
var votos = producto.votos;
var imagen = producto.imagen;
var categoria = producto.categoria;

const storage = getStorage()

function editarProducto(){
      productos.value.splice(productos.value.indexOf(producto),1)
      deleteDoc(doc(db, "notas", producto.id));
      cargarImagen()
      const docRef = addDoc(collection(db, "notas"), {
            nombre: nombre,
            descripcion: descripcion,
            precio: precio,
            votos: votos,
            categoria: categoria,
            imagen: imagen,
      });
}

function cargarImagen(e){
      var archivo = e.target.files[0];
      var storgeRef = ref2(storage, archivo.name);
      uploadBytes(storgeRef, archivo).then((storageRef) => {
            getDownloadURL(storageRef).then((url) => {
                  imagen = url;
            })
      })
}
</script>

<template>
      <div class="contenedor-agregar">
            <form action="">
                  <div>
                        <label for="nombre">Nombre: </label>
                        <input class="input-agregar" type="text" id="nombre" name="nombre" :placeholder="producto.nombre" v-model="nombre">
                  </div>
                  <div>
                        <label for="descripcion">descripcion: </label>
                        <input class="input-agregar" type="text" id="descripcion" name="descripcion" :placeholder="producto.descripcion" v-model="descripcion">
                  </div>
                  <div>
                        <label for="precio">precio: </label>
                        <input class="input-agregar" type="text" id="precio" name="precio" :placeholder="producto.precio" v-model="precio">
                  </div>
                  <div>
                        <label for="votos">votos: </label>
                        <input class="input-agregar" type="text" id="votos" name="votos" :placeholder="producto.votos" v-model="votos">
                  </div>
                  <div>
                        <label for="imagen">imagen: </label>
                        <input class="input-agregar" type="file" id="imagen" name="imagen" :placeholder="producto.imagen">
                  </div>
                  <select name="categoria" id="categoria" v-model="categoria">
                        <option value="men's clothing">men's clothing</option>
                        <option value="women's clothing">women's clothing</option>
                        <option value="electronics">electronics</option>
                        <option value="jewelery">jewelery</option>
                  </select>
                  <button type="button" @click="editarProducto">Enviar</button>
            </form>
      </div>
</template>

<style>
.contenedor-agregar{
      display: flex;
      align-items: center;
      justify-content: center;
}

form{
      width: 50%;
      display: flex;
      flex-direction:column;
      justify-content: center;
}     

form>div{
      margin-bottom: 5%;
}

.input-agregar:not(input[type="submit"]):invalid{
      border-bottom: 1px solid black;
}

.input-agregar:not(input[type="submit"]):valid{
      border-bottom: 1px solid black;
}
</style>