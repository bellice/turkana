<template>
  <div id="app">

    <div class="l-container">
      <section>

    <div v-if="isDisplayed">
        <router-view ></router-view>
    </div>
      </section>

      <nav>
        <div id="l-nav-button">
          <div class="nav-home nav-item">
          <router-link class="nav-button" :to="{ name: 'a' }" tag="button"
            ><span>Accueil</span></router-link
            >
          </div>

          <div class="nav-map nav-item" ref="navmap">
            <router-link class="nav-button" :to="{ name: 'b' }" tag="button"
              ><span>Carte</span></router-link
            >
          </div>

          <div class="nav-legend nav-item">
            <router-link class="nav-button" :to="{ name: 'c' }" tag="button"
              ><span>Légende</span></router-link
            >
          </div>
        </div>
        <div id="l-nav-content">
          <div>
        <router-view ></router-view>
    </div>

        </div>
      </nav>
    </div>

  </div>
</template>

<script>


export default {
  name: "app",
  components: {

  },
  data (){
    return{
      isDisplayed: true
    }
  },
  created(){
    window.addEventListener("resize", this.myEvent)
  },
  destroyed(){
    window.addEventListener("resize", this.myEvent)
  },
  methods:{
    myEvent(){
      if(this.$refs.navmap.clientWidth == 0){
        // eslint-disable-next-line no-console
        this.isDisplayed = false
      } else{
        // eslint-disable-next-line no-console
        this.isDisplayed = true
      }
    }
  },
  mounted: function(){
    this.$watch(
      function (){
        // eslint-disable-next-line no-console
        console.log(this.$refs.navmap.clientWidth)
        // eslint-disable-next-line no-console
       console.log(this.isDisplayed)
      }
    )
   
  }
};

</script>

<style lang="scss">
@import "./styles/global.scss";
</style>
