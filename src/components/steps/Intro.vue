<template>
  <div class="row">
    <div class="col-12">
      <p class="step-title text-sm-start text-center position-relative">
        Ride <small class="step-subtitle position-absolute">into the wild of</small> GitHub
      </p>
    </div>

    <blockquote class="blockquote">
      <p class="text-sm-start text-center">
        <span
          class="
            fs-6
            animate__animated animate__jackInTheBox
            bounce
            delay-1
            animate__slow
          "
          >This</span
        >
        <span
          class="
            fs-3
            animate__animated animate__jackInTheBox
            bounce
            delay-2
            animate__slow
          "
          >is an</span
        >
        <span
          class="
            fs-1
            animate__animated animate__jackInTheBox
            bounce
            delay-3
            animate__slow
          "
          >introduction</span
        >
        <span
          class="
            fs-2
            animate__animated animate__jackInTheBox
            bounce
            delay-4
            animate__slow
          "
          >with different</span
        >
        <span
          class="
            fs-4
            animate__animated animate__jackInTheBox
            bounce
            delay-5
            animate__slow
          "
          >font sizes</span
        >
      </p>
    </blockquote>
    <br />
    <hr />
    <div class="text-instruction px-0">
      There are just a couple of steps. Please the neccesary inputs with:
    </div>

    <ul class="list-inline px-0">
      <li class="list-inline-item field-text text-uppercase pe-sm-1 pe-0">
        <span class="fst-italic badge bg-blue field-text">1</span> Your name
      </li>
      <li class="list-inline-item text-uppercase field-text pe-sm-1 pe-0">
        <span class="fst-italic badge bg-blue field-text me-1">2</span>GitHub's
        username
      </li>
      <li class="list-inline-item text-uppercase field-text pe-sm-1 pe-0">
        <span class="fst-italic badge bg-blue field-text me-1">3</span>Email
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Intro",
  props: {
    errors: {
      type: Object,
    },
  },
};
</script>

<style scoped>
ul {
  margin-top: 0;
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}

.delay-1 {
  animation-delay: 2.25s;
  animation-iteration-count: infinite;
}

.delay-2 {
  animation-delay: 2.5s;
  animation-iteration-count: infinite;
}

.delay-3 {
  animation-delay: 2.75s;
  animation-iteration-count: infinite;
}

.delay-4 {
  animation-delay: 3s;
  animation-iteration-count: infinite;
}

.delay-5 {
  animation-delay: 3.25s;
  animation-iteration-count: infinite;
}

.bg-blue {
  background-color: #1c3553;
}

.field-text {
  font-size: 1rem;
}

.badge {
  line-height: normal;
  padding: 0.1em 0.35em;
}

.text-instruction {
  font-style: italic;
  font-weight: 400;
  font-size: .9rem;
}

.step-title {
  width: 70%;
}

.step-subtitle {
  top: 6.5rem;
  left: 5rem;
  font-size: 1.5rem;
  font-weight: 200;
  font-style: italic;
}

@keyframes underline {
  from {
    width: 0px;
  }
  to {
    width: 70%;
  }
}

.field-text:after {
  content: "";
  margin-top: -2px;
  display: block;
  height: 2px;
  width: 0px;
  background-color: #1c3553;
  animation-name: underline;
  animation-duration: 1s;
  animation-delay: 4s;
  animation-fill-mode: forwards;
}

@media (min-width: 768px) {
  .text-instruction {
    font-size: 1rem;
  }

  .step-title {
    width: 70%;
  }
}
</style>
