<template>
  <header class="header">
    <div class="header__container">
      <svg class="header__burger" width="32" height="32" @click="sidebar = true">
        <use href="../assets/img/icons.svg#burger"></use>
      </svg>
      <ul class="header__links">
        <li class="header__link">Главная</li>
        <li class="header__link">Выиграть приз</li>
        <li class="header__link">Наши спикеры</li>
        <li class="header__link">Программа интенсива</li>
        <li class="header__link">Отзывы</li>
      </ul>

      <a href="#" class="header__btn">
        <svg width="24" height="24">
          <use href="../assets/img/icons.svg#wpp"></use>
        </svg>

        <span>+7 778 233 6655</span>
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