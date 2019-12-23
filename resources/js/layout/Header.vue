<template>
    <v-app-bar app flat class="header">
        <v-app-bar-nav-icon class="header__trigger-icon">
            <v-icon>mdi-format-indent-decrease</v-icon>
        </v-app-bar-nav-icon>
        <v-spacer/>

        <v-toolbar-items>
            <v-btn text>Регистрация</v-btn>
            <v-btn text>Войти</v-btn>
        </v-toolbar-items>
    </v-app-bar>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style lang="scss" scoped>
    .header {
        &__trigger-icon {
            outline: none;
        }
    }
</style>
