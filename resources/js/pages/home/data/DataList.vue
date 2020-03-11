<template>
    <v-simple-table>
        <template v-slot:default>
            <thead>
            <tr>
                <th class="text-left">Место загрузки</th>
                <th class="text-left">Место выгрузки</th>
                <th class="text-left">Описание</th>
                <th class="text-left">Заявлено</th>
                <th class="text-left">Ставка</th>
            </tr>
            </thead>
            <tbody>
                <item v-for="item in routes" :key="item.id" :item="item">

                </item>
            </tbody>
        </template>
    </v-simple-table>
</template>

<script>
    import Item from './DataItem';

    export default {
        name: "DataList",
        components: {Item},
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
        },
    }
</script>

<style scoped>

</style>
