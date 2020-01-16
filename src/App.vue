<template>
  <div id="app">
    <div class="l-container">
      <Section />
      <Nav />
    </div>
  </div>
</template>

<script>
import Section from "./components/Section.vue";
import Nav from "./components/Nav.vue";

export default {
  name: "app",
  components: {
    Section,
    Nav
  }
};
</script>

<style lang="scss">
@import "./styles/global.scss";
</style>
