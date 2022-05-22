<template>
  <div class="modal">
    <img src="../assets/img/quote-shadow-left.png" alt="" class="modal__left">
    <img src="../assets/img/quote-shadow-right.png" alt="" class="modal__right">

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
            <div class="modal__title">
              Регистрация
            </div>
            <div class="modal__subtitle">
              Зарегистрируйся на интенсив и выиграй
              классный приз!
            </div>

            <form class="modal__form" @submit.prevent="onSubmit">
              <div class="modal__input-block input-block">
                <input type="text" name="input-text" required spellcheck="false" v-model="name">
                <span class="placeholder">
                Введите ФИО
              </span>
              </div>

              <div class="modal__input-block input-block">
                <input type="text"
                       name="input-text"
                       required
                       spellcheck="false"
                       v-mask="'+7 (###) ###-##-##'" v-model="phone">
                <span class="placeholder">
                Введите номер WhatsApp
              </span>
              </div>

              <div class="modal__input-block input-block">
                <input type="email" name="input-text" required spellcheck="false" v-model="email">
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

              <button class="modal__btn button" type="submit">
                Перейти к оплате
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
      inst: ''
    };
  },
  methods: {
    onSubmit() {
      // this.$axios.post('https://auth.robokassa.ru/Merchant/Index.aspx', {
      //   MerchantLogin: 'www.womenscommunity.kz',
      //   OutSum: '4990',
      //   Description: 'CHECK',
      //   SignatureValue: 'acb07b390e69dbfae29daa5896906603',
      //   IsTest: '1',
      //   Shp_email: this.email,
      //   Shp_inst: this.inst,
      //   Shp_name: this.name,
      //   Shp_phone: this.phone,
      // }, {
      //   auth: {
      //     username: 'B7PgJzPPX68SALYwngRNhmsLG5AFvV',
      //     password: '6UJwpayBPN5akAzTUwD7R5nsNG3Nys'
      //   }
      // })
      //     .then(res => {
      //       console.log(res)
      //     })
      //     .catch(e => console.log(e))

      this.$axios.get('https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=www.womenscommunity.kz&OutSum=4990&InvoiceID=0&Description=CHECK&SignatureValue=47628e02aef425de8263df450b2991d5&IsTest=1')
      .then(res => console.log(res))
      .catch(e => console.log(e))
    }
  }
}
</script>