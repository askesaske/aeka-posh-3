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
                      1) Старт: 22.05 <br>
                      2) У вас будет доступ на закрытый аккаунт (грамматическая ошибка там)<br>
                      3) Записи Аеки 📖 <br>
                      Привет! В своих записях я делюсь своими мыслями обо всем на свете, говорю о вере, и просто рассуждаю о нашем, женском)

                      Давно хотела собрать в одном, укромном месте всё, что трогает мою душу и то, о чем могу говорить часами 😊

                      Пусть это будет нашим с вами тайным островком, о котором будем знать только мы 🤫🤍

                      Налейте себе чашку чая, устраивайтесь поудобнее в любимом диване, и приготовьтесь, будет очень уютно 💫
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
                          1. Гайникен
                        </div>

                        <div class="program-section__sub">
                            <div class="program-section__sub-name">
                                <svg width="17" height="18">
                                    <use href="../assets/img/icons.svg#rectangle-fill"></use>
                                </svg>
                              <a href="https://www.instagram.com/gainikenbee" target="_blank" class="program-section__anchor">@gainikenbee</a>
                            </div>

                            <div class="program-section__sub-name">
                                <svg width="17" height="18">
                                    <use href="../assets/img/icons.svg#rectangle-fill"></use>
                                </svg>
                              <a href="https://www.instagram.com/kisva_community" target="_blank" class="program-section__anchor">Основательница женского сообщества @kisva_community</a>

                            </div>

                            <div class="program-section__sub-name">
                                <svg width="17" height="18">
                                    <use href="../assets/img/icons.svg#rectangle-fill"></use>
                                </svg>
                              Тема: Нафс
                            </div>
                        </div>
                    </div>

                    <div class="program-section__item">
                        <div class="program-section__item-name">
                            <svg width="23" height="23">
                                <use href="../assets/img/icons.svg#rectangle"></use>
                            </svg>
                            2. Акгул Абдали
                        </div>

                      <div class="program-section__sub">
                        <div class="program-section__sub-name">
                          <svg width="17" height="18">
                            <use href="../assets/img/icons.svg#rectangle-fill"></use>
                          </svg>
                          <a href="https://www.instagram.com/akgul.abdali" target="_blank" class="program-section__anchor">@akgul.abdali</a>
                        </div>

                        <div class="program-section__sub-name">
                          <svg width="17" height="18">
                            <use href="../assets/img/icons.svg#rectangle-fill"></use>
                          </svg>
                          <a class="program-section__anchor">Психолог с опытом 9 лет</a>

                        </div>

                        <div class="program-section__sub-name">
                          <svg width="17" height="18">
                            <use href="../assets/img/icons.svg#rectangle-fill"></use>
                          </svg>
                          Тема: Личность и Эго. <br>
                          Как помогает или мешает нам ЭГО? <br>
                          Как использовать в плюс
                        </div>
                      </div>

                    </div>

                    <div class="program-section__item">
                        <div class="program-section__item-name">
                            <svg width="23" height="23">
                                <use href="../assets/img/icons.svg#rectangle"></use>
                            </svg>
                            3. Ая Нурдаулеткызы
                        </div>

                      <div class="program-section__sub">
                        <div class="program-section__sub-name">
                          <svg width="17" height="18">
                            <use href="../assets/img/icons.svg#rectangle-fill"></use>
                          </svg>
                          <a href="https://www.instagram.com/aya_nurdauletkyzy" target="_blank" class="program-section__anchor">@aya_nurdauletkyzy</a>
                        </div>

                        <div class="program-section__sub-name">
                          <svg width="17" height="18">
                            <use href="../assets/img/icons.svg#rectangle-fill"></use>
                          </svg>
                          <a class="program-section__anchor">Магистр педогогики и психологии.
                            Практикующий психолог в методе транзактный анализ.</a>

                        </div>

                        <div class="program-section__sub-name">
                          <svg width="17" height="18">
                            <use href="../assets/img/icons.svg#rectangle-fill"></use>
                          </svg>
                          Тема: «Нафс и внутренний ребенок» <br>
                          Как не обесценивать себя и не взрастить эго?<br>
                          Как развивать и поддерживать себя в трудные моменты жизни?<br>
                          Как достигать цели без критики?
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
