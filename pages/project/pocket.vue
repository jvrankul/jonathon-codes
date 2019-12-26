<template>
  <div
    class="projects p-8 flex min-h-screen max-w-80 bg-primary text-white justify-center"
  >
    <div class="max-w-4xl">
      <div class="flex justify-center text-3xl mb-8 text-center font-semibold">
        <div class="heading">Pocket</div>
      </div>
      <div class="text-center">{{ copy }}</div>
      <div class="text-center font-bold mt-8">
        The team:
        <span class="block font-light" v-for="(member, i) in team" :key="i">{{
          member
        }}</span>
      </div>
      <div class="flex mt-8 justify-center">
        <video
          alt="A live walkthrough of the app shown on an iOS simulator."
          width="450"
          controls
          :src="video"
          class="rounded-lg"
        ></video>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      video: '/pocket-vid.mp4',
      copy:
        'Pocket is the product of my first ever hackathon, the Accenture Hackathon - Banking Revolution Edition. The app, built with react-native, is a banking app extension. It helps customers to budget and track spending effectively by allowing them to create virtual accounts (Pockets), and apply categories and spending limits to those virtual accounts.',
      team: [
        'Jonathon Vrankul',
        'Sebastien Bailouni',
        'Wil Johnston',
        'Daniel Wen'
      ]
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
