<template>
  <div class="p-8 flex min-h-screen bg-primary text-white justify-center">
    <div class="max-w-4xl">
      <h1 class="text-3xl text-center font-semibold">Contact</h1>
      <div v-for="(section, i) in sections" :key="i">
        <div class="mt-4 mb-12">
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
          title: 'LinkedIN',
          content: 'Reach me on LinkedIN at linkedin.com/in/jvrankul',
          link: 'https://linkedin.com/in/jvrankul',
          icon: ''
        }
      ]
    }
  }
}
</script>
