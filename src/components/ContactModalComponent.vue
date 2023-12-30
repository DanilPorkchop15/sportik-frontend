<template lang="">
  <div class="contact-modal__wrapper" >
    <div class="contact-modal">
      <div class="contact-modal__content">
        <h2 class="contact-modal__title">Контактная информация</h2>
        <div class="contact-modal__phone-info">
          <h4 class="phone-info__title">Номер телефона поддержки</h4>
          <p class="phone-info__phone">+7 999 999-99-99</p>
        </div>
        <div class="contact-modal__mail-info">
          <h4 class="mail-info__title">Электронная почта поддержки</h4>
          <p class="mail-info__mail">sportik161@mail.ru</p>
        </div>
        <div class="contact-modal__social-info">
          <h4 class="social-info__title">Мы в социальных сетях</h4>
          <div class="social-info__social-media-list">
            <div class="social-media-list">
              <div class="social-media-list__item"
                  v-for="(media, index) in social_media"
                  :key="index">
                <a
                  class="social-media-list__icon-wrapper"
                >
                  <img
                    :src="media.icon"
                    :alt="media.name"
                    class="social-media-list__icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="contact-modal__close">
        <div class="modal-close">
          <button class="modal-close__button" @click="$store.commit('contact/CLOSE_CONTACT_MODAL')">✕</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ContactModal',
  data() {
    return {
      social_media: [
        {
          name: 'vk',
          link: '#',
          icon: 'https://s3-alpha-sig.figma.com/img/1c5e/ceb2/2b48b59369a05c223ecb0ba3ad737a1c?Expires=1702252800&Signature=WDu9QQDNkT2tY0GOCndA7te6CEHnDRfU63Ip~V0Fs8eNprcxAi59udmystcOENVb3vwpVqAW9XYLix9k8ZNWCjroZh8RkNkux9mtlNebs6nNCZcVvhdmZo5CSjxZKYP8kbF2PaPpBRzcqIzr7xJ4xKit5Gj71MAuw7bztQOTPVSEpiM0jegBN5Ct4NAZMkP5zOOt9Cuax1H~7ojQ8OSAVYt~IY9J6zaaCDOGcst2howuFRykq3Z~bby3czp5RkhyDnnt1l41RHvFKw90vmrus-2AanWt59mOxqvUoDD-9tbPKcvQ9Sdpa84jZpYD-hJgHBWhG9OMbysKG1MPNtAOXA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        },
        {
          name: 'ok',
          link: '#',
          icon: 'https://s3-alpha-sig.figma.com/img/8097/51bf/80574b7c7e91dca4111c87adac5270be?Expires=1702252800&Signature=J0Bmn8XbD5TfXxtQRJjNb-09i7YDNf4VDEz5lbVBtdGKdFpfne8Vkvte5Wvg4DDaeYZdpSooz3r5jTUEB2GKjoH-u0F8QNHB-1JHw4-thVwoOQrwaXftdnQkw2B2CfoU5~6O1Iy6h5JVcu9GeknRLHiVYld-eUiaGAXdA8W1BnAALG5Uouq9PL~SnTEjAeaaLurixfojnR3co72O0wPNtRwpVNXv4KRuHsUn2jl4c4q~ACc1EKme1AcD92YWo~cfJ1XOk7WtQ9SFD39HvXzt2nlx~yhbkWsr3-~j8bVfCrDd4BYKIJvcBHJd0guif4v1MAOVu7VxCvVFjfYTPktF4w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        },
        {
          name: 'twitter',
          link: '#',
          icon: 'https://s3-alpha-sig.figma.com/img/7b1e/fcb2/0a07ccb1cb88b4369cf37bf01519aed4?Expires=1702252800&Signature=bpJGprFIEaKTgMMvM26cgcMjcXQ7Hjtva9OzBvwY8y47B3fDiXtkjqJy2WwSQbWe-OdkwDifPAiRnhIG0ViVAVRy1anLSMBu5nlptf1~YpLI2kSxKsUuuyRJFukynHXfgGgFlLcCGbunJCwxKWujHr506~7O97P-DlFgJVXyrAHB3CKaFiCCimeC99Dtv1JMVFgg3I0GbxGcJjaf-Sa-JLJEeOmeQLqAqFNC~rQ6iGDh~~qprTypm4SvVWIPR79VV70PwUFMeqXLLHyqFBe47E49tE8U9mN7gzBhrjMlnGas3Jd1j6Y32yJgIuuk3pIiNVd-cZW7UXjWgfOj65utfw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        },
      ],
    }
  },
}
</script>
<style lang=""></style>
