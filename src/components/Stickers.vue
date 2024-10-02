<template>
  <div class="stickers">
    <div class="row">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stickers"
}
</script>

<style scoped lang="scss">
.stickers {
  margin-top: 24px;
}
</style>