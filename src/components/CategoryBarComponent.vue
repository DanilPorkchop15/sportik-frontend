<template lang="">
  <div class="category-bar__wrapper">
    <div class="category-bar">
      <div class="category-bar__button" @click="drop">
        <div class="category-bar-button">
          <p class="category-bar-button__text">Каталог</p>
          <div class="category-bar-icon">
            <img
              src="@/assets/imgs/icons/dropdown.svg"
              alt="dropdown"
              class="category-bar__icon"
            />
          </div>
        </div>
      </div>
      <div class="category-bar__category-list">
        <div class="category-list">
          <div
            class="category-list-item"
            :key="index"
            v-for="(category, index) in categories.slice(0, 5)"
          >
            <router-link :to="`/category/${category.code}`" replace class="category-list__item">{{ category.title }}</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="category-dropdown" v-if="dropdown">
      <div class="category-dropdown-main">
        <div class="category-dropdown-main-list">
          <div
            class="category-dropdown-main-list-item"
            v-for="(category, index) in categories"
            :key="index"
          >
            <router-link :to="`/category/${category.code}`" replace class="category-dropdown-main-list__item">
              {{ category.title }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'

export default {
  data() {
    return {
      dropdown: false,
    }
  },
  created() {
    this.getCategories()
  },
  methods: {
    drop() {
      let temp = !this.dropdown
      this.dropdown = temp
    },
    ...mapActions({
      getCategories: 'categories/getCategories',
    }),
  },
  computed: {
    ...mapState({
      categories: state => state.categories.categories,
    }),
  },
}
</script>
<style lang=""></style>
