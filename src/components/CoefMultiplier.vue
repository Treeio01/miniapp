<template>
  <div
    class="flex w-full items-center rounded-[50px] max-w-[470px] min-h-[65px] bg-black/40"
  >
    <button
      v-for="mult in multipliers"
      :key="mult"
      @click="select(mult)"
      class="flex w-full border rounded-[20px] justify-center items-center px-5 py-[5px] h-full text-[32px] font-semibold leading-[100%] tracking-0 transition-all duration-300"
      :class="
        selected === mult
          ? ' border-[#00AEFF]  bg-black/30 text-white'
          : 'border-gray'
      "
    >
      <span
        class="text-white font-semibold text-[32px] leading-[100%] tracking-0"
      >
        {{ mult }}x
      </span>
    </button>
  </div>
</template>
<script setup>
import { ref } from "vue";

const props = defineProps({
  multipliers: {
    type: Array,
    default: () => [1, 3, 5],
  },
  modelValue: {
    type: Number,
    default: 1,
  },
});

const emit = defineEmits(["update:modelValue"]);

const selected = ref(props.modelValue);

const select = (mult) => {
  selected.value = mult;
  emit("update:modelValue", mult);
};
</script>
