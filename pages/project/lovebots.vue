<template>
  <div
    class="projects p-8 flex min-h-screen max-w-80 bg-primary text-white justify-center"
  >
    <div class="max-w-4xl">
      <div class="fixed top-0 left-0 mt-8 ml-8 h-5 w-5">
        <font-awesome-icon
          class="text-2xl cursor-pointer hover:opacity-75 xs:mt-2"
          :icon="['fas', 'arrow-left']"
          v-on:click="back"
        />
      </div>
      <div
        class="content-item flex justify-center text-3xl mb-8 text-center font-semibold"
      >
        <div class="heading">lovebot.city</div>
      </div>
      <div class="content-item text-center">{{ copy }}</div>
      <div class="content-item text-center font-bold mt-8">
        The team:
        <span class="block font-light" v-for="(member, i) in team" :key="i">{{
          member
        }}</span>
      </div>
      <div class="content-item flex flex-col mt-8 justify-center items-center">
        <a :href="link" target="_blank">
          <img class="rounded-lg" :src="img" />
        </a>
        <div class="mt-2">Click on the image to see the full app!</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      copy:
        'lovebot.city is a generative art simulation demonstrating the organic growth of cities, modelled after the city of Prato, Italy. This project was created while on exchange in Italy, and was our attempt at synthesizing weeks of learning across the intersecting fields of art, science and technology into a single creative showpiece.',
      team: [
        'Jonathon Vrankul',
        'Sebastien Bailouni',
        'Wil Johnston',
        'Kalana Vithana'
      ],
      img: '/lovebots.png',
      link: 'https://lovebotcity.bailouni.com/'
    }
  },
  mounted() {
    this.$anime({
      targets: '.content-item',
      opacity: [0, 1],
      translateX: [-55, 0],
      easing: 'easeOutQuad',
      duration: 400,
      delay: this.$anime.stagger(400)
    })
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
