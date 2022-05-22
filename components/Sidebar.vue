<template>
  <div class="sidebar">

    <img src="../assets/img/sidebar-shadow-right.png" alt="" class="sidebar__shadow sidebar__shadow--right">
    <img src="../assets/img/sidebar-shadow-left.png" alt="" class="sidebar__shadow sidebar__shadow--left">

    <div class="sidebar__close" @click="$emit('close')">
      <svg width="24" height="24">
        <use href="../assets/img/icons.svg#close"></use>
      </svg>
      Закрыть
    </div>

    <div class="sidebar__links">
      <div class="sidebar__link">Главная</div>
      <div class="sidebar__link">Выиграть приз</div>
      <div class="sidebar__link">Наши спикеры</div>
      <div class="sidebar__link">Программа интенсива</div>
      <div class="sidebar__link">Отзывы</div>
    </div>

    <button class="sidebar__btn button">
      Участвовать
    </button>
  </div>
</template>

<script>
export default {}
</script>