<template>
  <div class="header__wrapper">
    <div class="header">
      <div class="header-top-bar">
        <div class="header-top-bar-content">
          <div class="header-top-bar-nav">
            <p class="header-top-bar-nav__phone">+7 999 999 99-99</p>
            <router-link to="/help" class="header-top-bar-nav__link link"
              >Помощь</router-link
            >
          </div>
        </div>
      </div>
      <div class="header-main">
        <div class="header-main-content">
          <router-link to="/" class="header-main-branding">
            <div class="header-main-branding__logo">
              <img
                src="https://content.sportslogos.net/slnet-505x505trans.png"
                alt="logo"
                class="logo"
              />
            </div>
            <h1 class="header-main-branding__title">Sportik</h1>
          </router-link>
          <div class="header-main-nav">
            <router-link to="" class="header-main-nav__link link"
              ><img
                src="@/assets/imgs/icons/search.svg"
                alt="search"
                class="header-main-nav__icon"
            /></router-link>
            <router-link to="/" class="header-main-nav__link link"
              ><img
                src="@/assets/imgs/icons/cart.svg"
                alt="cart"
                class="header-main-nav__icon"
            /></router-link>
            <router-link to="/" class="header-main-nav__link link"
              ><img
                src="@/assets/imgs/icons/user.svg"
                alt="user"
                class="header-main-nav__icon"
            /></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
}
</script>

<style lang="scss">
.header {
  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0;
  }

  &__title {
    margin: 0;
    font-size: 24px;
    font-weight: bold;
  }

  &__nav {
    display: flex;
    align-items: center;
  }

  &__list {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  &__item {
    margin-left: 16px;
  }

  &__link {
    text-decoration: none;
    color: #000;
    font-size: 16px;

    &:hover {
      color: #666;
    }
  }
}
</style>
