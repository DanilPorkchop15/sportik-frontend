<template lang="">
  <CategoryBar />
  <div class="page__wrapper">
    <div class="page">
      <div class="category-page__content">
        <ProductList :category="category" />
      </div>
    </div>
  </div>
</template>
<script>
import ProductList from '@/components/UI/ProductList.vue'
export default {
  components: {
    ProductList,
  },
  data() {
    return {
      category: this.$route.params.category,
    }
  },
  watch: {
    $route() {
      this.category = this.$route.params.category
    },
  },
}
</script>
<style lang=""></style>
