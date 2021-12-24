<template>
  <div id="loading">
    <LottieAnimation
      ref="anim"
      :animationData="require('@/assets/loading.json')"
      :loop="true"
      :autoPlay="true"
      :speed="1"
    />
  </div>
</template>

<script>
import LottieAnimation from "lottie-web-vue"; // import lottie-web-vue
export default {
  name: "Loading",
  components: {
    LottieAnimation,
  },
};
</script>

<style>
#loading {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 99;
}
</style>