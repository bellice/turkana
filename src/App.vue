<template>
  <div id="app">

    <div class="l-container">
      <section>
      <div class="l-section-content">
        <div class="l-content">
            <router-view ></router-view>
        </div>
      </div>
      </section>

      <nav>
        <NavigationButton/>

        <div id="l-nav-content">

          <div class="l-content">
           <router-view ></router-view>
         </div>

        </div>
      </nav>
    </div>

  </div>
</template>

<script>

import NavigationButton from "./components/NavigationButton.vue"

export default {
  name: "app",
  components: {
    NavigationButton
  }
};

</script>

<style lang="scss">
@import "./styles/global.scss";
</style>
