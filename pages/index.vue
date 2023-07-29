<template>
    <main class="main">
        <section class="main__section main__section--welcome welcome-section">
            <div class="welcome-section__container">
                <div class="welcome-section__images">
                    <div class="welcome-section__column welcome-section__column--1">
                        <img src="../assets/img/welcome-1.png" alt="">
                        <img src="../assets/img/welcome-2.png" alt="">
                    </div>
                    <div class="welcome-section__column">
                        <img src="../assets/img/welcome-3.png" alt="">
                        <div class="welcome-section__btn" @click="openModal">
                            <img src="../assets/img/welcome-icon.svg" alt="">
                            <p>Принять участие</p>
                        </div>
                    </div>
                    <div class="welcome-section__arrow">
                        <svg width="41" height="114">
                            <use href="../assets/img/icons.svg#welcome-arrow"></use>
                        </svg>
                        <img src="../assets/img/welcome-text.png" alt="">
                    </div>
                </div>

                <div class="welcome-section__text">
                    Записи <span>Аеки</span>
                </div>
            </div>
        </section>

        <section class="main__section main__section--cards cards-section">
            <div class="cards-section__container">
                <div class="cards-section__row">
                    <div class="cards-section__card">
                        <img src="../assets/img/card-1.png" alt="">
                        <p>Начало программы</p>
                        <h4>25 июня</h4>
                    </div>

                    <div class="cards-section__card cards-section__card--blue">
                        <img src="../assets/img/card-2.png" alt="">
                        <p>Длительность</p>
                        <h4>7 дней</h4>
                    </div>
                </div>
                <div class="cards-section__long">
                    <img src="../assets/img/card-3.png" alt="">
                    <div class="cards-section__text-wrap">
                        <p>
                            Стоимость
                        </p>
                        <h6>{{ price }} тенге</h6>
                    </div>
                    <img src="../assets/img/sticker.png" alt="" class="cards-section__sticker">
                    <div class="cards-section__timer">
                        <p>
                            Повышение цены через
                        </p>
                        <span>
                            <CountDown @price="changePrice" />
                        </span>
                    </div>
                </div>
                <button class="cards-section__btn button" @click="openModal">Записаться</button>
            </div>
        </section>

        <section class="main__section main__section--author author-section">
            <div class="author-section__container">
                <div class="author-section__first">
                    <div class="author-section__heading">
                        У вас будет доступ <br>
                        <span>в закрытый</span> аккаунт
                    </div>

                    <div class="author-section__text-wrap">
                        <div class="author-section__text">
                            Привет! В своих записях я делюсь своими мыслями обо всем на свете, говорю о вере, и просто
                            рассуждаю о нашем, женском)Давно хотела собрать в одном, укромном месте всё, что трогает мою
                            душу и то, о чем могу говорить часами 😊Пусть это будет нашим с вами тайным островком, о
                            котором
                            будем знать только мы 🤫🤍Налейте себе чашку чая, устраивайтесь поудобнее в любимом диване, и
                            приготовьтесь, будет очень уютно 💫
                        </div>
                        <div class="author-section__author">
                            -Записи Аеки
                        </div>
                    </div>
                </div>

                <img src="../assets/img/author-img.png" alt="" class="author-section__img author-section__img--desktop">
                <img src="../assets/img/author-img-sm.png" alt=""
                     class="author-section__img author-section__img--mobile">
            </div>
        </section>

        <section class="main__section main__section--prize prize-section" id="prize">
            <div class="prize-section__container">
                <div class="prize-section__title prize-section__title--mobile">
                    За приобретение
                    моих <span>записок</span> <br>
                    я приготовила <br>
                    для вас
                    <span>подарки</span>
                </div>
                <img src="../assets/img/wheel.svg" alt="" class="prize-section__wheel">

                <div class="prize-section__second">
                    <div class="prize-section__title prize-section__title--desktop">
                        За приобретение
                        моих <span>записок</span> <br>
                        я приготовила
                        для вас <br>
                        <span>подарки</span>
                    </div>

                    <div class="prize-section__info">
                        <div class="prize-section__text">
                            Крути колесо и получай крутые подарки!
                        </div>

                        <button class="prize-section__btn button" @click="openModal">
                            Выиграть приз
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <section class="main__section main__section--program program-section" id="program">
            <div class="program-section__container">
                <div class="program-section__heading">
                    Гости моих <span>записей</span>
                </div>

                <div class="program-section__cards">
                    <div class="program-section__card">
                        <div class="program-section__title">
                            <img src="../assets/img/program-1.png" alt="">
                            Наргис Сагинова
                        </div>

                        <div class="program-section__items">
                            <div class="program-section__item">
                                <a href="https://www.instagram.com/nargis_saginova/" target="_blank">
                                    @nargis_saginova
                                </a>
                            </div>
                            <div class="program-section__item">Психолог детско-родительских отношений, специалист
                                фундаментального воспитания, а также подростковый карьерный коуч
                            </div>
                            <div class="program-section__item">Тема: Современная мама. Как не выгореть, воспитывая
                                детей
                            </div>
                        </div>
                    </div>

                    <div class="program-section__card program-section__card--blue">
                        <div class="program-section__title program-section__title--blue">
                            <img src="../assets/img/program-2.png" alt="">
                            Акбота Аканова
                        </div>

                        <div class="program-section__items">
                            <div class="program-section__item program-section__item--blue">
                                <a href="https://www.instagram.com/akanova.psy/" target="_blank">
                                    @akanova.psy
                                </a>
                            </div>
                            <div class="program-section__item program-section__item--blue">Эксперт в сфере психологии. Квалифицированный психолог,
                                корпоративный психолог и социолог
                            </div>
                            <div class="program-section__item program-section__item--blue">Тема: Достаточно ли я хорошая?! <br>
                                Синдром отличницы, или что я должна миру
                            </div>
                        </div>
                    </div>

                    <div class="program-section__card program-section__card--yellow">
                        <div class="program-section__title program-section__title--blue">
                            <img src="../assets/img/program-3.png" alt="">
                            Акбота Аканова
                        </div>

                        <div class="program-section__items">
                            <div class="program-section__item program-section__item--blue">
                                <a href="https://www.instagram.com/akanova.psy/" target="_blank">
                                    @akanova.psy
                                </a>
                            </div>
                            <div class="program-section__item program-section__item--blue">Эксперт в сфере психологии. Квалифицированный психолог,
                                корпоративный психолог и социолог
                            </div>
                            <div class="program-section__item program-section__item--blue">Тема: Достаточно ли я хорошая?! <br>
                                Синдром отличницы, или что я должна миру
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Modal @close="closeModal" :class="{'modal--active' : loadedModalState}"/>
    </main>
</template>

<script>
import Modal from "@/components/Modal";
import CountDown from "@/components/CountDown";

export default {
    components: {
        Modal,
        CountDown
    },
    data() {
        return {
            modalState: false,
            price: '3 900'
        };
    },
    methods: {
        openModal() {
            this.$store.dispatch('setModalState', true)
        },
        closeModal() {
            this.$store.dispatch('setModalState', false)
        },
        changePrice(val) {
            this.price = val;
        }
    },
    computed: {
        loadedModalState() {
            return this.$store.getters.loadedModalState
        }
    },
};
</script>
