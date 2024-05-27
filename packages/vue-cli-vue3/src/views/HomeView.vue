<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <img
      alt="Vue logo"
      src="@/assets/images/51678ebd96ef6339087f0.jpg"
      width="200"
    />
    <video src="@/assets/v.f19999.mp4"></video>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {}
</script>
