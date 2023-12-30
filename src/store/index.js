import { createStore } from 'vuex'
import { productsModule } from './productsModule.js'
import { categoriesModule } from './categoriesModule.js'
import { contactModalModule} from './contactModalModule.js'
import { sizesModule } from './sizesModule.js'

export default createStore({
  state: () => ({
    apiURL: 'http://localhost:8086/api'
  }),
  modules: {
    products: productsModule,
    categories: categoriesModule,
    contact: contactModalModule,
    sizes: sizesModule,
  },
})
