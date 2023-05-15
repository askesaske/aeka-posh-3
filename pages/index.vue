<template>
    <main class="main">
        <section class="main__section main__section--welcome welcome-section">
            <div class="welcome-section__container">
                <div class="welcome-section__info">
                    <h1 class="welcome-section__heading">
                        ЗАПИСИ <br>
                        <span>АЕКИ</span>
                    </h1>

                    <button class="welcome-section__btn button" @click="openModal">
                        Записаться
                    </button>

                    <div class="welcome-section__items">
                        <div class="welcome-section__item">
                            <h6>7 дней</h6>
                            <span>душевного разговора <br> с Аекой</span>
                        </div>
                        <div class="welcome-section__item">
                            <h6>24.04</h6>
                            <span>начало <br> программы</span>
                        </div>
                        <div class="welcome-section__item">
                            <h6>5 000 тенге</h6>
                            <span>стоимость</span>
                        </div>
                    </div>
                </div>

                <img src="../assets/img/welcome-img.png" alt="" class="welcome-section__img welcome-section__img--lg">
                <img src="../assets/img/welcome-img-sm.png" alt=""
                     class="welcome-section__img welcome-section__img--sm">
            </div>
        </section>

        <section class="main__section main__section--info info-section">
            <div class="info-section__container">
                <img src="../assets/img/info-img.png" alt="" class="info-section__img">

                <div class="info-section__info">
                    <div class="info-section__heading">
                        У вас будет доступ
                        <br> в <span>закрытый</span> аккаунт
                    </div>
                    <div class="info-section__text">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                        consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </div>
                </div>
            </div>
        </section>

        <section class="main__section main__section--prize prize-section" id="prize">
            <div class="prize-section__container">
                <div class="prize-section__info">
                    <div class="prize-section__title">
                        За приобретение моих записок я приготовила
                        для вас подарки
                    </div>

                    <div class="prize-section__subtitle prize-section__subtitle--desktop">
                        Крути колесо и получай крутые подарки!
                    </div>

                    <button class="prize-section__btn prize-section__btn--desktop button" @click="openModal">
                        ВЫИГРАТЬ ПРИЗ
                    </button>
                </div>

                <img src="../assets/img/wheel-of-fortune.png" alt="" class="prize-section__wheel">

                <div class="prize-section__subtitle prize-section__subtitle--tab">
                    Крути колесо и получай крутые подарки!
                </div>

                <button class="prize-section__btn prize-section__btn--tab button" @click="openModal">
                    ВЫИГРАТЬ ПРИЗ
                </button>
            </div>
        </section>

        <section class="main__section program-section" id="program">
            <div class="program-section__container">
                <div class="program-section__heading">
                    Программа курса
                </div>

                <div class="program-section__items">
                    <div class="program-section__item">
                        <div class="program-section__item-name">
                            <svg width="23" height="23">
                                <use href="../assets/img/icons.svg#rectangle"></use>
                            </svg>
                            Пункт 1
                        </div>

                        <div class="program-section__sub">
                            <div class="program-section__sub-name">
                                <svg width="17" height="18">
                                    <use href="../assets/img/icons.svg#rectangle-fill"></use>
                                </svg>
                                Пункт 1
                            </div>

                            <div class="program-section__sub-name">
                                <svg width="17" height="18">
                                    <use href="../assets/img/icons.svg#rectangle-fill"></use>
                                </svg>
                                Пункт 1
                            </div>

                            <div class="program-section__sub-name">
                                <svg width="17" height="18">
                                    <use href="../assets/img/icons.svg#rectangle-fill"></use>
                                </svg>
                                Пункт 1
                            </div>
                        </div>
                    </div>

                    <div class="program-section__item">
                        <div class="program-section__item-name">
                            <svg width="23" height="23">
                                <use href="../assets/img/icons.svg#rectangle"></use>
                            </svg>
                            Пункт 1
                        </div>

                        <div class="program-section__sub">
                            <div class="program-section__sub-name">
                                <svg width="17" height="18">
                                    <use href="../assets/img/icons.svg#rectangle-fill"></use>
                                </svg>
                                Пункт 1
                            </div>

                            <div class="program-section__sub-name">
                                <svg width="17" height="18">
                                    <use href="../assets/img/icons.svg#rectangle-fill"></use>
                                </svg>
                                Пункт 1
                            </div>

                            <div class="program-section__sub-name">
                                <svg width="17" height="18">
                                    <use href="../assets/img/icons.svg#rectangle-fill"></use>
                                </svg>
                                Пункт 1
                            </div>
                        </div>
                    </div>

                    <div class="program-section__item">
                        <div class="program-section__item-name">
                            <svg width="23" height="23">
                                <use href="../assets/img/icons.svg#rectangle"></use>
                            </svg>
                            Пункт 1
                        </div>

                        <div class="program-section__sub">
                            <div class="program-section__sub-name">
                                <svg width="17" height="18">
                                    <use href="../assets/img/icons.svg#rectangle-fill"></use>
                                </svg>
                                Пункт 1
                            </div>

                            <div class="program-section__sub-name">
                                <svg width="17" height="18">
                                    <use href="../assets/img/icons.svg#rectangle-fill"></use>
                                </svg>
                                Пункт 1
                            </div>

                            <div class="program-section__sub-name">
                                <svg width="17" height="18">
                                    <use href="../assets/img/icons.svg#rectangle-fill"></use>
                                </svg>
                                Пункт 1
                            </div>
                        </div>
                    </div>

                    <div class="program-section__item">
                        <div class="program-section__item-name">
                            <svg width="23" height="23">
                                <use href="../assets/img/icons.svg#rectangle"></use>
                            </svg>
                            Пункт 1
                        </div>

                        <div class="program-section__sub">
                            <div class="program-section__sub-name">
                                <svg width="17" height="18">
                                    <use href="../assets/img/icons.svg#rectangle-fill"></use>
                                </svg>
                                Пункт 1
                            </div>

                            <div class="program-section__sub-name">
                                <svg width="17" height="18">
                                    <use href="../assets/img/icons.svg#rectangle-fill"></use>
                                </svg>
                                Пункт 1
                            </div>

                            <div class="program-section__sub-name">
                                <svg width="17" height="18">
                                    <use href="../assets/img/icons.svg#rectangle-fill"></use>
                                </svg>
                                Пункт 1
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
