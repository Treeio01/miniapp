<template>
    <div
      class="relative w-full min-h-[310px] flex items-center justify-center"
    >
      <div
        v-for="(gift, i) in gifts"
        :key="i"
        class="absolute transition-transform transition-opacity transition-blur duration-1000 ease-in-out"
        :class="positionClass(i)"
      >
        <img
          :src="`/src/assets/gifts/${gift}`"
          class="rounded-[50px] transition-all transition-blur duration-1000 ease-in-out"
          :class="isActive(i) ? 'max-w-[300px]' : 'max-w-[156px]'"
          alt=""
        />
  
        <!-- Цена только у активного -->
        <div
          v-if="isActive(i)"
          class="absolute backdrop-blur-[5px] flex bottom-[-19px] left-1/2 -translate-x-1/2 py-[5px] px-2.5 bg-black/5 rounded-[20px] border-t border-[#00AEFF] transition-all duration-1000"
        >
          <span
            class="text-2xl flex items-center gap-[5px] whitespace-nowrap text-white font-Montserrat font-medium leading-[100%] tracking-[-0.00em]"
          >
            {{ prices[i] }} <img src="../assets/emoji/star.png" class="max-w-[32px]" alt="">
          </span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from "vue";
  
  const gifts = ["gift1.png", "gift2.png", "gift3.png", "gift4.png", "gift5.png"];
  const prices = [10000, 20000, 30000, 40000, 50000, 60000];
  
  const activeIndex = ref(0);
  
  const isActive = (i) => i === activeIndex.value;
  
  const prevIndex = computed(
    () => (activeIndex.value - 1 + gifts.length) % gifts.length
  );
  const nextIndex = computed(() => (activeIndex.value + 1) % gifts.length);
  
  const positionClass = (i) => {
    if (i === activeIndex.value) {
      return "z-20 opacity-100 scale-100 translate-x-0 blur-0";
    } else if (i === prevIndex.value) {
      return "-translate-x-[270px] scale-75 blur-[6px] opacity-70 z-10";
    } else if (i === nextIndex.value) {
      return "translate-x-[270px] scale-75 blur-[6px] opacity-70 z-10";
    } else {
      return "opacity-0 scale-50 blur-[10px] pointer-events-none";
    }
  };
  
  onMounted(() => {
    setInterval(() => {
      activeIndex.value = (activeIndex.value + 1) % gifts.length;
    }, 4000);
  });
  </script>
  
  <style>
  .transition-blur {
    transition: all 1s ease-in-out;
  }
  </style>
  