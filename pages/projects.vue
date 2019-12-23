<template>
  <div
    class="p-8 flex min-h-screen max-w-80 bg-primary text-white justify-center"
  >
    <div class="max-w-4xl">
      <h1 class="text-3xl text-center font-semibold">Projects</h1>
      <div v-for="(project, i) in projects" :key="i">
        <div class="mt-4 mb-12">
          <h2 class="text-2xl text-semibold">{{ project.name }}</h2>
          <div
            class="inline-flex bg-dark rounded-full py-1 px-4 mr-2 text-xs mt-2 mb-4"
            v-for="(tag, i) in project.tags"
            :key="i"
          >
            {{ tag.name }}
          </div>
          <p class="text-lg font-light">{{ project.description }}</p>
        </div>
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
          name: 'Pocket',
          tags: [{ name: 'react-native' }, { name: 'banking' }],
          img: 'nourish.png',
          url: '',
          description:
            'An extension for banking apps written in react-native which took 1st place during The Accenture Hackathon 2019, Melbourne.'
        },
        {
          name: 'lovebot.city',
          tags: [{ name: 'pixi-js' }, { name: 'javascript' }],
          img: 'lovebot-city.gif',
          url: '',
          description:
            'A generative art simulation, demonstrating the organic growth of cities by simulating people and behaviour.'
        },
        {
          name: 'Nourish',
          tags: [{ name: 'react-native' }],
          img: 'nourish.png',
          url: '',
          description:
            'A React-native mobile application allowing users to scan product barcodes and discover sustainability information.'
        }
      ]
    }
  }
}
</script>
