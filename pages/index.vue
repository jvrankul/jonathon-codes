<template>
  <div
    class="m-0 flex xs:flex-col lg:flex-row min-w-screen min-h-screen text-white text-center align-center justify-center"
  >
    <div
      class="fixed self-start z-10 top-0 left-0 text-white justify-center text-3xl mb-8 text-center font-semibold"
    >
      <div class="heading ml-6 mt-4">
        jonathon.codes
      </div>
    </div>
    <div
      class="menu-wrapper flex lg:min-w-1/3 lg:min-h-screen justify-center items-center bg-primary opacity-100 hover:opacity-75"
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
          class="flex page-header min-h-screen justify-center items-center text-4xl hover:underline"
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
          name: 'Projects',
          copy: "See some of the projects that I've worked on.",
          link: 'projects'
        },
        {
          name: 'Digital CV',
          copy: 'Coming soon!',
          link: 'contact'
        },
        {
          name: 'About',
          copy:
            'Curious? Click here to learn a bit about me, and also a bit about how I built this site.',
          link: 'about'
        }
      ]
    }
  },
  mounted() {
    const headingWrapper = document.querySelector('.heading')
    headingWrapper.innerHTML = headingWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    )
    this.$anime.timeline().add({
      targets: '.heading .letter',
      scale: [4, 1],
      opacity: [0, 1],
      translateZ: 0,
      easing: 'easeOutExpo',
      duration: 950,
      delay: (el, i) => 70 * i
    })
  }
}
</script>

<style scoped>
/* Transitions using the page hook */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease-out;
}
.page-enter,
.page-leave-active {
  opacity: 0;
  transform-origin: 50% 50%;
}
/* .contact {
  font-family: 'Indie Flower', cursive;
  padding: 50px;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.about {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 500px;
}
.projects {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 500px;
} */

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
.page-header {
  text-decoration-color: #89c7b4;
}
</style>
