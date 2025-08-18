<template>

    <TransitionGroup name="live" tag="div" class="flex pt-5 z-30 pl-6 pb-8 w-full overflow-x-hidden gap-5 items-center">
        <LiveBarComponent v-for="(_live, i) in liveComponents" :live="_live" :key="_live.id">
        </LiveBarComponent>
    </TransitionGroup>

</template>
<script setup>
import { onMounted, ref, computed } from 'vue';
import LiveBarComponent from './LiveBarComponent.vue';
const liveComponents = ref([]);
let idCounter = 0
const addLive = (_username, _success) => {
    idCounter++
    liveComponents.value.unshift({
        id: idCounter,
        username: _username,
        success: _success,
        new: true
    })

    liveComponents.value.forEach((item, index) => {
        if (index > 0) item.new = false;
    })
    liveComponents.value = liveComponents.value.slice(0, 3)
}
onMounted(function () {
    addLive("test_1", Math.random() > 0.5);
    setInterval(function () {
        const number = Math.floor(Math.random() * 10);
        addLive("test_" + number, Math.random() > 0.5);
    }, 4000)
})
</script>
<style>
.live-enter-active,
.live-leave-active,
.live-move {
    transition: all 0.5s ease;
}

.live-enter-from {
    opacity: 0;
    transform: translateY(-20px);
}

.live-leave-to {
    opacity: 0;
    transform: translateY(20px);
}
</style>