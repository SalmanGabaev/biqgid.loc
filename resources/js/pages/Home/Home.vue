<template>
    <main class="layout">
        <div class="layout__header"></div>
        <div class="layout__content"></div>
    </main>
</template>

<script>
    export default {
        name: "Home",
    }
</script>

<style lang="scss">
    .layout {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 3fr;

        &__header {
            background: red;
        }

        &__content {
            background: blue;
        }
    }
</style>
