<template>
  <header class="header">
    <div class="header__container">
      <svg class="header__burger" width="34" height="34" @click="sidebar = true">
        <use href="../assets/img/icons.svg#burger"></use>
      </svg>
      <ul class="header__links">
        <li class="header__link">Главная</li>
        <li class="header__link" v-scroll-to="{el: '#prize', offset: -100}">Выиграть приз</li>
        <li class="header__link" v-scroll-to="{el: '#program', offset: -100}">Программа</li>
      </ul>

      <a href="https://wa.me/message/QGQGYLGDBLRVC1" class="header__btn" target="_blank">
        <svg width="32" height="32">
          <use href="../assets/img/icons.svg#wpp"></use>
        </svg>

        <span>+7 776 502 3636</span>
      </a>
    </div>

    <Sidebar :class="{'sidebar--active' : sidebar}" @close="sidebar = false" />
  </header>
</template>

<script>
import Sidebar from "@/components/Sidebar";
export default {
  components: {
    Sidebar
  },
  data() {
    return {
      sidebar: false
    }
  }
}
</script>