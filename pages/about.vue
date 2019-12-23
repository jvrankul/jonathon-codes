<template>
  <div class="p-8 flex min-h-screen bg-primary text-white justify-center">
    <div class="max-w-4xl">
      <h1 class="text-3xl text-center font-semibold">About</h1>
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
            "Hi, my name is Jonathon. I am a recent university graduate and Software Developer living in Melbourne, Australia. For the past ~2 years I've been working as an Engineer for an Australian bank. With this site I hope to share with you some of my achievements and projects. I also enjoy teaching, and hope to expand this site with short courses and videos on various coding topics."
        },
        {
          title: 'Background',
          content:
            'I studied an Information Technology degree at Monash University in Melbourne, Australia. There I discovered my passion, the endless problem-solving fun of coding. Currently I am really enjoying front-end and mobile development and I build apps in React, Vue, and react-native for mobile.'
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
