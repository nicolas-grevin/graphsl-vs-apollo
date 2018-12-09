<template>
  <div id="app" class="app">
    <header class="app_header">header</header>
    <nav class="app_nav">
      <Nav v-bind:routes="routes" />
    </nav>
    <main class="app_main">
      <router-view/>
    </main>
    <footer class="app_footer">
      footer
    </footer>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import routes from '@/router/routes'

export default {
  name: 'App',
  components: {
    Nav
  },
  data: () => ({
    routes
  })
}
</script>

<style lang="scss">
  @import './assets/styles/reset';

  body, html {
    width: 100vw;
    height: 100vh;
  }

  .app {
    display: grid;
    grid-template-areas:
      'header header'
      'nav main'
      'footer footer';
    grid-template-columns: 15vw 1fr;
    grid-template-rows: 10vh calc(100vh - 15vh) 5vh;

    &_header {
      grid-area: header;
    }

    &_nav {
      grid-area: nav;
    }

    &_main {
      grid-area: main;
      padding: 2vw;
    }

    &_footer {
      grid-area: footer;
    }
  }
</style>
