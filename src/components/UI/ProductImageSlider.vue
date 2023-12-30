  <template lang="">
    <div
      class="slider"
      @keyup.right="nextMainImage"
      @keyup.left="previousMainImage"
      tabindex="0"
    >
      <div class="slider__sidebar">
        <div class="slider-sidebar">
          <div
            class="slider-sidebar__image"
            v-for="image in slicedImages"
            :key="image.id"
            :style="[
              isMainImage(image)
                ? { border: '2px solid skyblue' }
                : { border: 'none' },
            ]"
          >
            <img
              :src="image.title"
              alt=""
              @click="setMainImage(image)"
              class="slider-sidebar-image"
            />
          </div>
          <div class="slider-sidebar__button">
            <div class="slider-sidebar-button__wrapper">
              <button class="slider-sidebar-button" @click="nextMainImage">
                <img
                  src="../../assets/imgs/icons/arrowdown.svg"
                  alt=""
                  class="slider-sidebar-button__image"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="slider__image">
        <div class="slider-image">
          <div class="slider__main-image-wrapper">
            <img :src="mainImage" alt="" class="slider__main-image" />
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  export default {
    props: {
      images: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        mainImage: '',
      }
    },
    mounted() {
      window.addEventListener('keyup', this.handleArrows)
    },
    methods: {
      setMainImage(image) {
        this.mainImage = image.title
      },
      isMainImage(image) {
        return image.title === this.mainImage
      },
      nextMainImage() {
        let index = this.images.findIndex(image => image.title === this.mainImage)
        if (index === this.images.length - 1) {
          this.mainImage = this.images[0].title
        } else {
          this.mainImage = this.images[index + 1].title
        }
      },
      previousMainImage() {
        let index = this.images.findIndex(image => image.title === this.mainImage)
        if (index === 0) {
          this.mainImage = this.images[this.images.length - 1].title
        } else {
          this.mainImage = this.images[index - 1].title
        }
      },
      handleArrows(event) {
        if (event.key === 'ArrowLeft') {
          this.previousMainImage()
        }
        if (event.key === 'ArrowRight') {
          this.nextMainImage()
        }
      },
    },
    computed: {
      slicedImages() {
        if (this.images <= 3) {
          return this.images
        } else{
          
        let index = this.images.findIndex(image => image.title === this.mainImage)
        if(index >= 3) {
          return this.images.slice(index - 1, index + 2)
        }else{
          return this.images.slice(0, 3)
        }
        }
      },
    },
    watch: {
      images: {
        immediate: true,
        handler(images) {
          if (images.length > 0) {
            this.mainImage = images[0].title
          }
        },
      },
    },
  }
  </script>
  <style lang=""></style>
