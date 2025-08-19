<template>
  <OnlineBlock type="gifts"></OnlineBlock>
  <div class="flex flex-col items-center z-30">
    <div
      class="flex z-30 p-2.5 bg-black/25 rounded-t-[20px] border-t border-[#00AEFF]"
    >
      <span
        class="text-[32px] text-white font-Montserrat font-light leading-[100%] tracking-[-0.00em]"
      >
        12 Gifts | 30.59
        <span
          class="bg-clip-text text-transparent bg-gradient-to-r from-[#01D9FF] to-[#0051FF]"
        >
          TON
        </span>
      </span>
    </div>
    <div
      class="flex flex-wrap z-30 min-h-[782px] max-h-[782px] overflow-y-scroll max-w-[546px] p-5 bg-black/25 rounded-[20px] border border-[#00AEFF] w-full"
    >
      <div class="flex w-full flex-wrap h-max gap-5">
        <GiftComponent number-gift="1"></GiftComponent>
        <GiftComponent number-gift="2"></GiftComponent>
        <GiftComponent number-gift="3"></GiftComponent>
        <GiftComponent number-gift="4"></GiftComponent>
        <GiftComponent number-gift="5"></GiftComponent>
      </div>
    </div>
    <button
      class="w-full mb-[140px] rounded-[40px] max-w-[546px] mt-5 py-[23px] px-[70px] gap-2.5 items-center flex justify-center bg-linear-to-r from-[#01D9FF] to-[#0051FF]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="33"
        height="34"
        viewBox="0 0 33 34"
        fill="none"
      >
        <path
          d="M15.125 12.875V21.125C15.1254 21.4754 15.2596 21.8125 15.5002 22.0674C15.7407 22.3222 16.0696 22.4755 16.4194 22.4961C16.7693 22.5166 17.1138 22.4028 17.3825 22.1779C17.6513 21.9529 17.824 21.6339 17.8654 21.2859L17.875 21.125V12.875H26.125C26.8188 12.8748 27.487 13.1368 27.9958 13.6085C28.5045 14.0803 28.8161 14.7269 28.8681 15.4187L28.875 15.625V28C28.8752 28.6938 28.6132 29.362 28.1414 29.8707C27.6697 30.3795 27.0231 30.6911 26.3312 30.7431L26.125 30.75H6.875C6.18121 30.7502 5.51297 30.4882 5.00425 30.0164C4.49552 29.5447 4.18391 28.8981 4.13188 28.2062L4.125 28V15.625C4.12478 14.9312 4.38681 14.2629 4.85856 13.7542C5.33031 13.2455 5.97691 12.9339 6.66875 12.8819L6.875 12.875H15.125ZM17.7155 3.89485L22.3341 8.5121C22.5921 8.77011 22.7371 9.12004 22.7371 9.48491C22.7371 9.84979 22.5921 10.1997 22.3341 10.4577C22.0761 10.7157 21.7262 10.8607 21.3613 10.8607C20.9964 10.8607 20.6465 10.7157 20.3885 10.4577L17.875 7.94285V12.875H15.125V7.94285L12.6115 10.4577C12.4837 10.5855 12.3321 10.6868 12.1652 10.756C11.9983 10.8251 11.8194 10.8607 11.6387 10.8607C11.458 10.8607 11.2791 10.8251 11.1122 10.756C10.9453 10.6868 10.7936 10.5855 10.6659 10.4577C10.5381 10.33 10.4368 10.1783 10.3676 10.0114C10.2985 9.84448 10.2629 9.66558 10.2629 9.48491C10.2629 9.30425 10.2985 9.12535 10.3676 8.95843C10.4368 8.79152 10.5381 8.63985 10.6659 8.5121L15.2859 3.89485C15.6082 3.57285 16.0451 3.39197 16.5007 3.39197C16.9563 3.39197 17.3932 3.57285 17.7155 3.89485Z"
          fill="white"
        />
      </svg>
      <span
        class="text-[#FBFBFB] text-2xl font-Montserrat leading-[100%] tracking-[-0.00em]"
      >
        Withdraw gifts
      </span>
    </button>
  </div>
</template>

<script setup>
import GiftComponent from "../components/GiftComponent.vue";
import OnlineBlock from "../components/OnlineBlock.vue";
</script>
