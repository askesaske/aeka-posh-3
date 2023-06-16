<template>
    <div class="sidebar">
        <div class="sidebar__close" @click="$emit('close')">
            <svg width="32" height="32">
                <use href="../assets/img/icons.svg#close-2"></use>
            </svg>
        </div>

        <div class="sidebar__links">
            <div class="sidebar__link">Главная</div>
            <div class="sidebar__link" v-scroll-to="{el: '#prize', offset: -100}" @click.passive="$emit('close')">
                Выиграть приз
            </div>
            <div class="sidebar__link" v-scroll-to="{el: '#program', offset: -100}" @click.passive="$emit('close')">
                Программа
            </div>
        </div>

        <button class="sidebar__btn button" @click="openModal">
            ЗАПИСАТЬСЯ
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