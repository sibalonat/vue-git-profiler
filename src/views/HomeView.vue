<template>
  <Form v-if="!this.showUserDetail" v-slot="{ handleSubmit, values, errors }">
    <div class="row justify-content-center">
      <div class="col-lg-6 col-12">
        <div class="card-body">
          <component
            :is="this.stepsList[this.currentStep]"
            :errors="errors"
          ></component>

          <div class="step-footer">
            <div class="current-steps">
              <b>{{ this.currentStep + 1 }}</b> / {{ this.stepsList.length }}
            </div>

            <button
              @click="isLastStep ? finalSubmit() : handleSubmit($event, toNext)"
              :disabled="
                isFirstStep ? false : !validateCurrentStep(values, errors)
              "
              type="button"
              class="btn-primary btn btn-lg rounded-pill btn-next"
            >
              {{ isLastStep ? `Submit` : `Next` }}
            </button>

            <button
              @click="toPrevious"
              v-show="!isFirstStep"
              type="button"
              class="btn btn-back btn-sm rounded-0"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  </Form>

  <UserDetail v-else @toRestart="toRestart" />
</template>

<script>
import { mapActions } from "vuex";
import { Form } from "vee-validate";
import Intro from "../components/steps/Intro.vue";
import FormOne from "../components/steps/FormOne.vue";
import FormTwo from "../components/steps/FormTwo.vue";
import UserDetail from "../components/UserDetail.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {
    Form,
    Intro,
    FormOne,
    FormTwo,
    UserDetail,
  },
  data() {
    return {
      currentStep: 0,
      stepsList: ["Intro", "FormOne", "FormTwo"],
      showUserDetail: false,
    };
  },

  computed: {
    isFirstStep() {
      return this.currentStep === 0;
    },
    isLastStep() {
      return this.currentStep === this.stepsList.length - 1;
    },
  },
  methods: {
    validateCurrentStep(values, errors) {
      const noErrors = Object.keys(errors).length === 0;

      const valuesAreNotEmpty = (obj) => {
        if (Object.keys(obj).length === 0) return true;
        return Object.values(obj).every(
          (x) => !(!x || x === undefined || x.length === 0)
        );
      };

      return noErrors && valuesAreNotEmpty(values);
    },
    finalSubmit() {
      this.showUserDetail = true;
    },
    toPrevious() {
      this.currentStep--;
    },
    toNext() {
      this.currentStep++;
    },
    toRestart() {
      this.currentStep = 0;
      this.showUserDetail = false;
      this.resetUserState();
    },
    ...mapActions(["resetUserState"]),
  },
};
</script>

<style>
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-items: center;
}

.step-card {
  padding: 20px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 375px;
  border: solid 2px #dddddd;
}

.step-title {
  margin: 10px 0;
  font-size: 5rem;
  /* font-size: 1.75rem; */
  font-weight: bold;
}


.step-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 10px;
  font-size: 1rem;
}


button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

button.btn-primary {
  background-color: #064faf;
  color: #fff;
}

button.btn-secondary {
  color: #064faf;
}

button.btn-next {
  order: 3;
}

button.btn-back {
  order: 1;
  border-bottom: 2px solid #064faf;
}

button.btn-back:hover {
  color: white;
  background-color: #064faf;
}

.current-steps {
  padding: 10px;
  border-radius: 15px;
  background-color: #eaeaea;
  margin-right: 10px;
  margin-left: auto;
  order: 2;
}

/* From Input & Error */
.form-input {
  display: block;
  margin-bottom: 15px;
}

.form-input label {
  font-weight: 600;
}

.form-input span {
  color: #ff2626;
  font-size: 0.9rem;
  display: block;
}

.form-input .input-control[type="text"],
.form-input .input-control[type="email"] {
  height: 35px;
  padding: 10px;
  width: 100%;
  background-color: #ffffff;
  border: solid 1px #dddddd;
  border-radius: 15px;
  box-shadow: 5px 10px 20px #eaeaea inset;
}

.form-input .input-control[type="checkbox"] {
  width: 15px;
  height: 15px;
  top: 30px;
  margin-right: 5px;
}

.form-input .input-control.has-error {
  border-color: #ff2626;
}

</style>
