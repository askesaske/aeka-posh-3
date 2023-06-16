<template>
  <div class="modal">
    <div class="modal__container">

      <div class="modal__main">
        <div class="modal__back" @click="$emit('close')">
          <svg width="24" height="24">
            <use href="../assets/img/icons.svg#chevron-sm"></use>
          </svg>
          <span>Назад</span>
        </div>

        <div class="modal__wrapper">
          <div class="modal__register-box">
            <div class="modal__title modal__title--left">
                Регистрация
            </div>
            <div class="modal__subtitle modal__subtitle--left">
                Зарегистрируйся и выиграй классный приз!
            </div>

            <form class="modal__form" @submit.prevent="onSubmit">
              <div class="modal__input-block input-block">
                <input type="text" name="input-text" required spellcheck="false" v-model="name">
                <span class="placeholder">
                Введите ФИО
              </span>
              </div>

              <div class="modal__input-block input-block">
                <input type="number"
                       name="input-text"
                       required
                       spellcheck="false"
                       v-model="phone">
                <span class="placeholder">
                Введите номер WhatsApp
                </span>
              </div>

              <div class="modal__input-block input-block">
                <input type="email" name="input-text" required spellcheck="false" v-model="email" @input="fail = false">
                <span class="placeholder">
                  Введите эл. почту
                </span>
              </div>

              <div class="modal__input-block input-block">
                <input type="text" name="input-text" required spellcheck="false" v-model="inst">
                <span class="placeholder">
                  Введите ваш инстаграм
                </span>
              </div>

              <label class="modal__checkbox">
                <input type="checkbox" v-model="checkbox">
                Я соглашаюсь <a href="https://womenscommunity.kz/offer" target="_blank"> с договором оферты</a>
              </label>

              <span class="modal__error-text" v-if="fail">Этот имейл уже крутил колесо</span>

              <button class="modal__btn button" type="submit" :disabled="!checkbox">
                Записаться
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      phone: '',
      email: '',
      inst: '',
      fail: false,
      checkbox: false
    };
  },
  methods: {
    onSubmit() {
      this.$axios.post('attempts', {
        name: this.name,
        email: this.email,
        phone_number: this.phone,
        instagram: this.inst,
      }, {
        auth: {
          username: 'B7PgJzPPX68SALYwngRNhmsLG5AFvV',
          password: '6UJwpayBPN5akAzTUwD7R5nsNG3Nys'
        }
      })
          .then(res => {
            window.open(res.data.link, '_self');
          })
          .catch(e => {
            console.log(e)
            this.fail = true;
          })
    }
  }
}
</script>