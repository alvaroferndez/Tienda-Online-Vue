<script setup>
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { ref } from "vue";
import { getStorage, ref as ref2, uploadBytes, getDownloadURL } from "firebase/storage";

var nombre = "";
var descripcion = "";
var precio = "";
var votos = "";
var imagen = ref("");
var categoria = "";
var file = ref("")

const storage = getStorage()

function agregarProducto(){
      const docRef = addDoc(collection(db, "notas"), {
            nombre: nombre,
            descripcion: descripcion,
            precio: precio,
            votos: votos,
            categoria: categoria,
            imagen: imagen.value
      });
}

function cargarImagen(){
      const storgeRef = ref2(storage, file.value.files[0].name);
      uploadBytes(storgeRef, file.value.files[0]).then(() => {
            getDownloadURL(storgeRef).then((url) => {
                  imagen.value = url;
                  console.log(imagen.value)
                  agregarProducto()
            })
      })
}
</script>

<template>
      <div class="contenedor-agregar">
            <form action="">
                  <div>
                        <label for="nombre">Nombre: </label>
                        <input class="input-agregar" type="text" id="nombre" name="nombre" placeholder="nombre" v-model="nombre">
                  </div>
                  <div>
                        <label for="descripcion">descripcion: </label>
                        <input class="input-agregar" type="text" id="descripcion" name="descripcion" placeholder="descripcion" v-model="descripcion">
                  </div>
                  <div>
                        <label for="precio">precio: </label>
                        <input class="input-agregar" type="text" id="precio" name="precio" placeholder="precio" v-model="precio">
                  </div>
                  <div>
                        <label for="votos">votos: </label>
                        <input class="input-agregar" type="text" id="votos" name="votos" placeholder="votos" v-model="votos">
                  </div>
                  <div>
                        <label for="imagen">imagen: </label>
                        <input class="input-agregar" type="file" ref="file" id="imagen" name="imagen" placeholder="imagen">
                  </div>
                  <select name="categoria" id="categoria" v-model="categoria">
                        <option value="men's clothing">men's clothing</option>
                        <option value="women's clothing">women's clothing</option>
                        <option value="electronics">electronics</option>
                        <option value="jewelery">jewelery</option>
                  </select>
                  <button type="button" @click="cargarImagen">Enviar</button>
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