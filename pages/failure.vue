<template>
  <div class="modal modal--active">
    <img src="../assets/img/quote-shadow-left.png" alt="" class="modal__left">
    <img src="../assets/img/quote-shadow-right.png" alt="" class="modal__right">

    <div class="modal__container modal__container--sm">

      <div class="modal__wrapper">
        <div class="modal__title">
          Произошла ошибка, попробуйте еще раз
        </div>
        <button class="modal__btn button" @click="$router.push('/')">
          Хорошо
        </button>
      </div>

    </div>
  </div>
</template>

<script>
export default {}
</script>
