<template>
    <v-navigation-drawer dark app class="navigation">
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="navigation__title"></v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <v-list dense nav class="navigation__list nav-list">
            <v-list-item link class="nav-list__item" v-model="active">
                <v-list-item-content class="nav-list__content">
                    <v-list-item-title class="nav-list__title">Главная</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-item link class="nav-list__item">
                <v-list-item-content class="nav-list__content">
                    <v-list-item-title class="nav-list__title">Транспорт</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-item link class="nav-list__item">
                <v-list-item-content class="nav-list__content">
                    <v-list-item-title class="nav-list__title">Грузы</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-item link class="nav-list__item">
                <v-list-item-content class="nav-list__content">
                    <v-list-item-title class="nav-list__title">Тендеры</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-item link class="nav-list__item">
                <v-list-item-content class="nav-list__content">
                    <v-list-item-title class="nav-list__title">Новости</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-item link class="nav-list__item">
                <v-list-item-content class="nav-list__content">
                    <v-list-item-title class="nav-list__title">Страхование</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-item link class="nav-list__item">
                <v-list-item-content class="nav-list__content">
                    <v-list-item-title class="nav-list__title">Форум</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-item link class="nav-list__item">
                <v-list-item-content class="nav-list__content">
                    <v-list-item-title class="nav-list__title">Рейтинг участноков</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        name: "Navigation",
        data: () => {
            return {
                active: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .navigation {
        &__title {
            height: 35px !important;
            background: rgba(255, 255, 255, 0.2);
            margin-top: 3px;
        }
        &__list {
            padding: 0px;
            margin-top: 15px;
        }
    }

    .nav-list {
        &__item {
            border-radius: 0;
            padding: 0 16px;
        }
        .v-list-item--active {
            background: #1890ff;
        }
    }
</style>
