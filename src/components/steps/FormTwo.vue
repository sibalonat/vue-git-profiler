<template>
  <div class="step-title">Almost there!</div>

  <div class="row row-cols-1">
    <transition
      appear
      appear-active-class="animate__animated animate__zoomIn one"
    >
      <div class="col coltwo mt-4">
        <div class="form-input position-relative">
          <label for="email" class="labelInput px-3 labels">User Email</label>
          <Field
            :class="inputClassObject('email')"
            type="email"
            id="email"
            name="email"
            :rules="emailRules"
            v-model="email"
            autofocus
          />
          <ErrorMessage class="input-error-msg" name="email" />
        </div>
      </div>
    </transition>

    <transition
      appear
      appear-active-class="animate__animated animate__zoomIn one"
    >
      <div class="col colthree">
        <div class="form-input position-relative ms-3">
          <Field
            :class="inputClassObject('terms')"
            type="checkbox"
            id="terms"
            name="terms"
            :rules="termsRules"
            :value="true"
            v-model="isAgreeToTerms"
          />
          <label for="terms" class="inputforterms"
            >Agree to Terms and Services</label
          >
          <ErrorMessage class="input-error-msg" name="terms" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  name: "FormTwo",
  components: {
    Field,
    ErrorMessage,
  },
  props: {
    errors: {
      type: Object,
    },
  },
  data() {
    return {
      emailRules: yup.string().required().email(),
      termsRules: yup
        .boolean()
        .required("You must agree to terms and services"),
    };
  },
  computed: {
    email: {
      get() {
        return this.$store.state.user.email;
      },
      set(value) {
        this.$store.commit("updateEmail", value);
      },
    },
    isAgreeToTerms: {
      get() {
        return this.$store.state.user.isAgreeToTerms;
      },
      set(value) {
        this.$store.commit("updateIsAgreeToTerms", value);
      },
    },
  },
  methods: {
    inputClassObject(name) {
      return {
        "input-control": true,
        // eslint-disable-next-line no-prototype-builtins
        "has-error": this.errors.hasOwnProperty(name),
      };
    },
  },
};
</script>

<style scoped>
.labelInput {
  margin-left: 1rem;
}

.coltwo {
  width: 70%;
}

.colthree {
  width: 65%;
}

.inputforterms {
  font-size: 1rem;
  font-weight:300;
  position: absolute;
  top: -3px;
}


@media (max-width: 991.98px) {
  .coltwo {
    width: 100%;
  }

  .colthree {
    width: 85%;
  }
}
</style>
