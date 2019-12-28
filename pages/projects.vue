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
      <div class="flex justify-center text-3xl mb-8 text-center font-semibold">
        <div class="heading">Projects</div>
      </div>
      <div
        class="card bg-white mb-8 px-6 py-4 text-dark rounded-lg shadow-lg cursor-pointer hover:shadow-2xl"
        v-for="(project, i) in projects"
        :class="`${project.key}-card`"
        @mouseenter="(event) => cardHoverEnter(event, project.key)"
        @mouseleave="(event) => cardHoverLeave(event, project.key)"
        :key="i"
      >
        <nuxt-link
          class="min-h-screen min-w-full"
          v-bind:key="page"
          :to="'project/' + project.key"
          prefetch
        >
          <h2 class="text-2xl text-semibold">{{ project.name }}</h2>
          <div
            class="inline-flex bg-dark rounded-full py-1 px-4 mr-2 text-xs mt-2 mb-4 text-white"
            v-for="(tag, i) in project.tags"
            :key="i"
          >
            {{ tag.name }}
          </div>
          <p class="text-lg font-light">{{ project.description }}</p>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layoutTransition: {
    name: 'layout',
    mode: 'out-in'
  },
  data() {
    return {
      projects: [
        {
          key: 'pocket',
          name: 'Pocket',
          tags: [{ name: 'react-native' }, { name: 'tailwind-css' }],
          img: 'nourish.png',
          url: '',
          description:
            'An extension for banking apps written in react-native which took 1st place during The Accenture Hackathon 2019, Melbourne.'
        },
        {
          key: 'lovebots',
          name: 'lovebot.city',
          tags: [{ name: 'javascript' }, { name: 'pixi-js' }],
          img: 'lovebot-city.gif',
          url: '',
          description:
            'A generative art simulation, demonstrating the organic growth of cities by simulating people and behaviour. Based on the city of Prato, Italy.'
        },
        {
          key: 'nourish',
          name: 'Nourish',
          tags: [{ name: 'react-native' }],
          img: 'nourish.png',
          url: '',
          description:
            'A React-native mobile application allowing users to scan product barcodes and discover sustainability information.'
        }
      ]
    }
  },
  mounted() {
    this.$anime({
      targets: '.card',
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
    },
    cardHoverEnter(event, cardName) {
      this.$anime({
        targets: `.${cardName}-card`,
        scale: [1, 1.05],
        easing: 'easeOutCubic',
        duration: 300
      })
    },
    cardHoverLeave(event, cardName) {
      this.$anime({
        targets: `.${cardName}-card`,
        scale: 1,
        easing: 'easeOutCubic',
        duration: 300
      })
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
