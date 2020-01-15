<template>
    <main class="layout">
        <div class="layout__header">
            <h1>Home page</h1>
        </div>
        <div class="layout__content"></div>
    </main>
</template>

<script>
    export default {
        name: "home",
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
