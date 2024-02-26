<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/Header.vue";
</script>

<template>
  <div id="app">
    <Header id="header" class="absolut z-10" />
    <div
      id="hero"
      class="bg-cover bg-center h-550 md:h-800 relative before:block before:h-550 md:before:h-800 before:bg-gradient-to-t from-black before:opacity-50"
      style="background-image: url(/src/assets/beer-photo-02.jpg)"
    >
      <div class="absolute bottom-44 right-0 left-0">
        <div class="flex justify-center gap-6 pb-4">
          <font-awesome-icon
            class="text-7xl text-yellow-400 shadow-lg"
            icon="fa-brands fa-js"
          />

          <font-awesome-icon
            class="text-7xl text-white shadow-lg"
            icon="fa-brands fa-angular"
          />

          <font-awesome-icon
            class="text-7xl text-white shadow-lg"
            icon="fa-brands fa-react"
          />

          <font-awesome-icon
            class="text-7xl text-white shadow-lg"
            icon="fa-brands fa-vuejs"
          />
        </div>
        <p
          class="text-white text-xl font-bold tracking-widest text-center border-t border-yellow-300 w-96 md:w-450 mx-auto pt-3"
        >
          ENCUENTRO DE CERVEZA Y CODIGO
        </p>
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
          charla es de 10-20 minutos , posterior a eso generar un debate en
          funcion al tema si deseas realizar una charla podes -
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
        <div class="flex md:gap-8 gap-3 md:justify-center flex-col md:flex-row pt-5">
          <a href="mailto:beerjscbba@gmail.com">
            <font-awesome-icon icon="fa-solid fa-envelope" />
            beerjscbba@gmail.com
          </a>
          <a href="https://es.confcodeofconduct.com/"><font-awesome-icon icon="fa-solid fa-beer-mug-empty" /> Código de conducta</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
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
</script>
