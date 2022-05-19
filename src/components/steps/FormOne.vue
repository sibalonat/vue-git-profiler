<template>
  <div class="step-title">Personal Info</div>

  <div class="row row-cols-1">
    <transition
      appear
      appear-active-class="animate__animated animate__zoomIn one"
    >
      <div class="col colone my-4">
        <div class="form-input position-relative" ref="forminput">
          <label for="first-name" class="labelInput px-3 labels"
            >First Name</label
          >
          <Field
            :class="inputClassObject('firstName')"
            type="text"
            id="first-name"
            name="firstName"
            :rules="firstNameRules"
            v-model.trim="firstName"
            autofocus
          />
          <ErrorMessage class="input-error-msg" name="firstName" />
        </div>
      </div>
    </transition>
    <!-- :duration="700" -->
    <transition
      appear
      appear-active-class="animate__animated animate__zoomIn two"
    >
      <div class="col coltwo my-4">
        <div class="form-input position-relative" ref="forminput">
          <label for="last-name" class="labelInput px-3 labels"
            >Last Name</label
          >
          <Field
            :class="inputClassObject('lastName')"
            type="text"
            id="last-name"
            name="lastName"
            :rules="lastNameRules"
            v-model.trim="lastName"
          />
          <ErrorMessage class="input-error-msg" name="lastName" />
        </div>
      </div>
    </transition>

    <!-- :duration="1000" -->
    <transition
      appear
      appear-active-class="animate__animated animate__zoomIn three"
    >
      <div class="colthree col my-4">
        <div class="form-input position-relative" ref="forminput">
          <label for="github-username" class="labelInput px-3 labels"
            >GitHub Username</label
          >
          <Field
            :class="inputClassObject('username')"
            type="text"
            id="username"
            name="username"
            :rules="usernameRules"
            v-model.trim="username"
          />
          <ErrorMessage class="input-error-msg" name="username" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  name: "FormOne",
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
      firstNameRules: yup.string().trim().required(),
      lastNameRules: yup.string().trim().required(),
      usernameRules: yup.string().trim().required(),
    };
  },
  computed: {
    firstName: {
      get() {
        return this.$store.state.user.firstName;
      },
      set(value) {
        this.$store.commit("updateFirstName", value);
      },
    },
    lastName: {
      get() {
        return this.$store.state.user.lastName;
      },
      set(value) {
        this.$store.commit("updateLastName", value);
      },
    },
    username: {
      get() {
        return this.$store.state.user.username;
      },
      set(value) {
        this.$store.commit("updateUsername", value);
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
  margin-left: 0.7rem;
}

.colone {
  width: 50%;
}

.coltwo {
  width: 70%;
}

.colthree {
  width: 65%;
}



@media (max-width: 1199.98px) {
}

@media (max-width: 991.98px) {
  .colone {
    width: 70%;
  }

  .coltwo {
    width: 100%;
  }

  .colthree {
    width: 85%;
  }
}
</style>
