<template>
  <div class="footer__wrapper">
    <div class="footer">
      <div class="footer__copyright">© Спортик 2023. Все права защищены.</div>
      <div class="footer-nav">
        <router-link to="/" class="link footer-nav__link"
          >Главная</router-link
        >
        <router-link to="/privacy" class="link footer-nav__link"
          >Политика конфиденциальности</router-link
        >
        <router-link to="/about" class="link footer-nav__link"
          >О нас</router-link
        >
        <a @click="this.$store.commit('contact/OPEN_CONTACT_MODAL')" class="link footer-nav__link">Контакты</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterComponent',
}
</script>

<style lang="scss" scoped></style>
