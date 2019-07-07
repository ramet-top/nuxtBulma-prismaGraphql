<template>
  <div>
    <br>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
        </a>
        <div class="navbar-start">
          <div class="navbar-item">
            <!-- <a class="navbar-item is-active">Home</a> -->
            <nuxt-link class="navbar-item" to="/">
              <h1 class="title is-5 is-bold is-spaced">Computer Science</h1>
            </nuxt-link>
          </div>
        </div>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          @click="showNav = !showNav"
          :class="{ 'is-active': showNav }"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': showNav }">
        <div class="navbar-end">
          <div class="navbar-item">
            <p @click="showNav = false"><nuxt-link class="navbar-item" to="/">หน้าหลัก</nuxt-link></p>
            <p @click="showNav = false"><nuxt-link class="navbar-item" to="/aboutme">เกี่ยวกับเรา</nuxt-link></p>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">หลักสูตร</a>

              <ModalCouse/>
            </div>

            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">ติดต่อ</a>

              <div class="navbar-dropdown">
                <!-- <a class="navbar-item">Facebook Panpage</a> -->
                <a
                  class="navbar-item"
                  href="https://www.facebook.com/ComputerScienceBsru/"
                  target="_blank"
                  title="Facebook"
                  aria-label="Facebook"
                >
                  <p>
                    <span class="icon">
                      <i class="fab fa-facebook-f"></i>
                    </span>
                    Facebook Panpage
                  </p>
                </a>

                <a
                  class="navbar-item"
                  href="#"
                  target="_blank"
                  title="Twitter"
                  aria-label="Twitter"
                >
                  <p>
                    <span class="icon">
                      <i class="fab fa-twitter"></i>
                    </span>
                    Twitter
                  </p>
                </a>

                <a class="navbar-item" href="#" target="_blank" title="Line" aria-label="Line">
                  <p>
                    <span class="icon">
                      <i class="fab fa-line"></i>
                    </span>
                    Line
                  </p>
                </a>

                <hr class="navbar-divider">
                <a class="navbar-item">บุคลากร</a>
                <a class="navbar-item">ข้อมูลงานวิจัย</a>
              </div>
            </div>
            <div class="buttons">
              <!-- <a class="button is-primary">
                <strong>Sign up</strong>
              </a>-->
              <!-- <a class="button is-light">Log in</a> -->

              <button label="Auth Student and advisor" position="is-bottom">
                <!-- <button class="button is-dark">Bottom</button> -->
                <nuxt-link class="button is-light" to="/auth/login">Log in</nuxt-link>
              </button>

              <!-- <nuxt-link class="button is-light" to="/auth/login">Log in</nuxt-link> -->
            </div>
          </div>
        </div>
      </div>
    </nav>
    <hr>
  </div>
</template>

<script>
import ModalCouse from "~/components/DetailPage/Modal/modal_couse";
export default {
  components: {
    ModalCouse
  },
  data() {
    return {
      showNav: false
    };
  }
};
</script>
