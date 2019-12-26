<template>
  <div class="bg-primary">
    <nuxt />
    <!-- <div
      class="flex fixed w-full justify-between items-center text-white py-4 px-6 bottom-0"
    >
      <div>
        <span class="font-light italic">jonathon.codes</span>
        <span class="font-semibold">by Jonathon Vrankul</span>
      </div>
      <div class="inline-flex text-3xl">
        <a href="https://linkedin.com/in/jvrankul" target="_blank">
          <font-awesome-icon
            class="mr-3 hover:opacity-75"
            :icon="['fab', 'linkedin']"
          />
        </a>
        <a href="https://github.com/jvrankul" target="_blank">
          <font-awesome-icon
            class="hover:opacity-75"
            :icon="['fab', 'github']"
          />
        </a>
      </div>
    </div> -->
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
