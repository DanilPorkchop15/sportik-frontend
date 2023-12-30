<template lang="">
  <div class="product-list__wrapper">
    <div class="product-list">
      <ProductCard
        :isHot="isHot"
        v-for="product in categoryFilteredProduct"
        :key="product.id"
        :product="product"
      />
    </div>
    <div class="product-list__empty" v-if="!categoryFilteredProduct.length">
      <h4 class="empty__text">Продуктов данной категории нет.</h4>
    </div>
  </div>
</template>
<script>
import ProductCard from '@/components/UI/ProductCard'
import { mapActions, mapState } from 'vuex'
export default {
  components: { ProductCard },
  props: {
    isHot: {
      type: Boolean,
      default: false,
    },
    limit: {
      type: Number,
    },
    category: {
      type: String,
    },
  },
  mounted(){
    this.getProducts()
  },
  methods: {
    ...mapActions({
      getProducts: 'products/getProducts',
    }),
    slicedProducts(){
      return this.products.slice(0, this.limit)
    }
  },
  computed: {
    ...mapState({
      products: state => state.products.products,
      image: state => state.products.image,
    }),
    categoryFilteredProduct() {
      let temp = []
      if (this.category) {
        this.products.forEach(product => {
          if (product.category.code === this.category) {
            temp.push(product)
          }
        })
        console.log(temp);
      return temp
      }
      else{
        return this.slicedProducts()
      }
    },
  },
}
</script>
<style lang=""></style>
