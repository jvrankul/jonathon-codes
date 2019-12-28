<template>
  <div>
    <div
      class="fixed self-start z-10 top-0 left-0 text-white justify-center text-3xl mb-8 text-center font-semibold"
    >
      <div class="heading ml-6 mt-4">
        jonathon.codes
      </div>
    </div>
    <div
      class="m-0 flex xs:justify-around xs:flex-col xs:min-h-screen lg:flex-row min-w-screen text-white text-center align-center lg:justify-center"
    >
      <div
        class="flex xs:min-h-1/3 xs:mt-20 lg:mt-0 lg:min-w-1/3 lg:justify-center items-center bg-primary opacity-100 hover:bg-primaryLight"
        v-for="(page, i) in pages"
        :key="i"
      >
        <nuxt-link
          class="xs:min-h-1/3 menu-item max-h-screen min-w-full"
          v-bind:key="page"
          :to="page.link"
          prefetch
        >
          <div
            class="flex page-header xs:min-h-1/3 lg:min-h-screen justify-center items-center text-4xl hover:font-semibold"
            @mouseenter="(event) => mouseEnter(event, page.link)"
            @mouseleave="mouseLeave(page.link)"
          >
            <div class="flex flex-col">
              <span class="flex flex-col" :class="`page-link-${page.link}`">
                {{ page.name }}
                <div
                  class="bg-accent h-1 w-0 self-center"
                  :class="`${page.link}-underline`"
                ></div>
              </span>
              <span
                class="link-copy text-sm font-light hidden-text no-underline"
                :class="page.link"
              >
                {{ page.copy }}
              </span>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import anime from 'animejs'
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
            'Curious? Click here to learn a bit about me, and how I built this site.',
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
      duration: 1,
      delay: (el, i) => 1 * i
    })
  },
  methods: {
    mouseEnter(event, link) {
      const wrapper = document.querySelector(`.${link}`)
      wrapper.classList.remove('hidden-text')

      anime({
        targets: `.${link}-underline`,
        width: {
          value: '+=200',
          duration: 600,
          easing: 'easeOutExpo'
        }
      })

      anime({
        targets: `.${link}`,
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 2000
      })

      anime({
        targets: `.page-link-${link}`,
        translateY: -20,
        easing: 'easeOutQuint',
        duration: 800
      })
    },
    mouseLeave: (link) => {
      const wrapper = document.querySelector(`.${link}`)
      wrapper.classList.add('hidden-text')

      anime({
        targets: `.${link}-underline`,
        width: {
          value: '-=200',
          duration: 200,
          easing: 'easeOutExpo'
        }
      })

      anime({
        targets: `.page-link-${link}`,
        translateY: 20,
        easing: 'easeOutQuint',
        duration: 800
      })
    }
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
.page-header {
  text-decoration-color: #89c7b4;
}
.menu-item {
  color: white;
}
.page-header .link-copy {
  text-decoration: none;
}
.hidden-text {
  display: none;
}
.visible {
  display: block;
}
</style>
