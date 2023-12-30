<template lang="">
  <CategoryBar />
  <div class="page__wrapper">
    <div class="page">
      <div class="product-detail__content">
        <div class="product-detail__section">
          <div class="section-main-info">
            <ProductImageSlider :images="images" v-if="product.images"/>
            <div class="section-main-info__content">
              <div class="main-info-content">
                <div class="main-info-content__info">
                  <h4 class="main-info-content__title">{{ product.brand }}</h4>
                  <h4 class="main-info-content__title">{{ product.title }}</h4>
                  <p class="main-info-content__vendor-code">
                    Арт. {{ product.vendorCode }}
                  </p>
                </div>
                <h2 class="main-info-content__price">{{ product.price }}</h2>
                <div class="main-info-content__characteristics">
                  <div class="main-info-characteristics">
                    <div class="main-info-characteristics__characteristic">
                      <div class="main-info-category">
                        <p class="main-info-category__title">Категория:</p>
                        <p class="main-info-category__name">
                          {{ category }}
                        </p>
                      </div>
                    </div>
                    <div class="main-info-characteristics__characteristic">
                      <div class="main-info-category">
                        <p class="main-info-category__title">Цвет:</p>
                        <p class="main-info-category__name">
                          {{ color }}
                        </p>
                      </div>
                    </div>
                    <div class="main-info-characteristics__sizing-type">
                      <div class="main-info-sizing-type">
                        <p class="main-info-sizing-type__name">Размеры:</p>
                        <div class="main-info-sizing-type__list">
                          <div class="sizing-type-list">
                            <div
                              class="sizing-type-list__item"
                              v-for="type in product.dimensions"
                              :key="type.id"
                            >
                              <p
                                class="sizing-type-list__type"
                                @click="setSelectedDimension(type)"
                                :style="[
                                  isSelectedDimension(type)
                                    ? { color: 'blue', transform: 'scale(1.1)' }
                                    : {},
                                ]"
                              >
                                {{ type.title }}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <SizesList
                  :selectedDimension="selectedDimension"
                />
                <div class="main-info-content__cart-button">
                  <div class="cart-button__wrapper">
                    <button class="cart-button">
                      <h4 class="cart-button__value">Добавить в корзину</h4>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="product-detail__section">
          <div class="section-description">
            <h3 class="section-description__title">ОПИСАНИЕ</h3>
            <div class="section-description__content">
              <p class="section-description__text">{{ product.description }}</p>
            </div>
          </div>
        </div>
        <div class="product-detail__section">
          <div class="section-characteristics">
            <h3 class="section-characteristics__title">ХАРАКТЕРИСТИКИ</h3>
            <div class="section-characteristics__content">
              <div class="section-characteristics__characteristics-list">
                <div class="characteristics-list" v-if="product.characteristics">
                  <div
                    class="characteristics-list__item"
                    v-for="characteristic in product.characteristics"
                    :key="characteristic.id"
                  >
                    <div class="characteristic">
                      <h4 class="characteristic__title">
                        {{ characteristic.title }}
                      </h4>
                      <div class="characteristic__content">
                        <div class="sub-characteristics-list" v-if="characteristic.subCharacteristic">
                          <div
                            class="sub-characteristics-list__item"
                            v-for="subCharacteristic in characteristic.subCharacteristic"
                            :key="subCharacteristic.id"
                          >
                            <div class="sub-characteristic">
                              <p class="sub-characteristic__title">
                                {{ subCharacteristic.title }}
                              </p>
                              <p class="sub-characteristic__description">
                                {{ subCharacteristic.description }}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import SizesList from '@/components/UI/SizesList.vue'
import ProductImageSlider from '@/components/UI/ProductImageSlider.vue'
import { mapMutations, mapState } from 'vuex'
export default {
  components: { SizesList, ProductImageSlider },
  data() {
    return {
      product: {},
      id: this.$route.params.id,
      category: '',
      mainImage: '',
      images: [],
      color: ''
    }
  },
  created() {
    this.getProduct()
  },
  methods: {
    ...mapMutations({
      setSelectedDimension: 'sizes/setSelectedDimension',
      setDimensions: 'sizes/setDimensions',
      setSelectedSize: 'sizes/setSelectedSize'
    }),
    test() {
      console.log('test')
    },
    async getProduct() {
      try {
        const response = await axios.get(
          `${this.$store.state.apiURL}/product/${this.id}`
        )
        this.product = response.data
      } catch (error) {
        console.log(error)
      }
    },
    setImages() {
      this.images = this.product.images
    },
    setCategory() {
      this.category = this.product.category.title
    },
    setColor() {
      this.color = this.product.color
    },
    isSelectedDimension(dimension) {
      return this.selectedDimension === dimension
    },
  },
  computed: {
    ...mapState({
      dimensions: state => state.sizes.dimensions,
      selectedDimension: state => state.sizes.selectedDimension,
    }),
  },
  watch: {
    product() {
      this.setCategory()
      this.setDimensions(this.product.dimensions)
      this.setSelectedDimension(this.dimensions[0])
      this.setImages()
      this.setColor()
    },
    selectedDimension(){
      this.setSelectedSize(this.selectedDimension.subDimensions[0])
    }
  },
}
</script>
<style lang=""></style>
