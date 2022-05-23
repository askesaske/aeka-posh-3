<template>
  <footer class="footer">
    <div class="footer__top">
      <div class="footer__container">
        <div class="footer__info">
          <div class="footer__heading">Участвуй в интенсиве</div>
          <div class="footer__title">и выигрывай призы!</div>
          <button class="footer__btn footer__btn--desktop button" @click="openModal">Записаться</button>
        </div>

        <div class="footer__price-box">
          <svg class="footer__star footer__star--1" width="17" height="19">
            <use href="../assets/img/icons.svg#star-1"></use>
          </svg>
          <svg class="footer__star footer__star--2" width="31" height="31">
            <use href="../assets/img/icons.svg#star-2"></use>
          </svg>
          <svg class="footer__star footer__star--3" width="16" height="17">
            <use href="../assets/img/icons.svg#star-3"></use>
          </svg>
          <svg class="footer__star footer__star--4" width="19" height="20">
            <use href="../assets/img/icons.svg#star-4"></use>
          </svg>
          <svg class="footer__star footer__star--5" width="12" height="16">
            <use href="../assets/img/icons.svg#star-5"></use>
          </svg>

          <div class="footer__price-old">10 000 тенге</div>
          <div class="footer__price-new">4 990 тенге</div>
        </div>
      </div>
    </div>

    <button class="footer__btn footer__btn--tab button" @click="openModal">Записаться</button>

    <img src="../assets/img/long-border.svg" alt="" class="footer__border">

    <div class="footer__bottom">
      <div class="footer__container">
        <div class="footer__socials">
          <div class="footer__social">
            <svg width="28" height="28">
              <use href="../assets/img/icons.svg#inst-2"></use>
            </svg>
            Instagram
          </div>
          <div class="footer__social">
            <svg width="28" height="28">
              <use href="../assets/img/icons.svg#wpp-2"></use>
            </svg>
            Whatsapp
          </div>
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
