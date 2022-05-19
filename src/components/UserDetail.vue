<template>
  <div class="user-detail">
    <div class="row position-relative justify-content-center image-back">
      <div class="col-12">
        <div class="row justify-content-center mx-auto mt-4">
          <div class="col-6">
            <p class="text-center headtexten marginperview mb-0">
              Your There <br />
              🎉
            </p>
            <p class="texten text-name text-center mb-0">
              <small>Name:</small>
              <span class="texten-span"
                >{{ user.firstName }} {{ user.lastName }}</span
              >
            </p>
            <p class="texten text-email text-center mb-0">
              <small>Email:</small>
              <span class="texten-span">{{ user.email }}</span>
            </p>
            <p class="texten text-center mb-0">
              <small>Username:</small>
              <span class="texten-span">{{ user.username }}</span>
            </p>
            <div class="row row-cols-1">
              <div class="col colperimg mt-4 mx-auto">
                <div class="row img-row mx-auto" v-if="userHasData">
                  <img
                    class="img-fluid d-flex mx-auto img-width p-sm-3 p-0 mt-3"
                    :src="responseData.avatar_url"
                    alt=""
                  />
                </div>
                <div v-else class="github-error">
                  Can't find your username in GitHub.
                </div>
              </div>
              <div class="col colperbtn mx-auto">
                <div class="row mx-auto row-button">
                  <button
                    @click="this.$emit('toRestart')"
                    type="button"
                    class="btn rounded btn-outline-secondary"
                  >
                    At Home
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GitHubApi from "../services/GHApi";

export default {
  data() {
    return {
      user: this.$store.state.user,
      responseData: {},
    };
  },
  created() {
    GitHubApi()
      .get("/users/" + this.user.username)
      .then((response) => {
        this.responseData = response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  },
  computed: {
    userHasData() {
      return !(Object.keys(this.responseData).length === 0);
    },
  },
};
</script>

<style>
.marginperview {
  margin-top: 150px;
}
.user-detail {
  margin-top: -40px;
}
.avatar-image {
  max-width: 200px;
}
.footer {
  display: flex;
  margin: 50px auto;
}

.image-back {
  background-image: url("../assets/github-01.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.headtexten {
  font-size: 2rem;
}

.colperimg {
  width: 60%;
}

.texten-span {
  font-size: 1rem;
}

/* .img-row {
  width: 50%;
  margin-top: 3rem;
} */

.row-button {
  width: 65%;
}

/* .img-width {
  width: 65%;
} */

.colperbtn {
  margin-top: 20px;
  width: 85%;
}

.img-row {
  width: 100%;
  margin-top: 0rem;
}

.img-width {
  width: 100%;
}

small {
  font-size: 0.7rem;
}



@media (min-width: 768px) {
  .colperimg {
    width: 60%;
  }

  .img-row {
    width: 50%;
    margin-top: 3rem;
  }

  .row-button {
    width: 65%;
  }
  small {
    font-size: 0.8rem;
  }

  .texten-span {
    font-size: 1rem;
  }

  .img-width {
    width: 75%;
  }
}

@media (min-width: 992px) {
  .colperimg {
    width: 70%;
  }

  .img-row {
    width: 50%;
    margin-top: 3rem;
  }

  .colperbtn {
    margin-top: 0px;
    width: 35%;
  }

  .texten-span {
    font-size: 1rem;
  }

  .row-button {
    width: 65%;
  }

  .img-width {
    width: 75%;
  }

  .texten {
    font-size: 1.25rem;
  }

  .headtexten {
    font-size: 2.5rem;
  }
}


</style>
