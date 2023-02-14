<template>
  <div class="note-container">
    <NavContent />
    <InnerContent />
  </div>
</template>

<script>
export default {
  components: {
    NavContent: () => import('./components/NavContent.vue'),
    InnerContent: () => import('./components/InnerContent.vue')
  }
}
</script>

<style lang="less" scoped>
.note-container{
  display: flex;
}

</style>