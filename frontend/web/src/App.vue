<template>
  <v-app id="app">
      <router-view/>
  </v-app>
</template>

<script src="./App.js"></script>

<style lang="scss">
  #app, body {
    overflow-y: auto !important;
    height: 100%;
    overflow-x: hidden !important;
  }

  .abjad {

    &:lang(en) {
      font-weight: bold;
      font-family: 'Fira Sans', sans-serif;
    }

    &:lang(ar) {
      font-family: 'Lalezar', cursive;
    }
  }
</style>
