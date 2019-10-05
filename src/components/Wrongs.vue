<template>
  <div class="wrong-container">
    <h3>Unfortunately wrong answer</h3>
    <button @click="newGame()">Try Again</button>
  </div>
</template>

<script>
export default {
  methods: {
    newGame() {
      this.$emit("changeComp", "game-cards");
    }
  }
};
</script>

<style lang="scss" scoped>
.wrong-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background: rgb(240, 48, 48);
  h3 {
    color: white;
  }
  button {
    padding: 15px;
    background: rgb(69, 203, 69);
    border-radius: 4px;
    cursor: pointer;
    &:active {
      box-shadow: unset;
    }
    &:focus {
      outline: none;
    }
    &:hover {
      background: white;
      color: black;
    }
  }
}
</style>