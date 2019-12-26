<template>
  <div
    class="projects p-8 flex min-h-screen max-w-80 bg-primary text-white justify-center"
  >
    <font-awesome-icon
      class="fixed top-0 left-0 mt-8 ml-8 text-2xl cursor-pointer hover:opacity-75"
      :icon="['fas', 'arrow-left']"
      v-on:click="back"
    />
    <div class="max-w-4xl">
      <div class="flex justify-center text-3xl mb-8 text-center font-semibold">
        <div class="heading">Nourish</div>
      </div>
      <div class="text-center">{{ copy }}</div>
      <div class="text-center font-bold mt-8">
        The team:
        <span class="block font-light" v-for="(member, i) in team" :key="i">{{
          member
        }}</span>
      </div>
      <div class="flex mt-8 justify-center">
        <img class="rounded-lg" :src="img" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      copy:
        'Nourish is a sustainable eating companion mobile app. It allows users to scan product barcodes to reveal sustainability information about the scanned product. The app was written in react-native, for a group university project.',
      team: ['Jonathon Vrankul', 'Sebastien Bailouni', 'Mladjen Tomic'],
      img: '/nourish.png'
    }
  },
  methods: {
    back() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.page-enter {
  opacity: 0;
}
.page-enter-to {
  opacity: 1;
}
.page-leave {
  opacity: 1;
}
.page-leave-to {
  opacity: 0;
}
.page-enter-active {
  transition: opacity 0.5s ease;
  animation: acrossIn 0.3s ease-out both;
}
.page-leave-active {
  transition: opacity 0.3s ease;
  animation: acrossOut 0.3s ease-in both;
}
@keyframes acrossIn {
  0% {
    transform: translate3d(-20%, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes acrossOut {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-20%, 0, 0);
  }
}

.heading {
  position: relative;
}
.heading:before {
  content: '';
  position: absolute;
  left: 10px;
  right: -10px;
  top: 15px;
  bottom: -2px;
  border: 2px solid #89c7b4;
  border-right-width: 2px;
  border-left-width: 0;
  border-top-width: 0;
  border-bottom-width: 2px;
}
</style>
