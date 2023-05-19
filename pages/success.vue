<template>
    <div class="modal modal--active">
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
                        КРУТИТЬ КОЛЕСО
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
                <div class="modal__title modal__title--wheel">
                    Получи свой приз!
                </div>
                <div class="modal__subtitle modal__subtitle--wheel">
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
                        :verify="false"
                    >
                        <img slot="wheel" src='../assets/img/wheel-of-fortune.png'/>
                        <img slot="button" src="../assets/img/wheel-btn.svg" class="wheel__btn"/>
                    </FortuneWheel>
                </div>

            </div>

            <div class="modal__wrapper" v-if="showPrize">
                <div class="modal__title modal__title--mb40">
                    Получи свой приз!
                </div>

                <div class="modal__prize-box">
                    <img :src="require(`../assets/img/prizes/${prize.img}`)" alt="">

                    <p>Вы выиграли</p>
                    <h3>{{ prize.value }}</h3>
                </div>

                <div class="modal__under-text">
                    <span v-if="prize.id === 1 || prize.id === 2 || prize.id === 3 || prize.id === 4 || prize.id === 6  || prize.id === 7 || prize.id === 8">Для получения своего бонуса, выложи скрин этой страницы! Не забудь отметить @aeka.posh и @aekas.notes

                    </span>
                    <span v-if="prize.id === 5">Для получения своего бонуса, переходи по ссылке ниже:<a
                        href="https://t.me/+huLpArkbLbRlYWRi">https://t.me/+huLpArkbLbRlYWRi</a></span>

                  <span v-if="prize.id === 9">Для получения своего бонуса, переходи по ссылке ниже:<a
                      href="https://t.me/+twOeAZCPw3c3MTQy">https://t.me/+twOeAZCPw3c3MTQy</a></span>
                    <br>
                    <br>

                    <span>Доступ к курсу придёт на <span class="bold">{{ user.email }}</span></span>
                </div>

                <button class="modal__btn button" @click="$router.push('/')">
                  Все понятно
                </button>

                <div class="modal__links">
                    <p>Если еще остались вопросы обращайтесь по номеру:</p>
                    <a href="https://wa.me/message/QGQGYLGDBLRVC1"
                       target="_blank">
                        <svg width="17" height="16">
                            <use href="../assets/img/icons.svg#wpp-5"></use>
                        </svg>

                        <span>+7 (776) 502 36 36</span>
                    </a>
                </div>
            </div>

        </div>
        <Spinner v-if="loader"/>
    </div>
</template>

<script>
import FortuneWheel from 'vue-fortune-wheel'
import 'vue-fortune-wheel/lib/vue-fortune-wheel.css'
import Spinner from "@/components/Spinner";

const auth = {
    username: 'B7PgJzPPX68SALYwngRNhmsLG5AFvV',
    password: '6UJwpayBPN5akAzTUwD7R5nsNG3Nys'
}

export default {
    components: {
        FortuneWheel,
        Spinner
    },
    data() {
        return {
            confEmail: '',
            prizeId: 4,
            prizes: [
                {
                    id: 1, //* The unique id of each prize, an integer greater than 0
                    value: '1 000 000 тг', //* Prize value, return value after spinning
                    probability: 10, //* Probability, up to 4 decimal places (the sum of the probabilities of all prizes
                    img: 'million.svg'
                },
                {
                    id: 2, //* The unique id of each prize, an integer greater than 0
                    value: '50 000 тг', //* Prize value, return value after spinning
                    probability: 10, //* Probability, up to 4 decimal places (the sum of the probabilities of all prizes
                    img: '50k.svg'
                },
                {
                    id: 3,
                    value: '10 000 тг',
                    probability: 10,
                    img: '10k.svg'
                },
                {
                  id: 4,
                  value: 'Beauty Box',
                  probability: 10,
                  img: 'box.svg'
                },
                {
                    id: 5,
                    value: 'Бонусный эфир',
                    probability: 10,
                    img: 'lesson.svg'
                },
                {
                    id: 6,
                    value: 'Стайлер Dyson или 500 000 тг',
                    probability: 10,
                    img: 'dyson.svg'
                },
                {
                    id: 7,
                    value: '100 000 тг',
                    probability: 10,
                    img: '100k.svg'
                },
                {
                    id: 8,
                    value: 'iPhone 14 Pro или 500 000 тг',
                    probability: 10,
                    img: 'iphone.svg'
                },
                {
                    id: 9,
                    value: 'VIP доступ',
                    probability: 10,
                    img: 'vip.svg'
                },
            ],
            loader: false,

            prize: {},
            user: {},

            showEmail: true,
            showFail: false,
            showWheel: false,
            showPrize: false,
        }
    },
    computed: {
        loadedConfEmail() {
            return this.$store.getters.loadedConfEmailState;
        }
    },
    methods: {
        onSubmit() {
            this.loader = true;
            this.$axios.get(`attempts/${this.confEmail}`, {
                auth: auth
            })
                .then(res => {
                    if (res.data.valid) {
                        this.$store.dispatch('setConfEmailState', this.confEmail);
                        this.user = {
                            email: res.data.email,
                            inst: res.data.instagram,
                            phone: res.data.phone_number,
                            name: res.data.name,
                        }
                    }
                    this.showEmail = false
                    this.showWheel = true
                })
                .catch(e => {
                    this.showEmail = false
                    this.showFail = true
                })
                .finally(() => {
                    this.loader = false
                })
        },
        async onImageRotateStart() {
            await this.$axios.post('prizes/random', {
              email: this.loadedConfEmail
            }, {
              auth: auth
            })
                .then(res => {
                  this.prizeId = res.data.prize.id
                })
                .catch(e => {
                  this.prizeId = 4
                })
        },
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
}
</script>

<style lang="scss">
.wheel {
    margin-bottom: 200px;

    &__arrow {
        width: 21px;
        margin-bottom: 10px;
    }

    &__btn {
        width: 240px !important;
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
