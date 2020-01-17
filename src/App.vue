<template>
  <div id="app">
    <div class="l-container">
      <LayoutSection />
      <LayoutNav />
    </div>
  </div>
</template>

<script>
import LayoutSection from "./components/LayoutSection.vue";
import LayoutNav from "./components/LayoutNav.vue";

export default {
  name: "app",
  components: {
    LayoutSection,
    LayoutNav
  }
};

</script>

<style lang="scss">
@import "./styles/global.scss";
</style>
