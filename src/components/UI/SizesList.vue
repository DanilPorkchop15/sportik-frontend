<template lang="">
  <div class="sizes-list__wrapper">
    <div
      class="sizes-list__item-wrapper"
      v-for="size in selectedDimension.subDimensions"
      :key="size.id" :style="[isSelectedSize(size) ? {'border': '2px solid #478DF7'}:{}]" @click="setSelectedSize(size)"
    >
      <div class="sizes-list__item">
        <p class="sizes-list__value">{{ size.size }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
export default {
  props:{
    selectedDimension:{
      type: Object,
      required: true
    }
  },
  methods:{
    ...mapMutations({
      setSelectedSize: 'sizes/setSelectedSize'
    }),
    isSelectedSize(size){
      return this.selectedSize === size;
    }
  },
  computed:{
    ...mapState({
      selectedSize: state => state.sizes.selectedSize
    })
  },
}
</script>
<style lang=""></style>
