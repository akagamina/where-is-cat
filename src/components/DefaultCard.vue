<template>
    <div class="card">
      </div>
</template>

<style lang="scss" scoped>
     .card {
      width: 200px;
      height: 232px;
      border-radius: 4px;
      border: 1px solid #bcbaba;
      overflow: hidden;
      transition: box-shadow 0.5s;
      background: url('../assets/box-case-container-2115057.jpg');
      background-size: cover;
      object-fit: cover;
      background-repeat: no-repeat;
      background-position: center;
      cursor: pointer;

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