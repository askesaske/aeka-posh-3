<template>
  <div class="modal modal--active">
    <div class="modal__container modal__container--sm">

      <div class="modal__wrapper">
        <div class="modal__title modal__title--normal">
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
