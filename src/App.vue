<template>
  <Header/>
  <router-view/>
  <Footer/>
  <ContactModal v-if="$store.state.contact.isContactModalOpened"/>
</template>

<script>
import ContactModal from '@/components/ContactModalComponent.vue'
import Footer from '@/components/FooterComponent.vue'
import Header from '@/components/HeaderComponent.vue'
export default {
  name: 'App',
  components: {
    Header, Footer, ContactModal
  }
}
</script>

<style>
</style>
