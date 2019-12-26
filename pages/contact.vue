<template>
  <div
    class="contact p-8 flex min-h-screen bg-primary text-white justify-center"
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
        <div class="heading">Digital CV</div>
      </div>
      <div class="flex central">
        <div
          class="card self-center bg-white px-6 py-4 text-dark rounded-lg shadow-lg hover:shadow-2xl hover:underline"
          v-for="(section, i) in sections"
          :key="i"
        >
          <div>
            <a v-bind:href="section.link" target="_blank">
              <h2 class="text-2xl text-semibold">{{ section.title }}</h2>
              <p class="text-lg font-light">{{ section.content }}</p>
            </a>
          </div>
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
          title: 'Coming soon!',
          content:
            'This page is still being prepared. In the meantime, click here to visit me on LinkedIN!',
          link: 'https://linkedin.com/in/jvrankul',
          icon: ''
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
.card {
  text-decoration-color: #89c7b4;
}

.central {
  min-height: 80%;
}

.icon {
  /* font-size: 24px; */
}
</style>
