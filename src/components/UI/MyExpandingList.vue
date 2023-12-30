<template lang="">
  <div class="expanding-list">
    <div
      class="expanding-list__item"
      v-for="item in content"
      :key="item.title"
      @click="openClose(item)"
    >
      <h4 class="expanding-list__title">{{ item.title }}</h4>
      <div class="expanding-list__content" v-if="item.opened">
        <div
          class="expanding-list__text"
          v-for="(paragraph, index) in item.description.split('\n')"
          :key="index"
        >
          <p class="expanding-list__p">{{ paragraph }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    content: {
      type: Array,
      required: true,
    },
  },
  methods: {
    openClose(item) {
      item.opened = !item.opened
    },
  },
}
</script>
<style lang=""></style>
