<template>
    <v-col cols="12" md="12" class="filter">
        <v-card class="p-2 filter__card" flat>
            <a-form layout="inline" class="filter__form">
                <a-form-item label="Что ищем ? " class="filter__item ml-3" has-feedback>
                    <a-select defaultValue="транспорт" style="width: 120px">
                        <a-select-option value="транспорт">транспорт</a-select-option>
                        <a-select-option value="груз">груз</a-select-option>
                    </a-select>
                </a-form-item>

                <a-form-item label="Откуда" class="filter__item ml-4" has-feedback>
                    <a-input v-model="startPoint" placeholder="Россия, Москва"/>
                </a-form-item>

                <div class="filter__icon d-inline-block mx-3">
                    <a-icon type="right" />
                </div>

                <a-form-item label="Куда" class="filter__item" has-feedback>
                    <a-input v-model="startPoint" placeholder="Россия, Москва"/>
                </a-form-item>

                <a-form-item label="Дата" class="filter__item ml-4" has-feedback>
                    <a-date-picker></a-date-picker>
                </a-form-item>

                <a-form-item  class="filter__item ml-4" has-feedback>
                    <a-button class="filter__button" type="primary" icon="search">Найти</a-button>
                </a-form-item>

                <a-form-item  class="filter__item ml-2" has-feedback>
                    <a-button class="filter__button" type="dashed" icon="environment">Найти на карте</a-button>
                </a-form-item>

                <a-form-item  class="filter__item ml-2" has-feedback>
                    <a-button type="link">расширенные фильтры</a-button>
                </a-form-item>
            </a-form>

            <v-row>


                <!--<v-col cols="12" md="2">
                    <a-form class="m-0">
                        <a-form-item label='Username'>
                            <a-input
                                v-decorator="[
            'username',
            {
              rules: [{ required: true, message: 'Username is required!' }],
            }
          ]"
                            />
                        </a-form-item>
                    </a-form>
                </v-col>

                <v-col cols="12" md="3">
                    <a-form>
                        <a-form-item label="Откуда">
                            <a-input v-model="startPoint"/>
                        </a-form-item>
                    </a-form>
                </v-col>

                <v-col cols="12" md="2">
                    <a-form>
                        <a-form-item label="Откуда">
                            <a-input v-model="startPoint"/>
                        </a-form-item>
                    </a-form>
                </v-col>

                <v-col cols="12" md="2">
                    <a-form>
                        <a-form-item label="Откуда">
                            <a-input v-model="startPoint"/>
                        </a-form-item>
                    </a-form>
                </v-col>-->
            </v-row>
        </v-card>
    </v-col>
</template>

<script>
    export default {
        name: "FilterComponent",
        data: () => {
            return {
                startPoint: null,
                endPoint: null,
                radiusStartPoint: null,
                radiusEndPoint: null,
                date: null,
            }
        }
    }
</script>

<style lang="scss" scoped>
    #components-form-demo-vuex .language-bash {
        max-width: 400px;
        border-radius: 6px;
        margin-top: 24px;
    }
    .ant-form-item {
        margin: 0;
    }
    .filter__icon {
        margin-top: 6px;
    }
    .ant-btn-primary i.anticon {
        position: relative;
        top: -2px;
    }
</style>
