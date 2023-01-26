<script setup>
/*menu hamburguesa*/
document.getElementById("circulo").addEventListener("click", () => {
      abrirMenu()
})

var abrir = true

function abrirMenu() {
      if (abrir) {
            let lienas = document.getElementsByClassName("linea");
            let secciones = document.getElementById("enlace-secciones-hamburguesa");
            let opciones = document.getElementsByClassName("opciones-usuario-hamburguesa")[0];

            for (let i = 0; i < 3; i++) {
                  lienas[0].className = "linea_abierta";
            }
            secciones.style.display = "flex";
            opciones.style.display = "flex";
            abrir = false;

      } else {
            let lienas = document.getElementsByClassName("linea_abierta");
            let secciones = document.getElementById("enlace-secciones-hamburguesa");
            let opciones = document.getElementsByClassName("opciones-usuario-hamburguesa")[0];

            for (let i = 0; i < 3; i++) {
                  lienas[0].className = "linea";
            }
            secciones.style.display = "none";
            opciones.style.display = "none";
            abrir = true;
      }

}


</script>

<template>
      <section class='vistas principal'>
            <!-- banner -->
            <section class='secciones banner'>
                  <!-- publicidad -->
                  <aside class='publicidad hover'>
                        <img src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/223-gbl-hbcamp-pr-3000x2000-3-1666272102.jpg?crop=1xw:1xh;center,top&resize=980:*'
                              alt='publicidad fila'>
                  </aside>

                  <!-- eslogan -->
                  <h1 class='eslogan'>La sencillez es belleza</h1>

                  <!-- publicidad -->
                  <aside class='publicidad hover'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFxHfKMZ190jPYD2nxUemMrje282BUJMvEyg&usqp=CAU'
                              alt='publicidad'>
                  </aside>
            </section>
            <!-- carrusel -->
            <section class='secciones carrusel'>
                  <img id='imagen-carrusel'
                        src='https://www.instyle.es/medio/2019/03/22/zara-portada_55b4b3ae_1200x630.jpg'
                        alt='imagen carrusel'>
            </section>
            <!-- sigenos -->
            <section class='secciones siguenos'>
                  <!-- galeria de imagenes -->
                  <img class='imagenes-siguenos'
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3esAlqowW_163F0QHtcc2g86xlUD2ffg0WA&usqp=CAU'
                        alt='imagenes-siguenos'>
                  <img class='imagenes-siguenos'
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0w0MMc3DQGRrvc-05oa0vQ8X6EhEtjax5Ww&usqp=CAU'
                        alt='imagenes-siguenos'>
                  <img class='imagenes-siguenos'
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCDgKv-kYJ66r__LMKHfVOtSDlfM9fVRkb8w&usqp=CAU'
                        alt='imagenes-siguenos'>

                  <!-- contenido siguenos -->
                  <div class='informacion-siguenos'>
                        <h1 class='titulo-siguenos'>Síguenos</h1>
                        <p class='contenido-siguenos'>Síguenos en todas nuestras redes sociales para estar informado de
                              la última moda</p>
                        <div class='opciones-pago-footer'>
                              <a href='https://twitter.com/' target='_blank'><i
                                          class='fa-brands fa-twitter hover'></i></a>
                              <a href='https://youtube.com/' target='_blank'><i
                                          class='fa-brands fa-youtube hover'></i></a>
                              <a href='https://facebook.com/' target='_blank'><i
                                          class='fa-brands fa-facebook hover'></i></a>
                              <a href='https://www.instagram.com/' target='_blank'><i
                                          class='fa-brands fa-instagram hover'></i></a>
                        </div>
                  </div>
            </section>
            <!-- subcripccion -->
            <section class='secciones subcripcion'>
                  <div class='contenedor-subcripcion'>
                        <h1 id='titulo-subcripcion'>Hazte socio de nuestra marca</h1>
                        <p id='contenido-subcripcion'>Ve a la ultima tendencia con nuestras novedades</p>
                        <input type='email' name='correo-subcripcion' id='correo-subcripcion'>
                        <button class='subcribirse'><span>Subcribirse</span></button>
                  </div>
            </section>
      </section>
</template>
