<template>
  <div class="modal modal--active">
    <img src="../assets/img/quote-shadow-left.png" alt="" class="modal__left">
    <img src="../assets/img/quote-shadow-right.png" alt="" class="modal__right">

    <div class="modal__container modal__container--sm">

      <div class="modal__wrapper" v-if="showEmail">
        <div class="modal__title">
          Введите пожалуйста ваш email
        </div>

        <form class="modal__form" @submit.prevent="onSubmit">
          <div class="modal__input-block input-block">
            <input type="email" name="input-text" required spellcheck="false" v-model="confEmail">
            <span class="placeholder">
                Введите эл. почту
              </span>
          </div>

          <button class="modal__btn button" type="submit">
            Перейти к прокрутке барабана
          </button>
        </form>
      </div>

      <div class="modal__wrapper" v-if="showFail">
        <div class="modal__title">
          Вы уже крутили барабан
        </div>
        <button class="modal__btn button" @click="$router.push('/')">
          Хорошо
        </button>
      </div>

      <div class="modal__wrapper" v-if="showWheel">
        <div class="modal__title">
          Получи свой приз!
        </div>
        <div class="modal__subtitle">
          Крути барабан и выигрывай прямо сейчас
        </div>

        <div class="modal__wheel wheel">
          <img src="../assets/img/prize-arrow.svg" alt="" class="wheel__arrow">
          <FortuneWheel
              class="wheel__main"
              type="image"
              :useWeight="true"
              :prizes="prizes"
              :angleBase="20"
              @rotateStart="onImageRotateStart"
              @rotateEnd="onRotateEnd"
              :prizeId="prizeId"
          >
            <img slot="wheel" src='../assets/img/wheel.svg'/>
            <img slot="button" src="../assets/img/wheel-btn.svg" class="wheel__btn"/>
          </FortuneWheel>
        </div>

      </div>

      <div class="modal__wrapper" v-if="showPrize">
        <div class="modal__title modal__title--mb40">
          Поздравляем!
        </div>

        <div class="modal__prize-box">
          <img :src="require(`../assets/img/prizes/${prize.img}`)" alt="">

          <p>Вы выиграли</p>
          <h3>{{ prize.value }}</h3>
        </div>

        <div class="modal__under-text">
          Приз и доступ к курсу придет на <span>{{ user.email }}</span>!
        </div>

        <button class="modal__btn button" @click="$router.push('/')">
          Хорошо
        </button>

        <div class="modal__links">
          <p>В случае вопросов и доступа к курсу пишите на номер whatsapp </p>
          <a href="#">
            <svg width="16" height="17">
              <use href="../assets/img/icons.svg#wpp-3"></use>
            </svg>
            +7 778 233 6655
          </a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import FortuneWheel from 'vue-fortune-wheel'
import 'vue-fortune-wheel/lib/vue-fortune-wheel.css'

const auth = {
  username: 'B7PgJzPPX68SALYwngRNhmsLG5AFvV',
  password: '6UJwpayBPN5akAzTUwD7R5nsNG3Nys'
}

export default {
  components: {
    FortuneWheel
  },
  data() {
    return {
      confEmail: '',
      prizes: [
        {
          id: 2, //* The unique id of each prize, an integer greater than 0
          value: '1 000 000 тг', //* Prize value, return value after spinning
          probability: 10, //* Probability, up to 4 decimal places (the sum of the probabilities of all prizes
          img: 'million.svg'
        },
        {
          id: 3,
          value: 'Курс по face-массажу',
          probability: 10,
          img: 'face.svg'
        },
        {
          id: 4,
          value: '10 000 тг',
          probability: 10,
          img: 'ten-thousand.svg'
        },
        {
          id: 5,
          value: 'Beauty-бокс',
          probability: 10,
          img: 'box.svg'
        },
        {
          id: 6,
          value: '50 000 тг',
          probability: 10,
          img: 'fifty.svg'
        },
        {
          id: 7,
          value: 'Закрытый VIP канал',
          probability: 10,
          img: 'chat.svg'
        },
        {
          id: 1,
          value: 'IPhone 13 PRO',
          probability: 10,
          img: 'iphone.svg'
        }
      ],
      prizeId: null,

      prize: {},
      user: {},

      showEmail: true,
      showFail: false,
      showWheel: false,
      showPrize: false,
    }
  },
  methods: {
    onSubmit() {
      this.$axios.post('prizes/random', {
        email: this.confEmail
      }, {
        auth: auth
      })
          .then(res => {
            this.prizeId = res.data.prize.id
            this.user = {
              email: res.data.email,
              inst: res.data.instagram,
              phone: res.data.phone_number,
              name: res.data.name,
            }
            this.showEmail = false
            this.showWheel = true
            console.log(res)
          })
          .catch(e => {
            console.log(e)
            this.showEmail = false
            this.showFail = true
          })
    },
    onImageRotateStart() {},
    onRotateEnd(prize) {
      this.prize = {
        id: prize.id,
        value: prize.value,
        img: prize.img
      }
      this.showWheel = false
      this.showPrize = true
    },
  },
  mounted() {}
}
</script>

<style lang="scss">
.wheel {
  margin-bottom: 200px;

  &__arrow {
    width: 30px;
    margin-bottom: 10px;
  }

  &__btn {
    width: 280px !important;
    cursor: pointer;
    position: absolute;
    top: calc(100% + 60px);
    left: 50%;
    transform: translateX(-50%);
  }
}

.fw-container {
  overflow: unset !important;
}
</style>