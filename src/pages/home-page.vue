<template>
  <Banner />
  <CategoryBar />
  <div class="page__wrapper">
    <div class="page">
      <div class="home-page__content">
        <div class="home-page__section">
          <div class="section-hot">
            <h2 class="section-hot__title">Хиты продаж</h2>
            <div class="section-hot__content">
              <ProductList :limit="5" isHot />
            </div>
          </div>
        </div>
        <div class="home-page__section">
          <div class="section-new">
            <h2 class="section-new__title">Новинки</h2>
            <div class="section-new__content">
              <ProductList :limit="10"  />
              <router-link to="" href="" class="section-new__link link"
                >Показать все товары</router-link
              >
            </div>
          </div>
        </div>
        <div class="home-page__section">
          <div class="section-categories">
            <h2 class="section-categories__title">Категории товаров</h2>
            <div class="section-categories__content">
              <router-link to="/category/shoes" replace class="categories__category" data-num="1">
                <h2 class="category__title">Обувь</h2>
              </router-link>
              <router-link to="/category/winter" replace class="categories__category" data-num="2">
                <h2 class="category__title">Зимнее</h2>
              </router-link>
              <router-link to="/category/summer" replace class="categories__category" data-num="3">
                <h2 class="category__title">Летнее</h2>
              </router-link>
              <router-link to="/category/clothes" replace class="categories__category" data-num="4">
                <h2 class="category__title">Одежда</h2>
              </router-link>
              <router-link to="/category/" replace class="categories__category" data-num="5">
                <h2 class="category__title">Все категории</h2>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/UI/MainBanner.vue'
import CategoryBar from '@/components/CategoryBarComponent.vue'
import ProductList from '@/components/UI/ProductList.vue'

export default {
  components: {
    Banner,
    CategoryBar,
    ProductList
  },
}
</script>

<style lang="scss" scoped></style>
