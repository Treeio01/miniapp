<template>
  <OnlineBlock type="main"></OnlineBlock>
  <div class="flex flex-col items-center z-30">
    <div
      class="flex py-[5px] px-2.5 bg-black/25 rounded-[20px] border-t border-[#00AEFF]"
    >
      <span
        class="text-lg text-white font-Montserrat font-medium leading-[100%] tracking-[-0.00em]"
      >
        🍋🍋🍋 что бы получить
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
    <div
      class="flex w-full items-center rounded-[50px] max-w-[470px] min-h-[65px] bg-black/40"
    >
      <div
        class="flex w-full border border-[#00AEFF] rounded-[20px] bg-black/30 py-[5px] h-full justify-center items-center px-5"
      >
        <span
          class="text-white font-semibold text-[32px] leading-[100%] tracking-0"
        >
          1x
        </span>
      </div>
      <div class="flex w-full py-[5px] h-full justify-center items-center px-5">
        <span
          class="text-white font-semibold text-[32px] leading-[100%] tracking-0"
        >
          3x
        </span>
      </div>
      <div class="flex w-full py-[5px] h-full justify-center items-center px-5">
        <span
          class="text-white font-semibold text-[32px] leading-[100%] tracking-0"
        >
          5x
        </span>
      </div>
    </div>

    <button
      class="w-full mb-[150px] relative overflow-hidden max-w-[470px] mt-5 rounded-[40px] bg-linear-to-r py-[31px] px-[70px] from-[#01D9FF] to-[#0051FF]"
    >
      <img
        src="../assets/img1.png"
        class="absolute bottom-0 left-[6px] max-w-[134px]"
        alt=""
      />
      <img
        src="../assets/img2.png"
        class="absolute top-0 max-w-[120px] right-0"
        alt=""
      />
      <span
        class="text-[32px] text-white leading-[100%] tracking-0 font-medium font-sf-pro"
      >
        КРУТИТЬ за 40 ⭐
      </span>
    </button>
  </div>
</template>

<script setup>
import OnlineBlock from "../components/OnlineBlock.vue";
import SliderGifts from "../components/SliderGifts.vue";
</script>
