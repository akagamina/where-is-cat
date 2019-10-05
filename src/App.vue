<template>
  <div id="app">
    <transition-group name="slideContainer" mode="out-in">
      <component key="mainComp" :is="activeComp" @changeComp="activeComp = $event" />
    </transition-group>
  </div>
</template>

<script>
import Congrats from "./components/Congrats";
import Wrongs from "./components/Wrongs";
import GameCards from "./components/GameCards";

export default {
  components: {
    Congrats,
    GameCards,
    Wrongs
  },
  data() {
    return {
      activeComp: "game-cards"
    };
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.slideContainer-enter {
}
.slideContainer-enter-active {
  animation: slide-in 0.3s ease-out forwards;
}
.slideContainer-leave {
}
.slideContainer-leave-active {
  animation: slide-out 0.3s ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateX(-1000px);
    opacity: 0;
  }
  to {
    transform: translate(0px);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateX(0px);
    opacity: 1;
  }
  to {
    transform: translate(1000px);
    opacity: 0;
  }
}
</style>
