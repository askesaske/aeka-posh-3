<template>
    <footer class="footer">
        <div class="footer__container footer__container--1">
            <div class="footer__info">
                <div class="footer__heading">
                    Запишись
                    <span>прямо сейчас</span>
                </div>
                <button class="footer__btn button footer__btn--desktop" @click="openModal">
                    Записаться
                </button>
            </div>
            <div class="footer__card">
                <img src="../assets/img/footer-img.png" alt="">
                <div class="footer__text-wrap">
                    <div class="footer__title">
                        Стоимость <span>5 000 тенге</span>
                    </div>
                    <h6>3 000 тенге</h6>
                </div>
                <img src="../assets/img/footer-sticker.png" alt="" class="footer__sticker">
                <div class="footer__timer">
                    <p>
                        Повышение цены через
                    </p>
                    <span>
                        <CountDown />
                    </span>
                </div>
            </div>

            <button class="footer__btn button footer__btn--mobile" @click="openModal">
                Записаться
            </button>
        </div>

        <div class="footer__container">
            <div class="footer__socials">
                <a href="https://instagram.com/aekas.notes?igshid=NTc4MTIwNjQ2YQ==" target="_blank"
                   class="footer__social">
                    <svg width="24" height="24">
                        <use href="../assets/img/icons.svg#inst-2"></use>
                    </svg>
                    Instagram
                </a>
                <a href="https://wa.me/message/QGQGYLGDBLRVC1" target="_blank" class="footer__social">
                    <svg width="24" height="24">
                        <use href="../assets/img/icons.svg#wpp-2"></use>
                    </svg>
                    Whatsapp
                </a>
            </div>

            <div class="footer__links">
                <a href="https://womenscommunity.kz/offer" target="_blank" class="footer__link">Договор публичной
                    оферты</a>
                <a href="https://womenscommunity.kz/confidential" target="_blank" class="footer__link">Политика
                    конфиденциальности</a>
            </div>
        </div>
    </footer>
</template>

<script>
import CountDown from "@/components/CountDown";

export default {
    components: {
        CountDown
    },
    methods: {
        openModal() {
            this.$store.dispatch('setModalState', true)
        }
    }
}
</script>
