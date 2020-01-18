<template>
<div id="l-nav-button">
          <div class="nav-home nav-item">
          <router-link class="nav-button" :to="{ name: 'a' }" tag="button"
            ><span>Accueil</span></router-link
            >
          </div>

          <div class="nav-map nav-item" ref="navMap">
            <router-link class="nav-button" :to="{ name: 'b' }" tag="button"
              >
              <button ref="myButton" class="foo" @click="onClick">foo</button>
              <span>Carte</span></router-link
            >
          </div>

          <div class="nav-legend nav-item">
            <router-link class="nav-button" :to="{ name: 'c' }" tag="button"
              ><span>Légende</span></router-link
            >
          </div>
          </div>
</template>


<script>
export default {
  name: "NavigationButton",
  mounted: function(){
    this.observer = new MutationObserver(mutations => {
      for (const m of mutations) {
        const newValue = m.target.getAttribute(m.attributeName);
        this.$nextTick(() => {
          this.onClassChange(newValue, m.oldValue);
        });
      }
    });

    this.observer.observe(this.$refs.myButton, {
      attributes: true,
      attributeOldValue : true,
      attributeFilter: ['class'],
    });
  },
  beforeDestroy: function() {
    this.observer.disconnect();
  },
  methods: {
    onClassChange(classAttrValue) {
      const classList = classAttrValue.split(' ');
      if (classList.includes('fully-in-viewport')) {
        this.$refs.myButton.click();
      }
    },
    onClick() {
      requestIdleCallback(() => {
        alert('foo clicked');
      });
    }
  }
};





/* 
this.$watch(
      function (){
        // eslint-disable-next-line no-unsed-vars
        //observer.observe(this.$refs.navMap, { attributes: true});
        // eslint-disable-next-line no-console
        console.log(this.$refs.navMap)
      }
    )  */

</script>

