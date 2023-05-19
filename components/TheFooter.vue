<template>
    <footer class="footer">
        <div class="footer__container">
            <div class="footer__top">
                <div class="footer__info">
                    <svg class="footer__heart" width="64" height="64">
                        <use href="../assets/img/icons.svg#heart"></use>
                    </svg>
                    <div class="footer__heading">
                        Не упускай свой <span>шанс</span>
                    </div>
                </div>

                <div class="footer__active-box">
                    <div class="footer__price-box">
                        <h6>5 000 тенге</h6>
                        <span>стоимость</span>
                    </div>

                    <button class="footer__btn button" @click="openModal">ЗАПИСАТЬСЯ</button>
                </div>
            </div>

            <div class="footer__bottom">
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
