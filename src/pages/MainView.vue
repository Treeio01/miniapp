<template>
  <OnlineBlock type="main"></OnlineBlock>
  <div class="flex flex-col items-center z-30 w-full max-w-[470px]">
    <div
      class="flex py-[5px] px-2.5 bg-black/25 rounded-[20px] border-t border-[#00AEFF]"
    >
      <span
        class="text-lg flex items-center gap-[5px] text-white font-Montserrat font-medium leading-[100%] tracking-[-0.00em]"
      >
        <img src="../assets/emoji/lime.png" class="max-w-[24px]" alt="">
        <img src="../assets/emoji/lime.png" class="max-w-[24px]" alt="">
        <img src="../assets/emoji/lime.png" class="max-w-[24px]" alt="">
        что бы получить
      </span>
    </div>
    <h1
      class="text-white z-30 font-Montserrat font-semibold text-[50px] leading-[100%] tracking-[-0.0em]"
    >
      Lunar Snake
    </h1>
    <SliderGifts></SliderGifts>
    <div class="flex py-[25px] pb-5">
      <img src="../assets/gifts/slot.gif" class="max-w-[290px]" alt="" />
    </div>
    <CoefMultiplier v-model="multiplier"></CoefMultiplier>

    <button
      class="w-full mb-[150px]  relative overflow-hidden max-w-[470px] mt-5 rounded-[40px] bg-linear-to-r py-[31px] px-[70px] from-[#01D9FF] to-[#0051FF]"
    >
      <img
        src="../assets/img1.png"
        class="absolute bottom-0 left-[6px] z-30 max-w-[134px]"
        alt=""
      />
      <img
        src="../assets/img2.png"
        class="absolute top-0 max-w-[120px] z-30 right-0"
        alt=""
      />
      <span
        class="text-[32px] justify-center flex gap-[5px] items-center relative z-50 text-white leading-[100%] tracking-0 font-medium font-Montserrat"
      >
        КРУТИТЬ за 40  <img src="../assets/emoji/star.png" class="max-w-[32px]" alt="">
      </span>
    </button>
  </div>
</template>

<script setup>
import CoefMultiplier from "../components/CoefMultiplier.vue";
import OnlineBlock from "../components/OnlineBlock.vue";
import SliderGifts from "../components/SliderGifts.vue";
import { ref } from "vue";

const multiplier = ref(1);
</script>
