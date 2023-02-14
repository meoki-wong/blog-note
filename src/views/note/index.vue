<template>
  <div class="note-container">
    <NavContent @innerNote="innerNote"/>
    <InnerContent :article="article"/>
  </div>
</template>

<script>
export default {
  components: {
    NavContent: () => import('./components/NavContent.vue'),
    InnerContent: () => import('./components/InnerContent.vue')
  },
  data(){
    return {
      article: ''
    }
  },
  methods: {
    innerNote(val){
      this.article = val
    }
  },
}
</script>

<style lang="less" scoped>
.note-container{
  display: flex;
}

</style>