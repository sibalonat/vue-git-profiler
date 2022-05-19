/* eslint-disable vue/multi-word-component-names */
<template>
  <header class="shadow-sm p-3 mb-5 bg-body rounded">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-12">
          <div class="row widthHalf justify-content-center">
            <div class="col-lg-3 col-4 px-2">
              <img
                src="../assets/homeday-01.svg"
                class="img-fluid imagine animate__delay-3s"
                alt=""
              />
            </div>
            <div class="col-lg-5 col-8 px-0">
              <p
                class="
                  fs-2
                  text-uppercase text-center
                  animate__animated animate__bounce
                  text
                  textTitle
                  mb-0
                "
              >
                HOMEDAY
              </p>
              <p class="subtext mb-0 text-center">Mein Immobilienmakler</p>
              <div class="row bg-blue mx-auto notOnDesktop">
                <img
                  src="../assets/logotrustpilot.svg"
                  class="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-6 toHide">
          <div class="row position-relative">
            <div class="col-10 px-0 col-text">
              <p class="fs-3 text-toBold">
                Full brokerage service. Personally on site. Fair seller
                commission.
              </p>
            </div>

            <div class="col-1 px-0 position-absolute image-to-space">
              <img
                src="../assets/quote.svg"
                class="img-fluid d-flex w-75"
                alt=""
              />
            </div>
            <div class="col-3 bg-blue position-absolute bottom-0 end-0">
              <img
                src="../assets/logotrustpilot.svg"
                class="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.textTitle {
  font-weight: 600;
  color: #1c3553;
}

.text-toBold {
  font-weight: 400;
  font-style: italic;

  text-decoration: underline;

  text-underline-offset: 0.4em;
  text-decoration-thickness: 0.07em;
}

.bg-blue {
  background-color: #1c3553;
}

.col-text {
  z-index: 20 !important;
}

.image-to-space {
  top: 5px;
  opacity: 0.1;
  z-index: 0;
  left: -20px !important;
  transform: rotate(180deg);
}

.subtext {
  font-size: 0.8rem;
}

.widthHalf {
  width: 50%;
}

@keyframes keyframed {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.imagine {
  margin-top: 0;
  opacity: 0;
  animation: keyframed 1s ease 2s forwards;
  animation-iteration-count: 1;
}

.notOnDesktop {
  display: none;
}

.toHide {
  display: flex;
}

@media (max-width: 1399.98px) {
  .notOnDesktop {
    display: none;
  }
}

@media (max-width: 1199.98px) {
  .widthHalf {
    width: 80%;
  }

  .notOnDesktop {
    display: flex;
    width: 50%;
  }

  /* .notOnDesktop img {
    width: 50%;
  } */

  .notOnDesktop img {
    width: 100%;
    display: block;
    margin: 0 auto;
  }
}

@media (max-width: 991.98px) {
  .widthHalf {
    width: 100%;
  }

  .toHide {
    display: none;
  }

  .notOnDesktop {
    display: flex;
    width: 50%;
  }

  /* .notOnDesktop img {
    width: 50%;
  } */

  .notOnDesktop img {
    width: 100%;
    display: block;
    margin: 0 auto;
  }

  .imagine {
    margin-top: -5px;
  }
}
</style>
