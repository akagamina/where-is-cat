<template>
  <div class="wrong-container">
    <h3>Correct answer!! Well Done</h3>
    <button @click="newGame()">New Game</button>
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
  background: rgb(39, 194, 39);
  button {
    padding: 15px;
    background: wheat;
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