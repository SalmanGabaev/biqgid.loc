<template>
    <v-app-bar app flat dense dark class="header">
        <v-app-bar-nav-icon class="header__trigger-icon">
            <v-icon size="20">mdi-format-indent-decrease</v-icon>
        </v-app-bar-nav-icon>

        <v-btn icon dense>
            <v-icon size="20">mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon size="20">mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon size="20">mdi-crop-free</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon size="20">mdi-dots-vertical</v-icon>
        </v-btn>

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
