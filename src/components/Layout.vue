<script setup>
import { ref } from 'vue'
</script>

<template>
  <div class="flex flex-col relative bg-black w-full h-screen overflow-x-hidden">
    <div class="flex min-w-[590px] absolute min-h-[305px] left-1/2 -translate-x-1/2 top-[-152px] circle-blur"></div>
    <div class="flex min-w-[590px] absolute min-h-[248px] left-1/2 -translate-x-1/2 bottom-0 circle-blur"></div>
    <slot name="navbar"></slot>
    <slot name="live"></slot>
    <slot name="content"></slot>
  </div>
</template>

<style scoped>
</style>
