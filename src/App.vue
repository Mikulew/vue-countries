<template>
  <div id="app">
    <AppHeader />
    <AppMain />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './layout/AppHeader.vue';
import AppMain from './layout/AppMain.vue';
import AppFooter from './layout/AppFooter.vue';

export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
};
</script>

<style>
*,
*::before,
*::after {
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
