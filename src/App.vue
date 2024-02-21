<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue';
</script>

<template>
  <div id="app">
    <Header class="absolut z-10" />
    <div class="bg-cover bg-center h-800 relative before:block before:h-800 before:bg-gradient-to-t from-black before:opacity-50" style="background-image: url(/src/assets/beer-photo-02.jpg);">
      <div class="absolute bottom-44 right-0 left-0">
        <div class=" flex justify-center gap-6 pb-4">
          <font-awesome-icon class="text-7xl text-yellow-400 shadow-lg" icon="fa-brands fa-js" />
          
          <font-awesome-icon class="text-7xl text-white shadow-lg" icon="fa-brands fa-angular" />
          
          <font-awesome-icon class="text-7xl text-white shadow-lg" icon="fa-brands fa-react" />

          <font-awesome-icon class="text-7xl text-white shadow-lg" icon="fa-brands fa-vuejs" />
         
        </div>
        <p class="text-white text-xl font-bold tracking-widest text-center border-t border-yellow-300 w-450 mx-auto pt-3">ENCUENTRO DE CERVEZA Y CODIGO</p>
      </div>
    </div>
    <div>
      <h2>Encuentro</h2>
    </div>
    
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
