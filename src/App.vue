<template>
  <v-app>
    <v-main>
      <router-view class="gradBackground fullH" />
    </v-main>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  data: () => ({
    //
  }),

};
</script>

<style>
.gradBackground{
  background-color: #4158D0;
  background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
}
.fullH{
  height: 100%;
}
</style>
