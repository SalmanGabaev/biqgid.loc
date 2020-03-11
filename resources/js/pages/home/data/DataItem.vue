<template>
    <tr>
        <td class="align-text-top py-2">
            <span>{{ item.location }}</span>
            <br>
            <span>27.01.2020</span>
        </td>

        <td class="align-text-top py-2">
            <span>{{ item.destination }}</span>
            <br>
            <span>27.02.2020</span>
        </td>

        <td class="align-text-top py-2">
            <span class="d-block">
                {{ item.suggestion.model }}, {{item.suggestion.loading}}
            </span>
            <span class="d-block font-weight-bold">
                Д. Ш. В. - {{item.suggestion.length}}/{{item.suggestion.height}}/{{item.suggestion.width}}
            </span>
            <span class="d-block">
                {{item.suggestion.comment}}
            </span>
        </td>
        <td class="align-text-top py-2">
            <p class="mb-2">{{ item.suggestion.created_at }}</p>
            <v-rating
                background-color="orange lighten-3"
                color="orange"
                dense
                size="20px"
            ></v-rating>
        </td>
        <td class="align-text-top py-2 text-danger">
            <div>{{ item.wager }}{{ item.currency}}</div>
            <div>
                <v-btn small class="mt-3" outlined color="indigo">Подробнее...</v-btn>
            </div>
        </td>
    </tr>
</template>

<script>
    export default {
        props: ['item'],
        name: "DataItem"
    }
</script>

<style scoped>
    td {
        font-size: 14px;
        font-family: monospace;
        color: #01395a;
    }
</style>
