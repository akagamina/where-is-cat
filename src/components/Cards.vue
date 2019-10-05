<template>
  <div class="card">
    <img :src="item.img" />
  </div>
</template>

<script>
export default {
  props: ["item"]
};
</script>

<style lang="scss" scoped>
.card {
  width: 200px;
  height: 232px;
  border-radius: 4px;
  border: 1px solid #bcbaba;
  overflow: hidden;
  transition: box-shadow 0.5s;
  margin-left: 10px;
  cursor: pointer;
  &:first-child {
    margin-left: 0;
  }

  &:hover {
    box-shadow: 1px 3px 10px #666;
    transition: box-shadow 0.5s;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
</style>