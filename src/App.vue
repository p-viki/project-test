<template>
  <main>
    <router-view v-slot="{ Component }">
      <transition name="fade-in" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="scss">
@import './style/global.scss';
</style>
