<template>
  <footer class="footer">
    <img src="../assets/img/quote-shadow-left.svg" alt="" class="footer__left">
    <img src="../assets/img/quote-shadow-right.svg" alt="" class="footer__right">
    <div class="footer__top">
      <div class="footer__container">
        <div class="footer__info">
          <div class="footer__heading">
            Участвуй в интенсиве <br>
            и выигрывай призы!
          </div>
          <button class="footer__btn footer__btn--desktop button button--blue" @click="openModal">Записаться</button>
        </div>

        <div class="footer__price-box">
          <div class="footer__price-old">10 000 тенге</div>
          <div class="footer__price-new">4 990 тенге</div>
        </div>
      </div>
    </div>

    <button class="footer__btn footer__btn--tab button button--blue" @click="openModal">Записаться</button>

    <img src="../assets/img/long-border.svg" alt="" class="footer__border">

    <div class="footer__bottom">
      <div class="footer__container">
        <div class="footer__socials">
          <a href="https://www.instagram.com/womenscommunity.kz/?igshid=YmMyMTA2M2Y=" target="_blank" class="footer__social">
            <svg width="28" height="28">
              <use href="../assets/img/icons.svg#inst-2"></use>
            </svg>
            Instagram
          </a>
          <a href="https://api.whatsapp.com/message/QGQGYLGDBLRVC1?autoload=1&app_absent=0" target="_blank" class="footer__social">
            <svg width="28" height="28">
              <use href="../assets/img/icons.svg#wpp-2"></use>
            </svg>
            Whatsapp
          </a>
        </div>

        <div class="footer__links">
          <a href="https://womenscommunity.kz/offer" target="_blank" class="footer__link">Договор публичной оферты</a>
          <a href="https://womenscommunity.kz/confidential" target="_blank" class="footer__link">Политика конфиденциальности</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    openModal() {
      this.$store.dispatch('setModalState', true)
    }
  }
}
</script>
