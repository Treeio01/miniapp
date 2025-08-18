<template>
    <div :class="live.new ? 'bg-[#5CFF61]/30 new' : 'bg-black/50'"
        class="flex transition-colors duration-800 ease-in-out min-w-[238px] max-w-[238px] rounded-[20px] p-2.5 w-full  bg-[#5CFF61]/30 gap-2.5 items-center">

        <img src="../assets/pasha.png" class="max-w-[50px]" alt="">
        <div class="flex flex-col gap-[9px]">
            <span class="text-white opacity-80 font-semibold leading-[100%] tracking-0 font-sf-pro">
                {{ live.username }}
            </span>
            <span class="text-white font-semibold leading-[100%] tracking-0 font-sf-pro">
                {{ live.success ? " ОХУ.. ВЫБИЛ" : " Не выбил" }}
            </span>
        </div>
        <span class="text-[32px]">
            🎰
        </span>

    </div>
</template>
<script setup>
import { defineProps } from 'vue';

defineProps({
    live: Object
})
</script>
