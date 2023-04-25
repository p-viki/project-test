<template>
  <router-view v-slot="{ Component }">
    <transition name="fade-in" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style lang="less">
@import './style/global.less';
</style>
