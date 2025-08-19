<template>
  <OnlineBlock type="profile"></OnlineBlock>
  <div class="flex flex-col items-center z-30">
    <div class="flex flex-col items-center gap-[2px]">
      <img
        src="../assets/pasha.png"
        class="max-w-[176px] rounded-full mb-[2px]"
        alt=""
      />
      <span
        class="text-[#FBFBFB] text-[32px] font-medium font-Montserrat leading-[100%] tracking-[-0.00em]"
      >
        @username
      </span>
      <span
        class="bg-clip-text text-[22px] text-transparent bg-linear-to-b from-[#45C6EA] via-[#57CCED] to-[#2A31B5]"
      >
        id: 123456789
      </span>
    </div>
    <div class="flex mt-5 w-full max-w-[512px] justify-between items-center">
      <div class="flex flex-col gap-[1px] items-center">
        <span
          class="text-white flex items-center font-Montserrat text-[32px] leading-[100%] tracking-[-0.00em]"
        >
          69.4
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="41"
            viewBox="0 0 40 41"
            fill="none"
          >
            <path
              d="M34.435 12.5333L21.3584 33.3567C21.1984 33.6088 20.9771 33.8164 20.7152 33.9598C20.4533 34.1033 20.1592 34.178 19.8606 34.177C19.562 34.176 19.2684 34.0993 19.0075 33.9541C18.7465 33.8089 18.5266 33.5999 18.3684 33.3467L5.54669 12.5233C5.18682 11.9404 4.99745 11.2684 5.00003 10.5833C5.01538 9.57134 5.43206 8.60688 6.15843 7.90208C6.8848 7.19728 7.86137 6.80985 8.87336 6.82499H31.1434C33.2717 6.82332 35 8.49999 35 10.5733C35 11.2617 34.8067 11.9417 34.435 12.5333ZM8.69669 11.8333L18.235 26.5433V10.3533H9.69336C8.70669 10.3533 8.26503 11.0067 8.69669 11.8367M21.7634 26.5467L31.305 11.8333C31.7467 11.005 31.295 10.35 30.3067 10.35H21.7667L21.7634 26.5467Z"
              fill="url(#paint0_linear_120_4)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_120_4"
                x1="18.0875"
                y1="44.9251"
                x2="18.0875"
                y2="-3.8285"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#45C6EA" />
                <stop offset="0.348" stop-color="#57CDED" />
                <stop offset="1" stop-color="#2A31B5" />
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span class="text-white text-lg font-Montserrat"> Volume </span>
      </div>
      <div class="flex w-[1px] min-h-[42px] max-h-[42px] bg-white"></div>
      <div class="flex flex-col gap-[1px] items-center">
        <span
          class="text-white flex items-center font-Montserrat text-[32px] leading-[100%] tracking-[-0.00em]"
        >
          3
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="41"
            viewBox="0 0 40 41"
            fill="none"
          >
            <path
              d="M11.6667 18.5V12.1667H8.33333V13.8333C8.33333 14.8889 8.63889 15.8406 9.25 16.6883C9.86111 17.5361 10.6667 18.14 11.6667 18.5ZM28.3333 18.5C29.3333 18.1389 30.1389 17.5344 30.75 16.6867C31.3611 15.8389 31.6667 14.8878 31.6667 13.8333V12.1667H28.3333V18.5ZM18.3333 32.1667V27C16.9722 26.6944 15.7572 26.1183 14.6883 25.2717C13.6194 24.425 12.8344 23.3622 12.3333 22.0833C10.25 21.8333 8.50722 20.9239 7.105 19.355C5.70278 17.7861 5.00111 15.9456 5 13.8333V12.1667C5 11.25 5.32667 10.4656 5.98 9.81333C6.63333 9.16111 7.41778 8.83444 8.33333 8.83333H11.6667C11.6667 7.91667 11.9933 7.13222 12.6467 6.48C13.3 5.82778 14.0844 5.50111 15 5.5H25C25.9167 5.5 26.7017 5.82667 27.355 6.48C28.0083 7.13333 28.3344 7.91778 28.3333 8.83333H31.6667C32.5833 8.83333 33.3683 9.16 34.0217 9.81333C34.675 10.4667 35.0011 11.2511 35 12.1667V13.8333C35 15.9444 34.2983 17.785 32.895 19.355C31.4917 20.925 29.7489 21.8344 27.6667 22.0833C27.1667 23.3611 26.3822 24.4239 25.3133 25.2717C24.2444 26.1194 23.0289 26.6956 21.6667 27V32.1667H26.6667C27.1389 32.1667 27.535 32.3267 27.855 32.6467C28.175 32.9667 28.3344 33.3622 28.3333 33.8333C28.3322 34.3044 28.1722 34.7006 27.8533 35.0217C27.5344 35.3428 27.1389 35.5022 26.6667 35.5H13.3333C12.8611 35.5 12.4656 35.34 12.1467 35.02C11.8278 34.7 11.6678 34.3044 11.6667 33.8333C11.6656 33.3622 11.8256 32.9667 12.1467 32.6467C12.4678 32.3267 12.8633 32.1667 13.3333 32.1667H18.3333Z"
              fill="url(#paint0_linear_28_824)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_28_824"
                x1="18.0875"
                y1="47.2885"
                x2="18.0875"
                y2="-6.18422"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#45C6EA" />
                <stop offset="0.348" stop-color="#57CDED" />
                <stop offset="1" stop-color="#2A31B5" />
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span
          class="text-white flex items-center gap-[5px] text-lg font-Montserrat"
        >
          Wins
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="25"
            viewBox="0 0 13 25"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.6571 13.211L5.70706 18.161C5.3166 18.5515 4.68353 18.5515 4.29306 18.161C3.90259 17.7705 3.90259 17.1375 4.29306 16.747L8.53606 12.504L4.29306 8.261C3.9026 7.87053 3.90259 7.23746 4.29306 6.847C4.68352 6.45653 5.31659 6.45653 5.70706 6.847L10.6571 11.797C10.8445 11.9845 10.9498 12.2388 10.9498 12.504C10.9498 12.7692 10.8445 13.0235 10.6571 13.211Z"
              fill="white"
            />
          </svg>
        </span>
      </div>
      <div class="flex w-[1px] min-h-[42px] max-h-[42px] bg-white"></div>
      <div class="flex flex-col gap-[1px] items-center">
        <span
          class="text-white flex items-center font-Montserrat text-[32px] leading-[100%] tracking-[-0.00em]"
        >
          3
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M21 12.5005H18.5V20.0005H8.5C7.83696 20.0005 7.20107 19.7371 6.73223 19.2683C6.26339 18.7994 6 18.1635 6 17.5005V15.0005C6 14.3375 6.26339 13.7016 6.73223 13.2327C7.20107 12.7639 7.83696 12.5005 8.5 12.5005H11.67C11.0498 11.4266 10.8509 10.1606 11.1117 8.94821C11.3726 7.73586 12.0747 6.6637 13.0817 5.93994C14.0886 5.21617 15.3287 4.89243 16.5609 5.03159C17.7932 5.17076 18.9298 5.76288 19.75 6.693C20.5702 5.76288 21.7068 5.17076 22.9391 5.03159C24.1713 4.89243 25.4113 5.21617 26.4183 5.93994C27.4253 6.6637 28.1274 7.73586 28.3883 8.94821C28.6491 10.1606 28.4502 11.4266 27.83 12.5005H31C31.663 12.5005 32.2989 12.7639 32.7678 13.2327C33.2366 13.7016 33.5 14.3375 33.5 15.0005V17.5005C33.5 18.1635 33.2366 18.7994 32.7678 19.2683C32.2989 19.7371 31.663 20.0005 31 20.0005H21V12.5005ZM13.5 10.0005C13.5 10.6635 13.7634 11.2994 14.2322 11.7683C14.7011 12.2371 15.337 12.5005 16 12.5005H18.5V10.0005C18.5 9.33745 18.2366 8.70157 17.7678 8.23273C17.2989 7.76389 16.663 7.5005 16 7.5005C15.337 7.5005 14.7011 7.76389 14.2322 8.23273C13.7634 8.70157 13.5 9.33745 13.5 10.0005ZM21 12.5005H23.5C23.9945 12.5005 24.4778 12.3539 24.8889 12.0792C25.3 11.8045 25.6205 11.414 25.8097 10.9572C25.9989 10.5004 26.0484 9.99772 25.952 9.51277C25.8555 9.02782 25.6174 8.58236 25.2678 8.23273C24.9181 7.8831 24.4727 7.645 23.9877 7.54853C23.5028 7.45207 23.0001 7.50158 22.5433 7.6908C22.0865 7.88002 21.696 8.20045 21.4213 8.61157C21.1466 9.02269 21 9.50604 21 10.0005V12.5005ZM31 22.5005H21V35.0005H26C27.3261 35.0005 28.5979 34.4737 29.5355 33.536C30.4732 32.5983 31 31.3266 31 30.0005V22.5005ZM18.5 35.0005V22.5005H8.5V30.0005C8.5 31.3266 9.02678 32.5983 9.96447 33.536C10.9021 34.4737 12.1739 35.0005 13.5 35.0005H18.5Z"
              fill="url(#paint0_linear_28_834)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_28_834"
                x1="17.9969"
                y1="46.7891"
                x2="17.9969"
                y2="-6.6844"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#45C6EA" />
                <stop offset="0.348" stop-color="#57CDED" />
                <stop offset="1" stop-color="#2A31B5" />
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span class="text-white text-lg font-Montserrat"> Withdrawed </span>
      </div>
    </div>
    <div class="flex mt-5 flex-col gap-2.5 max-w-[546px] w-full max-w-">
      <div class="flex relative overflow-hidden py-[15px] rounded-[20px] w-full bg-linear-to-r from-[#281B00] to-[#F9B221] px-5 items-center justify-between">
        <span class="text-[88px] rotate-[-13deg] absolute right-[71px] bottom-[-45px] opacity-40"> 🏆 </span>
        <div class="flex gap-2.5 items-center">
          <span class="text-[32px]"> 🏆 </span>
          <span
            class="text-[32px] font-Montserrat text-[#FBFBFB]  leading-[100%] tracking-[-0.04em]"
          >
            Winners leaderboard
          </span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="41"
          viewBox="0 0 21 41"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.8515 21.7147L9.39523 30.1709C8.72818 30.8379 7.64669 30.8379 6.97964 30.1709C6.3126 29.5039 6.3126 28.4224 6.97964 27.7553L14.2281 20.5069L6.97964 13.2584C6.3126 12.5914 6.3126 11.5099 6.97964 10.8428C7.64669 10.1758 8.72818 10.1758 9.39523 10.8428L17.8515 19.2991C18.1717 19.6194 18.3517 20.0539 18.3517 20.5069C18.3517 20.9598 18.1717 21.3943 17.8515 21.7147Z"
            fill="#FFE8BA"
          />
        </svg>
      </div>
      <div class="flex  relative overflow-hidden py-[15px] rounded-[20px] w-full bg-linear-to-r from-[#005DFF] to-[#01D8FF] px-5 items-center justify-between">
        <span class="text-[88px] rotate-[-13deg] absolute right-[71px] bottom-[-45px] opacity-40"> 💰 </span>
        <div class="flex gap-2.5 items-center">
          <span class="text-[32px]"> 💰 </span>
          <span
            class="text-[32px] font-Montserrat text-[#FBFBFB]  leading-[100%] tracking-[-0.04em]"
          >
          Referral programm
          </span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="21" viewBox="0 0 12 21" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4998 11.7078L3.04354 20.1641C2.3765 20.8311 1.295 20.8311 0.627958 20.1641C-0.0390874 19.497 -0.039087 18.4155 0.627958 17.7485L7.87642 10.5L0.627957 3.25155C-0.0390884 2.5845 -0.0390874 1.50301 0.627958 0.835966C1.295 0.16892 2.3765 0.168921 3.04354 0.835966L11.4998 9.29222C11.8201 9.61258 12 10.047 12 10.5C12 10.953 11.8201 11.3874 11.4998 11.7078Z" fill="#004F62"/>
</svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import OnlineBlock from "../components/OnlineBlock.vue";
</script>
