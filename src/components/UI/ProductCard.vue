<template>
  <router-link :to="`/product/${product.id}`" replace class="product-card__wrapper">
    <div class="product-card">
      <div class="product-card__image">
        <img :src="imageSRC" alt="Товар" />
      </div>
      <div class="product-card__content">
        <div class="product-card__text">
          <h4 class="product-card__price">{{ product.price }}</h4>
          <p class="product-card__description">
            {{ product.title }}
          </p>
        </div>
        <div class="product-card__hot" v-if="isHot">
          <div class="hot">
            <p class="hot__text" :class="{ isHot: isHot }">Хит</p>
          </div>
        </div>
        <router-link :to="`/product/${product.id}`" replace class="product-card__btn btn">
          <p class="product-card-btn__text">В КОРЗИНУ</p>
        </router-link>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product:{
      type: Object,
      required: true,
    },
    isHot: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      productImages: [],
      imageSRC: ''
    }
  },
  created(){
    this.setProductImages()
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.title)
    },
    setImageSRC(){
      this.imageSRC = this.productImages[0].title
    },
    setProductImages(){
      this.productImages = this.product.images
    }
  },
  watch:{
    product(){
      this.setProductImages
    },
    productImages(){
      if (this.productImages[0]) {
        this.setImageSRC()
      }
    }
  }
}
</script>
<style lang="scss">

</style>
