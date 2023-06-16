<template>
    <main class="main">
        <section class="main__section main__section--welcome welcome-section">
            <img src="../assets/img/welcome-bg.png" alt="" class="welcome-section__bg">
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

                    <div class="cards-section__card cards-section__card--orange">
                        <img src="../assets/img/card-2.png" alt="">
                        <p>Длительность</p>
                        <h4>7 дней</h4>
                    </div>
                </div>
                <div class="cards-section__long">
                    <img src="../assets/img/card-3.png" alt="">
                    <div class="cards-section__text-wrap">
                        <p>
                            <span>Стоимость</span>
                            <span>5 000 тенге</span>
                        </p>
                        <h6>3 000 тенге</h6>
                    </div>
                    <img src="../assets/img/sticker.png" alt="" class="cards-section__sticker">
                </div>
                <button class="cards-section__btn button" @click="openModal">Записаться</button>
            </div>
        </section>

        <section class="main__section main__section--hueta hueta-section">
            <div class="hueta-section__container">
                <div class="hueta-section__first">
                    <div class="hueta-section__heading">
                        У вас будет доступ <br>
                        <span>в закрытый</span> аккаунт
                    </div>

                    <div class="hueta-section__text">
                        Привет! В своих записях я делюсь своими мыслями обо всем на свете, говорю о вере, и просто
                        рассуждаю о нашем, женском)Давно хотела собрать в одном, укромном месте всё, что трогает мою
                        душу и то, о чем могу говорить часами 😊Пусть это будет нашим с вами тайным островком, о котором
                        будем знать только мы 🤫🤍Налейте себе чашку чая, устраивайтесь поудобнее в любимом диване, и
                        приготовьтесь, будет очень уютно 💫
                    </div>
                    <div class="hueta-section__author">
                        -Записи Аеки
                    </div>
                </div>

                <img src="../assets/img/hueta-img.png" alt="" class="hueta-section__img hueta-section__img--desktop">
                <img src="../assets/img/hueta-img-sm.png" alt="" class="hueta-section__img hueta-section__img--mobile">
            </div>
        </section>

        <section class="main__section main__section--prize prize-section" id="prize">
            <div class="prize-section__container">
                <div class="prize-section__title">
                    За приобретение <br class="prize-section__space prize-section__space--mobile">
                    моих <span>записок</span> <br>
                    я приготовила <br class="prize-section__space prize-section__space--mobile">
                    для вас <br class="prize-section__space prize-section__space--desktop">
                    <span>подарки</span>
                </div>

                <div class="prize-section__row">
                    <img src="../assets/img/wheel.svg" alt="" class="prize-section__wheel">

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
                            Букенова Гайникен
                        </div>

                        <div class="program-section__items">
                            <div class="program-section__item">
                                <a href="https://www.instagram.com/gainikenbee/" target="_blank">
                                    @gainikenbee
                                </a>
                            </div>
                            <div class="program-section__item">Основательница женского сообщества @kisva_community</div>
                            <div class="program-section__item">Тема: Нафс</div>
                        </div>
                    </div>

                    <div class="program-section__card">
                        <div class="program-section__title">
                            <img src="../assets/img/program-2.png" alt="">
                            Букенова Гайникен
                        </div>

                        <div class="program-section__items">
                            <div class="program-section__item">
                                <a href="https://www.instagram.com/gainikenbee/" target="_blank">
                                    @gainikenbee
                                </a>
                            </div>
                            <div class="program-section__item">Основательница женского сообщества @kisva_community</div>
                            <div class="program-section__item">Тема: Нафс</div>
                        </div>
                    </div>

                    <div class="program-section__card">
                        <div class="program-section__title">
                            <img src="../assets/img/program-3.png" alt="">
                            Букенова Гайникен
                        </div>

                        <div class="program-section__items">
                            <div class="program-section__item">
                                <a href="https://www.instagram.com/gainikenbee/" target="_blank">
                                    @gainikenbee
                                </a>
                            </div>
                            <div class="program-section__item">Основательница женского сообщества @kisva_community</div>
                            <div class="program-section__item">Тема: Нафс</div>
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

export default {
    components: {
        Modal
    },
    data() {
        return {
            modalState: false
        };
    },
    methods: {
        openModal() {
            this.$store.dispatch('setModalState', true)
        },
        closeModal() {
            this.$store.dispatch('setModalState', false)
        }
    },
    computed: {
        loadedModalState() {
            return this.$store.getters.loadedModalState
        }
    },
};
</script>
