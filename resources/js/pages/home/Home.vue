<template>
    <main class="layout">
        <div class="layout__header header">
            <filter-component></filter-component>
        </div>
        <div class="layout__content">
            <main class="wrapper-data layout__main">
                <v-card flat>
                    <v-card-title>
                        <p class="subtitle-1 m-0 px-3">Все объявления</p>
                    </v-card-title>

                    <v-card-text>
                        <data-list></data-list>
                    </v-card-text>
                </v-card>
            </main>
        </div>
    </main>
</template>

<script>
    import DataList from './data/DataList';

    export default {
        name: "home",

        components: {
          DataList,
        },

        data: () => {
            return {
                routes: [
                    {
                        id: 1,
                        location: 'Киргизия Бишкек',
                        destination: 'Казахстан Алматы',
                        distance: 240,
                        wager: 1200,
                        currency: '$',
                        suggestion: {
                            category: 'Транспорт',
                            model: 'Рефрежиратор',
                            status: 'Ожидание',
                            loading: 'Прицеп',
                            tonnage: 10,
                            volume: 12,
                            length: 2.5,
                            height: 1.2,
                            width: 1.4,
                            comment: 'Мой комментарий',
                            created_at: '20.01.2020 15:40'
                        },

                    },

                    {
                        id: 2,
                        location: 'Киргизия Бишкек',
                        destination: 'Казахстан Алматы',
                        distance: 240,
                        wager: 1200,
                        currency: '$',
                        suggestion: {
                            category: 'Транспорт',
                            model: 'Рефрежиратор',
                            status: 'Ожидание',
                            loading: 'Прицеп',
                            tonnage: 10,
                            volume: 12,
                            length: 2.5,
                            height: 1.2,
                            width: 1.4,
                            comment: 'Мой комментарий',
                            created_at: '20.01.2020 15:40'
                        },

                    },

                    {
                        id: 3,
                        location: 'Киргизия Бишкек',
                        destination: 'Казахстан Алматы',
                        distance: 240,
                        wager: 1200,
                        currency: '$',
                        suggestion: {
                            category: 'Транспорт',
                            model: 'Рефрежиратор',
                            status: 'Ожидание',
                            loading: 'Прицеп',
                            tonnage: 10,
                            volume: 12,
                            length: 2.5,
                            height: 1.2,
                            width: 1.4,
                            comment: 'Мой комментарий',
                            created_at: '20.01.2020 15:40'
                        },

                    },

                    {
                        id: 4,
                        location: 'Киргизия Бишкек',
                        destination: 'Казахстан Алматы',
                        distance: 240,
                        wager: 1200,
                        currency: '$',
                        suggestion: {
                            category: 'Транспорт',
                            model: 'Рефрежиратор',
                            status: 'Ожидание',
                            loading: 'Прицеп',
                            tonnage: 10,
                            volume: 12,
                            length: 2.5,
                            height: 1.2,
                            width: 1.4,
                            comment: 'Мой комментарий',
                            created_at: '20.01.2020 15:40'
                        },

                    },

                    {
                        id: 5,
                        location: 'Киргизия Бишкек',
                        destination: 'Казахстан Алматы',
                        distance: 240,
                        wager: 1200,
                        currency: '$',
                        suggestion: {
                            category: 'Транспорт',
                            model: 'Рефрежиратор',
                            status: 'Ожидание',
                            loading: 'Прицеп',
                            tonnage: 10,
                            volume: 12,
                            length: 2.5,
                            height: 1.2,
                            width: 1.4,
                            comment: 'Мой комментарий',
                            created_at: '20.01.2020 15:40'
                        },

                    },

                    {
                        id: 6,
                        location: 'Киргизия Бишкек',
                        destination: 'Казахстан Алматы',
                        distance: 240,
                        wager: 1200,
                        currency: '$',
                        suggestion: {
                            category: 'Транспорт',
                            model: 'Рефрежиратор',
                            status: 'Ожидание',
                            loading: 'Прицеп',
                            tonnage: 10,
                            volume: 12,
                            length: 2.5,
                            height: 1.2,
                            width: 1.4,
                            comment: 'Мой комментарий',
                            created_at: '20.01.2020 15:40'
                        },

                    },

                    {
                        id: 7,
                        location: 'Киргизия Бишкек',
                        destination: 'Казахстан Алматы',
                        distance: 240,
                        wager: 1200,
                        currency: '$',
                        suggestion: {
                            category: 'Транспорт',
                            model: 'Рефрежиратор',
                            status: 'Ожидание',
                            loading: 'Прицеп',
                            tonnage: 10,
                            volume: 12,
                            length: 2.5,
                            height: 1.2,
                            width: 1.4,
                            comment: 'Мой комментарий',
                            created_at: '20.01.2020 15:40'
                        },

                    },

                    {
                        id: 8,
                        location: 'Киргизия Бишкек',
                        destination: 'Казахстан Алматы',
                        distance: 240,
                        wager: 1200,
                        currency: '$',
                        suggestion: {
                            category: 'Транспорт',
                            model: 'Рефрежиратор',
                            status: 'Ожидание',
                            loading: 'Прицеп',
                            tonnage: 10,
                            volume: 12,
                            length: 2.5,
                            height: 1.2,
                            width: 1.4,
                            comment: 'Мой комментарий',
                            created_at: '20.01.2020 15:40'
                        },

                    },

                    {
                        id: 9,
                        location: 'Киргизия Бишкек',
                        destination: 'Казахстан Алматы',
                        distance: 240,
                        wager: 1200,
                        currency: '$',
                        suggestion: {
                            category: 'Транспорт',
                            model: 'Рефрежиратор',
                            status: 'Ожидание',
                            loading: 'Прицеп',
                            tonnage: 10,
                            volume: 12,
                            length: 2.5,
                            height: 1.2,
                            width: 1.4,
                            comment: 'Мой комментарий',
                            created_at: '20.01.2020 15:40'
                        },

                    },

                    {
                        id: 10,
                        location: 'Киргизия Бишкек',
                        destination: 'Казахстан Алматы',
                        distance: 240,
                        wager: 1200,
                        currency: '$',
                        suggestion: {
                            category: 'Транспорт',
                            model: 'Рефрежиратор',
                            status: 'Ожидание',
                            loading: 'Прицеп',
                            tonnage: 10,
                            volume: 12,
                            length: 2.5,
                            height: 1.2,
                            width: 1.4,
                            comment: 'Мой комментарий',
                            created_at: '20.01.2020 15:40'
                        },

                    },

                    {
                        id: 11,
                        location: 'Киргизия Бишкек',
                        destination: 'Казахстан Алматы',
                        distance: 240,
                        wager: 1200,
                        currency: '$',
                        suggestion: {
                            category: 'Транспорт',
                            model: 'Рефрежиратор',
                            status: 'Ожидание',
                            loading: 'Прицеп',
                            tonnage: 10,
                            volume: 12,
                            length: 2.5,
                            height: 1.2,
                            width: 1.4,
                            comment: 'Мой комментарий',
                            created_at: '20.01.2020 15:40'
                        },

                    },
                ],
            }
        }
    }
</script>

<style lang="scss" scoped>
    .layout {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 80px 1fr;

        &__header {
            padding: 12px;
            &__title {
                margin: 0px;
            }
        }

        &__content {
            padding: 0 12px;
        }

        &__main {
            background: #fff;
        }
    }
</style>
