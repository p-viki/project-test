<template>
    <main>
        <div>人口：{{ currentData.resources.population }}</div>
        <div class="building-item" v-for="(item, key) of computedBuilding" :key="key" @click="build(key)">
            {{ item.name }} {{ item.value }}
        </div>
    </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import Storage from '../../utils/storage';
import Timer from '../../utils/timer'
import { TEMPLATE_DATA } from '../../const/templateData'

Storage.set(TEMPLATE_DATA)

const currentData = ref(TEMPLATE_DATA)

const computedBuilding = computed(() => {
    let arr = {}
    for (let item in currentData.value.building) {
        if (currentData.value.building[item].unlocked) {
            arr[item] = currentData.value.building[item]
        }
    }
    return arr
})

const computedLimit = (key) => {
    switch (key) {
        case 'population': return currentData.value.building.hut.value * 2
    }
}

const build = (key) => {
    currentData.value.building[key].value++
}

Timer(() => {
    if (currentData.value.resources.population < computedLimit('population')) {
        currentData.value.resources.population += 1
    }
}, 2000)
</script>

<style lang="less" scoped>
.building-item {
    margin: 10px;
    width: 100px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    background: #c5c5c59f;
}
</style>
