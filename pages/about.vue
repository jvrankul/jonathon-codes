<template>
  <div class="p-8 flex min-h-screen bg-primary text-white justify-center">
    <div class="max-w-4xl">
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
            "Hi, my name is Jonathon. I am a recent university graduate and Software Developer living in Melbourne, Australia. This site simply showcases some of the projects I've worked on. In future I plan to add some short courses, videos and articles on various coding / tech topics."
        },
        {
          title: 'Background',
          content:
            'I studied an Information Technology degree at Monash University in Melbourne, Australia. There I discovered my passion for the endless problem-solving fun of coding. Currently I am really enjoying front-end and mobile development + design. I build web apps and mobile apps. Currently I am really enjoying React, Vue, and react-native'
        },
        {
          title: 'This website',
          content:
            'I built this app in my spare time using Nuxt.js for Vue, with Tailwind CSS. Want to learn more? Click here to view the source code on GitHub.',
          link: 'https://github.com/jvrankul/jonathon-codes'
        }
      ]
    }
  }
}
</script>

<style scoped>
.heading {
  position: relative;
}
.heading:before {
  content: '';
  position: absolute;
  left: 10px;
  right: -10px;
  top: 15px;
  bottom: -5px;
  border: 2px solid #89c7b4;
  border-right-width: 2px;
  border-left-width: 0;
  border-top-width: 0;
  border-bottom-width: 2px;
}
</style>
