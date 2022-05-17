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

            <form class="modal__form">
              <div class="modal__input-block input-block">
                <input type="text" name="input-text" required spellcheck="false">
                <span class="placeholder">
                Введите ФИО
              </span>
              </div>

              <div class="modal__input-block input-block">
                <input type="text"
                       name="input-text"
                       required
                       spellcheck="false"
                       v-mask="'+7 (###) ###-##-##'">
                <span class="placeholder">
                Введите номер WhatsApp
              </span>
              </div>

              <div class="modal__input-block input-block">
                <input type="email" name="input-text" required spellcheck="false">
                <span class="placeholder">
                Введите эл. почту
              </span>
              </div>

              <div class="modal__input-block input-block">
                <input type="text" name="input-text" required spellcheck="false">
                <span class="placeholder">
                Введите ваш инстаграм
              </span>
              </div>

              <button class="modal__btn button">
                Перейти к оплате
              </button>
            </form>
          </div>
        </div>
      </div>

      <div class="modal__wrapper">
        <div class="modal__title">
          Получи свой приз!
        </div>
        <div class="modal__subtitle">
          Крути барабан и выигрывай прямо сейчас
        </div>

        <div class="modal__wheel">
          <img src="../assets/img/prize-arrow.svg" alt="" class="modal__arrow">
          <img src="../assets/img/wheel-of-fortune.png" alt="" class="modal__wheel">
        </div>

        <button class="modal__btn button">
          Крутить барабан
        </button>
      </div>

      <div class="modal__wrapper">
        <div class="modal__title modal__title--mb40">
          Поздравляем!
        </div>

        <div class="modal__prize-box">
          <img src="../assets/img/prize-img.png" alt="">

          <p>Вы выиграли</p>
          <h3>Курс по Face-массажу!</h3>
        </div>

        <div class="modal__under-text">
          Приз и доступ к курсу придет на amina.dautova@gmail.com!
        </div>

        <button class="modal__btn button">
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
export default {}
</script>