<template>
  <div class="stickers">
    <router-view/>
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.row {
  display: flex;
  flex-wrap: wrap;
  margin: -8px;
}
.col {
  padding: 8px;
}
.stickers {
  width: 100%;
  max-width: 1312px;
  margin: 0 auto;
}
</style>