<template>
  <main id="app">
    <app-header></app-header>
    <router-view class="container"></router-view>
    <app-footer></app-footer>
  </main>
</template>

<script>
    import Header from './components/Header.vue';
    import Countries from './components/Countries.vue'
    import ShowCountry from './components/ShowCountry.vue'
    import Footer from './components/Footer.vue';

    export default {
        components: {
            'app-header': Header,
            'app-footer': Footer
        },

    }
</script>

<style>
  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    root: path . resolve(__dirname, '../src/assets');
    height: 100%;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  .btn {
    cursor: pointer;
  }
</style>
