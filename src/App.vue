<template>
  <Header />
  <main>
    <div class="container-fluid px-0">
      <div class="container">
        <router-view />
      </div>
    </div>
  </main>
</template>

<script>
import Header from './components/HeaderNav'
export default {
  components: {
    Header,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap');
/* Reset Global selectors */
html {
  box-sizing: border-box;
  -webkit-text-size-adjust: 100%;
  word-break: normal;
  -moz-tab-size: 4;
  tab-size: 4;
}

/* body {
  font-family: 'Source Sans Pro', sans-serif;
} */

*,
::before,
::after {
  background-repeat: no-repeat;
  box-sizing: inherit;
}

::before,
::after {
  text-decoration: inherit;
  vertical-align: inherit;
}

* {
  padding: 0;
  margin: 0;
}

button,
input {
  background-color: transparent;
  border-style: none;
}

/* Reset Global selectors */

main {
  min-height: 90vh;
}

/* footer {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
} */

.form-input span {
  margin-left: 1rem;
}


/* animation changing animation duration and delay of animate css */
.three {
  animation-delay: 0.2s;
  animation-duration: 50ms;
}

.two {
  animation-delay: 0.1s;
  animation-duration: 50ms;
}

.one {
  animation-duration: 50ms;
}


.labels {
  position: absolute;
  animation-delay: 2.5s;
  animation: keyframed 0.5s;
  animation-fill-mode: forwards;
}

.textdynamic {
  position: absolute;
  animation-delay: 2.5s;
  animation: fortextonly 0.5s;
  animation-fill-mode: forwards;
}

@keyframes keyframed {
  0% {
    opacity: 0;
    top: 0px;
    background-color: white;
  }

  100% {
    opacity: 1;
    top: -20px;
    background-color: #1c3553;
    color: white;
    z-index: -10;
    border-radius: 10px;
  }
}

@keyframes fortextonly {
  0% {
    opacity: 0;
    top: 0px;
    background-color: white;
  }

  100% {
    opacity: 1;
    top: -20px;
    background-color: #1c3553;
    color: white;
    z-index: -10;
    border-radius: 10px;
  }
}

#app {
  font-family: 'Source Sans Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  color: #1C3553;
  overflow-x: hidden;
}
</style>
