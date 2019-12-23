<template>
  <div
    class="m-0 flex min-w-full min-h-screen text-white text-center align-center justify-center"
  >
    <div
      class="flex min-w-1/3 min-h-screen justify-center items-center bg-primary opacity-75 hover:opacity-100"
      v-for="(page, i) in pages"
      :key="i"
    >
      <nuxt-link
        class="min-h-screen min-w-full"
        v-bind:key="page"
        :to="page.link"
        prefetch
      >
        <div
          class="flex min-h-screen justify-center items-center text-4xl hover:underline"
        >
          {{ page.name }}
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pages: [
        {
          name: 'About',
          copy:
            'Curious? Click here to learn a bit about me, and also a bit about how I built this site.',
          link: 'about'
        },
        {
          name: 'Projects',
          copy: "See some of the projects that I've worked on.",
          link: 'projects'
        },
        {
          name: 'Contact',
          copy:
            "Feel free to reach out for anything (really, anything). I am very responsive through all channels, so don't be shy!",
          link: 'contact'
        }
      ]
    }
  }
}
</script>
