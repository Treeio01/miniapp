<template>
  <div class="flex max-w-[154px] max-h-[154px]">
    <img
      :src="`/src/assets/gifts/gift${numberGift}.png`"
      class="rounded-[20px]"
      alt=""
    />
  </div>
</template>
<script setup>
defineProps({
  numberGift: Number,
});
</script>
