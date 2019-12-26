<template>
  <div class="about p-8 flex min-h-screen bg-primary text-white justify-center">
    <div class="max-w-4xl">
      <div class="fixed top-0 left-0 mt-8 ml-8 h-5 w-5">
        <font-awesome-icon
          class="text-2xl cursor-pointer hover:opacity-75 xs:mt-2"
          :icon="['fas', 'arrow-left']"
          v-on:click="back"
        />
      </div>
      <div class="flex justify-center text-3xl mb-8 text-center font-semibold">
        <div class="heading">About</div>
      </div>
      <div v-for="(section, i) in sections" :key="i">
        <div v-if="section.link" class="mt-4 mb-12 hover:opacity-75">
          <a v-bind:href="section.link" target="_blank">
            <h2 class="text-2xl text-semibold">{{ section.title }}</h2>
            <p class="text-lg font-light">{{ section.content }}</p>
          </a>
        </div>
        <div v-if="!section.link" class="mt-4 mb-12">
          <h2 class="text-2xl text-semibold">{{ section.title }}</h2>
          <p class="text-lg font-light">{{ section.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sections: [
        {
          title: 'Who am I?',
          content:
            "Hi, my name is Jonathon. I'm a recent university graduate and Software Developer living in Melbourne, Australia. This site showcases some of the projects I've worked on. In future I plan to add tutorials, videos and articles on various coding / tech topics."
        },
        {
          title: 'Background',
          content:
            "I studied an Information Technology degree at Monash University in Melbourne, Australia. There I discovered my passion for the endless problem-solving fun of coding. Currently I'm really into front-end and mobile app development."
        },
        {
          title: 'This website',
          content:
            'I built this app using Nuxt, a Vue.js framework. Want to learn more? Click here to view the source code on GitHub.',
          link: 'https://github.com/jvrankul/jonathon-codes'
        }
      ]
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
