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
      <div class="sidebar__link" >Главная</div>
      <div class="sidebar__link" v-scroll-to="{el: '#prize', offset: -100}" @click.passive="$emit('close')">Выиграть приз</div>
      <div class="sidebar__link" v-scroll-to="{el: '#speakers', offset: -100}" @click.passive="$emit('close')">Наши спикеры</div>
      <div class="sidebar__link" v-scroll-to="{el: '#program', offset: -100}" @click.passive="$emit('close')">Программа интенсива</div>
      <div class="sidebar__link" v-scroll-to="{el: '#reviews', offset: -100}" @click.passive="$emit('close')">Отзывы</div>
    </div>

    <button class="sidebar__btn button" @click="openModal">
      Участвовать
    </button>
  </div>
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