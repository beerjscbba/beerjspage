<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Header from "./components/Header.vue";

import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";

// Then register the languages you need
hljs.registerLanguage("javascript", javascript);

const code = `function enfriar (cerveza, amigos, cb) {
  if (amigos) {
    cerveza.fria = true
    cb(false, cerveza)
  } else {
    cb(true, cerveza)
  }
}
function meet ({ cerveza, amigos }) {
  return meet = new Promise((resolve, reject) => {
    enfriar(cerveza, amigos, function(err, cerveza){
      if (!err) {
        resolve({cerveza, amigos})
      } else {
        reject({cerveza, amigos})
      }
    })
  })
}
const requisitos = {
  amigos: true,
  cerveza: {
    fria: false
  }
}
meet(requisitos)
  .then(({ cerveza, amigos }) => {
    console.log('cerveza fria:', cerveza.fria)
    console.log('amigos:', amigos)
    console.log('la cerveza esta fria, los amigos la consiguieron fria y estan listos para disfrutarla')
  })
  .catch(({ cerveza, amigos }) => {
    console.log('cerveza fria:', cerveza.fria)
    console.log('amigos:', amigos)
    console.log('los amigos son necesarios para conseguir unas buenas cervezas frias')
  })`;

const isSticky = ref(false);

onMounted(() => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 150) {
      isSticky.value = true;
    } else {
      isSticky.value = false;
    }
  });
});
</script>

<template>
  <div id="app">
    <Header
      id="header"
      class="z-20 top-0"
      :class="{
        sticky: isSticky,
        'bg-black': isSticky,
        absolute: !isSticky,
        'bg-transparent': !isSticky,
      }"
    />
    <div
      id="hero"
      class="bg-cover bg-center h-550 md:h-800 relative before:block before:h-550 md:before:h-800 before:bg-gradient-to-t from-black before:opacity-100"
      style="background-image: url(/src/assets/beer-photo-03.jpg)"
    >
      <div class="absolute bottom-20 right-0 left-0">
        <div class="flex flex-col items-center pb-8">
          <img class="w-16 md:w-24" src="/src/assets/beerjs.svg" alt="beerjs" />
          <span class="text-4xl md:text-8xl font-bold text-white">
            BEER <span class="text-yellow-500">JS</span>
          </span>
          <span class="text-white font-semibold md:text-4xl tracking-widest"
            >COCHABAMBA</span
          >
        </div>
        <p
          class="text-white text-xl font-bold tracking-widest text-center border-t border-yellow-300 w-80 md:w-450 mx-auto pt-3"
        >
          ENCUENTRO DE CERVEZA Y CODIGO
        </p>
        <div class="flex justify-center gap-3 items-center pt-4">
          <svg class="logo" viewBox="0 0 448 512 " width="32" height="32"><path fill="#EAB308" d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/></svg>
          <svg
            class="logo"
            viewBox="0 0 128 128"
            width="32"
            height="32"
            data-v-dbff5791=""
          >
            <path
              fill="#42b883"
              d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"
              data-v-dbff5791=""
            ></path>
            <path
              fill="#35495e"
              d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"
              data-v-dbff5791=""
            ></path>
          </svg>

          <svg _ngcontent-ng-c778437052="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 223 236" width="32"><g _ngcontent-ng-c778437052="" clip-path="url(#a)"><path _ngcontent-ng-c778437052="" fill="url(#b)" d="m222.077 39.192-8.019 125.923L137.387 0l84.69 39.192Zm-53.105 162.825-57.933 33.056-57.934-33.056 11.783-28.556h92.301l11.783 28.556ZM111.039 62.675l30.357 73.803H80.681l30.358-73.803ZM7.937 165.115 0 39.192 84.69 0 7.937 165.115Z"></path><path _ngcontent-ng-c778437052="" fill="url(#c)" d="m222.077 39.192-8.019 125.923L137.387 0l84.69 39.192Zm-53.105 162.825-57.933 33.056-57.934-33.056 11.783-28.556h92.301l11.783 28.556ZM111.039 62.675l30.357 73.803H80.681l30.358-73.803ZM7.937 165.115 0 39.192 84.69 0 7.937 165.115Z"></path></g><defs _ngcontent-ng-c778437052=""><linearGradient _ngcontent-ng-c778437052="" id="b" x1="49.009" x2="225.829" y1="213.75" y2="129.722" gradientUnits="userSpaceOnUse"><stop _ngcontent-ng-c778437052="" stop-color="#E40035"></stop><stop _ngcontent-ng-c778437052="" offset=".24" stop-color="#F60A48"></stop><stop _ngcontent-ng-c778437052="" offset=".352" stop-color="#F20755"></stop><stop _ngcontent-ng-c778437052="" offset=".494" stop-color="#DC087D"></stop><stop _ngcontent-ng-c778437052="" offset=".745" stop-color="#9717E7"></stop><stop _ngcontent-ng-c778437052="" offset="1" stop-color="#6C00F5"></stop></linearGradient><linearGradient _ngcontent-ng-c778437052="" id="c" x1="41.025" x2="156.741" y1="28.344" y2="160.344" gradientUnits="userSpaceOnUse"><stop _ngcontent-ng-c778437052="" stop-color="#FF31D9"></stop><stop _ngcontent-ng-c778437052="" offset="1" stop-color="#FF5BE1" stop-opacity="0"></stop></linearGradient><clipPath _ngcontent-ng-c778437052="" id="a"><path _ngcontent-ng-c778437052="" fill="#fff" d="M0 0h223v236H0z"></path></clipPath></defs></svg>
        
          <svg width="32" viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-sm me-0 w-10 h-10 text-link dark:text-link-dark flex origin-center transition-all ease-in-out"><circle cx="0" cy="0" r="2" fill="#149eca"></circle><g stroke="#149eca" stroke-width="1" fill="none"><ellipse rx="10" ry="4.5"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse></g></svg>
        </div>
      </div>
    </div>
    <div id="encuentro" class="bg-yellow-500">
      <div class="container mx-auto px-4 py-10">
        <span class="text-5xl text-center block pb-2"> 🎉</span>
        <h2 class="text-4xl font-extrabold text-center uppercase">Encuentro</h2>

        <ul class="text-center font-light pt-8">
          <li>
            📆 <span class="font-bold">Fecha:</span> El ultimo viernes de cada
            mes
          </li>
          <li>
            🏡 <span class="font-bold">Lugar:</span> Cowork caffe ( o el que se
            pueda conseguir)
          </li>
          <li>
            📑 <span class="font-bold">Tema:</span> Se definira cada mes
            (atentos a las redes sociales)
          </li>
        </ul>

        <p
          class="w-100 md:w-600 mx-auto text-center pt-11 md:text-xl font-mono"
        >
          Pasar un buen rato, divertirse con javascript y relajarse con una
          cerveza fria o algun bocado. esa el la idea.
        </p>
      </div>
    </div>
    <div id="charlar" class="bg-black">
      <div class="container mx-auto px-4 py-10">
        <span class="text-5xl text-center block pb-2">👨‍💻</span>
        <h2 class="text-4xl text-white font-extrabold text-center uppercase">
          Charlar
        </h2>

        <p
          class="w-100 md:w-600 mx-auto text-white text-center pt-11 font-mono"
        >
          Charlas cortas sobre lo que mas te guste o quieras compartir de
          javascript y su entorno(frameworks, librerias,etc) El tiempo por
          charla es de 10-20 minutos. Posterior a eso generar un debate en
          funcion al tema si deseas realizar una charla puedes -
          <a
            class="text-cyan-300 underline"
            href="https://github.com/beerjs/cochabamba"
            >abrir un issue en el repo</a
          >
          y entraremos en contacto contigo para futuras ediciones.
        </p>
      </div>
    </div>

    <div id="beber" class="bg-yellow-500">
      <div class="container mx-auto px-4 py-10">
        <span class="text-5xl text-center block pb-2"> 🍻</span>
        <h2 class="text-4xl font-extrabold text-center uppercase pb-10">
          Beber
        </h2>
        <highlightjs
          class="text-xs rounded-lg overflow-hidden w-100 md:w-600 lg:w-800 mx-auto"
          language="javascript"
          :code="code"
        />
      </div>
    </div>

    <div id="organiza" class="bg-black">
      <div class="container mx-auto px-4 py-10">
        <span class="text-5xl text-center block pb-2">🤖</span>
        <h2 class="text-4xl text-white font-extrabold text-center uppercase">
          Organiza
        </h2>

        <p
          class="w-100 md:w-600 mx-auto text-white text-center pt-11 font-mono"
        >
          <a
            class="text-cyan-300 underline"
            href="https://www.instagram.com/beerjscbba"
            >beerjscbba</a
          >
          Comunidad que promueve espacios de convivencia para desarrolladores
          amantes de javascript Meet mes a mes , si gustas acompañanos con una
          cerveza o lo que gustes. Salud 🍻
        </p>
      </div>
    </div>
    <footer>
      <div class="bg-black text-white text-center py-4">
        <div class="flex gap-2 justify-center items-center">
          <img
            class="w-6 md:w-8 inline"
            src="/src/assets/beerjs.svg"
            alt="beerjs"
          />
          <span class="text-3xl md:text-4xl font-bold text-white">
            BEER <span class="text-yellow-500">JS</span>
          </span>
        </div>
        <div
          class="flex md:gap-8 gap-3 md:justify-center flex-col md:flex-row pt-5"
        >
          <a href="mailto:beerjscbba@gmail.com">
            <font-awesome-icon icon="fa-solid fa-envelope" />
            beerjscbba@gmail.com
          </a>
          <a href="https://es.confcodeofconduct.com/"
            ><font-awesome-icon icon="fa-solid fa-beer-mug-empty" /> Código de
            conducta</a
          >

          <a href="https://t.me/+9ejBXZQ2PQg4YzYx"
            ><font-awesome-icon icon="fa-brands fa-telegram" /> Únete en
            telegram
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>
