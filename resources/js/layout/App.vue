<template>
    <v-app class="app-wrapper">
        <app-navigation class="app-wrapper__navigation"></app-navigation>

        <app-header class="app-wrapper__header"></app-header>

        <v-content class="app-wrapper__content">
            <v-container fluid fill-height>
                <router-view></router-view>
            </v-container>
        </v-content>

        <app-footer class="app-wrapper__footer"></app-footer>
    </v-app>
</template>

<script>
    import Header from './Header';
    import Navigation from './Navigation';
    import Footer from './Footer';

    export default {
        name: "App",
        components: {
            'app-header': Header,
            'app-navigation': Navigation,
            'app-footer': Footer,
        }
    }
</script>

<style lang="scss" scoped>
    .app-wrapper {
        &__navigation, &__header {
            background: #032b43ba;
        }
    }
    .container--fluid {
        max-width: 100%;
        padding: 0;
    }
</style>
