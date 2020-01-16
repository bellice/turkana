<template>
  <nav>
    <div class="nav-home nav-item">
      <router-link class= "nav-button" :to="{name: 'a'}" tag="button"><span>Accueil</span></router-link>
    </div>

    <div class="nav-map nav-item">
      <router-link class= "nav-button" :to="{name: 'b'}" tag="button"><span>Carte</span></router-link>
    </div>

    <div class="nav-legend nav-item">
      <router-link class= "nav-button" :to="{name: 'c'}" tag="button"><span>Légende</span></router-link>
    </div>
  </nav>
</template>
