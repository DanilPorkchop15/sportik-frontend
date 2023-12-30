<template>
  <div class="page__wrapper">
    <div class="page">
      <div class="admin-page__content">
        <div class="admin-page__section">
          <div class="section-product">
            <div class="section-product__post">
              <form
                action=""
                class="product-post"
                @submit.prevent="createProduct()"
              >
                <div class="product-post__title">
                  <h3>Добавить товар</h3>
                </div>
                <div class="product-post__input">
                  <h4 class="product-post-input__title">Название товара</h4>
                  <input
                    type="text"
                    class="product-post-input"
                    required
                    placeholder="Введите название товара"
                    v-model="newProduct.title"
                  />
                </div>
                <div class="product-post__input">
                  <h4 class="product-post-input__title">Бренд товара</h4>
                  <input
                    type="text"
                    class="product-post-input"
                    required
                    placeholder="Введите бренд товара"
                    v-model="newProduct.brand"
                  />
                </div>
                <div class="product-post__input">
                  <h4 class="product-post-input__title">Описание товара</h4>
                  <textarea
                    required
                    class="product-post-input"
                    placeholder="Введите описание товара"
                    v-model="newProduct.description"
                  ></textarea>
                </div>
                <div class="product-post__input">
                  <h4 class="product-post-input__title">Цвет товара</h4>
                  <input
                    type="text"
                    class="product-post-input"
                    required
                    placeholder="Введите артикул товара"
                    v-model="newProduct.color"
                  />
                </div>
                <div class="product-post__input">
                  <h4 class="product-post-input__title">Цена товара</h4>
                  <input
                    type="text"
                    class="product-post-input"
                    required
                    placeholder="Введите артикул товара"
                    v-model="newProduct.price"
                  />
                </div>
                <div class="product-post__input">
                  <h4 class="product-post-input__title">Артикул товара</h4>
                  <input
                    type="text"
                    class="product-post-input"
                    required
                    placeholder="Введите артикул товара"
                    v-model="newProduct.vendorCode"
                  />
                </div>
                <div class="product-post__input">
                  <h4 class="category-select__title">Категория товара</h4>
                  <label for="category-select" class="category-select__label"
                    >Выберите категорию
                    <select
                      name="category-select"
                      class="category-select"
                      id="category-select"
                      required
                      v-model="newProductCategoryId"
                    >
                      <option
                        :value="category.id"
                        v-for="category in categories"
                        :key="category.id"
                        class="category-select__item"
                      >
                        {{ category.title }}
                      </option>
                    </select></label
                  >
                </div>
                <div class="product-post__characteristics">
                  <h4 class="product-post-input__title">Характеристики</h4>
                  <div class="product-characteristics">
                    <div
                      class="product-characteristics__characteristic"
                      v-for="characteristic in newProduct.characteristics"
                      :key="characteristic.id"
                    >
                      <div class="product-characteristic">
                        <div class="product-post__input">
                          <h4 class="product-post-input__title">
                            Характеристикa
                          </h4>
                          <input
                            type="text"
                            class="product-post-input"
                            required
                            placeholder="Введите название характеристики"
                            v-model="characteristic.title"
                          />
                        </div>
                        <h4 class="product-post-input__title">
                          Саб-характеристики
                        </h4>
                        <div
                          class="product-characteristic__sub-characteristics"
                        >
                          <div class="product-sub-characteristics">
                            <div
                              class="product-sub-characteristics__sub-characteristic"
                              v-for="subCharacteristic in characteristic.subCharacteristic"
                              :key="subCharacteristic.id"
                            >
                              <div class="product-sub-characteristic">
                                <h4 class="product-post-input__title">
                                  Саб-характеристика
                                </h4>
                                <div class="product-post__input">
                                  <input
                                    type="text"
                                    class="product-post-input"
                                    required
                                    placeholder="Введите название саб-характеристики"
                                    v-model="subCharacteristic.title"
                                  />
                                </div>
                                <div class="product-post__input">
                                  <input
                                    type="text"
                                    class="product-post-input"
                                    required
                                    placeholder="Введите содержание саб-характеристики"
                                    v-model="subCharacteristic.description"
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="product-post__buttons">
                              <div class="product-sub-characteristics__delete">
                                <div
                                  class="product-sub-characteristics__button button__delete"
                                  @click="
                                    deleteLastSubCharacteristic(characteristic)
                                  "
                                  v-if="characteristic.subCharacteristic"
                                >
                                  -
                                </div>
                              </div>
                              <div class="product-sub-characteristics__add-new">
                                <div
                                  class="product-sub-characteristics__button button__add-new"
                                  @click="
                                    addNewSubCharacteristic(characteristic)
                                  "
                                >
                                  +
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="product-post__buttons">
                      <div class="product-sub-characteristics__delete">
                        <div
                          class="product-sub-characteristics__button button__delete"
                          @click="deleteLastCharacteristic()"
                          v-if="product.characteristics"
                        >
                          -
                        </div>
                      </div>
                      <div class="product-characteristics__add-new">
                        <div
                          class="product-characteristics__button button__add-new"
                          @click="addNewCharacteristic()"
                        >
                          +
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="product-post__dimensions">
                  <h4 class="product-post-input__title">Размерность</h4>
                  <div class="product-dimensions">
                    <div
                      class="product-dimensions__dimension"
                      v-for="(dimension, index) in newProduct.dimensions"
                      :key="index"
                    >
                      <div class="product-dimension">
                        <div class="product-post __input">
                          <h4 class="product-post-input__title">
                            Тип размеров
                          </h4>
                          <input
                            type="text"
                            class="product-post-input"
                            required
                            placeholder="Введите тип размерности"
                            v-model="dimension.title"
                          />
                        </div>
                        <div class="product-dimension__sub-dimensions">
                          <h4 class="product-post-input__title">Размеры</h4>
                          <div class="product-sub-dimensions">
                            <div
                              class="product__sub-dimension"
                              v-for="(
                                subDimension, index
                              ) in dimension.subDimensions"
                              :key="index"
                            >
                              <div class="product-sub-dimension">
                                <div class="product-post__input">
                                  <h4 class="product-post-input__title">
                                    Размер
                                  </h4>
                                  <input
                                    type="text"
                                    class="product-post-input"
                                    required
                                    placeholder="Введите размер"
                                    v-model="subDimension.size"
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="product-post__buttons">
                              <div class="product-sub-dimensions__delete">
                                <div
                                  class="product-sub-dimensions__button button__delete"
                                  @click="deleteLastSubDimension(dimension)"
                                  v-if="dimension.subDimensions"
                                >
                                  -
                                </div>
                              </div>
                              <div class="product-sub-dimensions__add-new">
                                <div
                                  class="product-sub-dimensions__button button__add-new"
                                  @click="addNewSubDimension(dimension)"
                                >
                                  +
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="product-post__buttons">
                      <div class="product-dimensions__delete">
                        <div
                          class="product-dimensions__button button__delete"
                          @click="deleteLastDimension"
                          v-if="product.dimensions"
                        >
                          -
                        </div>
                      </div>
                      <div class="product-dimensions__add-new">
                        <div
                          class="product-dimensions__button button__add-new"
                          @click="addNewDimension"
                        >
                          +
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="product-post__images">
                  <h4 class="product-post-images__title">
                    Загрузите фотографии продукта
                  </h4>
                  <div class="product-images">
                    <div
                      class="product-images__image"
                      v-for="(image, index) in newProduct.images"
                      :key="index"
                    >
                      <h4 class="product-post-input__title">Фотография</h4>
                      <div class="product-image">
                        <div class="product-post__input">
                          <input
                            type="text"
                            class="product-post-input"
                            required
                            placeholder="Введите ссылку на фото"
                            v-model="image.title"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="product-post__buttons">
                      <div class="product-images__delete">
                        <div
                          class="product-images__button button__delete"
                          @click="deleteLastImage"
                          v-if="product.images"
                        >
                          -
                        </div>
                      </div>
                      <div class="product-images__add-new">
                        <div
                          class="product-images__button button__add-new"
                          @click="addNewImage"
                        >
                          +
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="product-post__submit">
                  <button type="submit" class="product-post__button">
                    Добавить продукт
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="admin-page__section">
          <div class="section-category">
            <div class="section-category__post">
              <div class="category-post__title">
                <h3>Добавить категорию</h3>
              </div>
              <form
                action=""
                @submit.prevent="postCategory"
                class="category-post"
              >
                <div class="category-post__input">
                  <input
                    type="text"
                    :value="categoryTitle"
                    @input="updateCategoryTitle"
                    placeholder="Введите название категории"
                    required
                    class="category-post-input"
                  />
                </div>
                <div class="category-post__input">
                  <input
                    type="text"
                    :value="categoryCode"
                    @input="updateCategoryCode"
                    placeholder="Введите код категории"
                    required
                    class="category-post-input"
                  />
                </div>
                <div class="category-post__submit">
                  <button type="submit" class="category-post__button">
                    Добавить категорию
                  </button>
                </div>
              </form>
            </div>
            <div class="section-category__delete">
              <div class="category-delete__title">
                <h3>Удалить категорию</h3>
              </div>
              <form
                action=""
                @submit.prevent="deleteCategory"
                class="category-delete"
              >
                <div class="category-delete__select">
                  <label
                    for="category-delete-select"
                    class="category-delete__label"
                    >Выберите категорию
                    <select
                      name="category-delete-select"
                      class="category-delete-select"
                      id="category-delete-select"
                      v-model="categoryIdToDelete"
                      required
                    >
                      <option
                        :value="category.id"
                        v-for="category in categories"
                        :key="category.id"
                        class="category-delete-select__item"
                      >
                        {{ category.title }}
                      </option>
                    </select>
                  </label>
                </div>
                <div class="category-delete__submit">
                  <button type="submit" class="category-delete__button">
                    Удалить категорию
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  data() {
    return {
      categoryIdToDelete: {},
      newProduct: {},
      newProductCategoryId: '',
    }
  },
  mounted() {
    this.getProducts()
    this.getCategories()
  },
  methods: {
    ...mapActions({
      getProducts: 'products/getProducts',
      postProduct: 'products/postProduct',
      getCategories: 'categories/getCategories',
      deleteCategory: 'categories/deleteCategory',
      postCategory: 'categories/postCategory',
    }),
    ...mapMutations({
      setProduct: 'products/setProduct',
      setCategoryToDelete: 'categories/setCategoryToDelete',
      setCategoryTitle: 'categories/setCategoryTitle',
      setCategoryCode: 'categories/setCategoryCode',
    }),
    updateCategoryCode(e) {
      this.setCategoryCode(e.target.value)
    },
    updateCategoryTitle(e) {
      this.setCategoryTitle(e.target.value)
    },
    setNewProductCategory() {
      this.newProduct.category_id = this.categories.find(
        el => el.id === this.newProductCategoryId
      ).code
    },
    addNewCharacteristic() {
      if (!this.newProduct.characteristics) {
        this.newProduct.characteristics = []
      }
      this.newProduct.characteristics.push({ id: 0, productId: 0 })
    },
    addNewSubCharacteristic(characteristic) {
      if (!characteristic.subCharacteristic) {
        characteristic.subCharacteristic = []
      }
      characteristic.subCharacteristic.push({
        sub_characteristic_id: 0,
        characteristic: 0,
      })
    },
    addNewDimension() {
      if (!this.newProduct.dimensions) {
        this.newProduct.dimensions = []
      }
      this.newProduct.dimensions.push({ id: 0, productId: 0 })
    },
    addNewSubDimension(dimension) {
      if (!dimension.subDimensions) {
        dimension.subDimensions = []
      }
      dimension.subDimensions.push({ id: 0, dimensionId: 0 })
    },
    addNewImage() {
      if (!this.newProduct.images) {
        this.newProduct.images = []
      }
      this.newProduct.images.push({ image_id: 0, productId: 0 })
    },
    clearNewProduct() {
      this.newProduct = {}
    },
    createProduct() {
      const date = new Date()
      this.newProduct.dateCreated = `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`
      this.newProduct.id = 0
      this.setProduct(this.newProduct)
      console.log(this.product)
      this.postProduct().then(this.clearNewProduct)
    },
    deleteLastCharacteristic() {
      this.newProduct.characteristics.pop()
      if (this.newProduct.characteristics.length === 0) {
        delete this.newProduct.characteristics
      }
    },

    deleteLastSubCharacteristic(characteristic) {
      characteristic.subCharacteristic.pop()
      if (characteristic.subCharacteristic.length === 0) {
        delete characteristic.subCharacteristic
      }
    },
    deleteLastDimension() {
      this.newProduct.dimensions.pop()
      if (this.newProduct.dimensions.length === 0) {
        delete this.newProduct.dimensions
      }
    },

    deleteLastSubDimension(dimension) {
      dimension.subDimensions.pop()
      if (dimension.subDimensions.length === 0) {
        delete dimension.subDimensions
      }
    },
    deleteLastImage() {
      this.newProduct.images.pop()
      if (this.newProduct.images.length === 0) {
        delete this.newProduct.images
      }
    },
  },
  computed: {
    ...mapState({
      products: state => state.products.products,
      product: state => state.products.product,
      categories: state => state.categories.categories,
      categoryToDelete: state => state.categories.categoryToDelete,
      categoryTitle: state => state.categories.categoryTitle,
      categoryCode: state => state.categories.categoryCode,
    }),
  },
  watch: {
    categoryIdToDelete() {
      this.setCategoryToDelete(
        this.categories.find(el => el.id === this.categoryIdToDelete)
      )
      console.log(this.categoryToDelete)
    },
    newProductCategoryId() {
      this.setNewProductCategory()
    },
    newProduct: {
      handler(updatedProduct) {
        this.setProduct(updatedProduct)
        console.log(this.product)
      },
      deep: true,
      immediate: true,
    },
  },
}
</script>
<style lang=""></style>
