<template>
  <div>
    <footer class="footer">
      <div class="container">
        <div class="column is-10 is-offset-1">
          <div class="columns">
            <div class="column is-offset-1">
              <p class="footer-link-title has-text-weight-bold">Navigation</p>
              <!-- Loop through the navigation items -->

              <nuxt-link to="/" class="navbar-item nav-home">Home</nuxt-link>
              <nuxt-link to="/aboutme" class="navbar-item nav-home">About Us</nuxt-link>
              <nuxt-link to="#" class="navbar-item nav-home">#Course</nuxt-link>
              <nuxt-link to="#" class="navbar-item nav-home">#Contact</nuxt-link>
            </div>
            <div class="column is-offset-1">
              <p class="footer-link-title has-text-weight-bold">Follow Us</p>
              <!-- Loop through the navigation items -->

              <a
                class="navbar-item"
                href="#"
                target="_blank"
                title="Facebook"
                aria-label="Facebook"
              >
                <p>
                  <span class="icon">
                    <i class="fab fa-facebook-f"></i>
                  </span>
                  Facebook
                </p>
              </a>

              <a class="navbar-item" href="#" target="_blank" title="Twitter" aria-label="Twitter">
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
            </div>
            <div class="column is-offset-1">
              <p class="footer-link-title has-text-weight-bold">Donwload Now</p>
              <!-- Loop through the navigation items -->
              <a
                class="navbar-item nav-home is-active"
                href="https://biron.bironthemes.com/"
              >ใบ CP 1 ขอสอบหัวข้อโปรเจค</a>
              <a
                class="navbar-item nav-style-guide"
                href="https://biron.bironthemes.com/style-guide/"
              >ใบ CP 2 ขอสอบโปรเจค</a>
              <a
                class="navbar-item nav-features"
                href="https://biron.bironthemes.com/features/"
              >ใบ CP 3 ...</a>
              <a
                &#x26;#x3C;a
                class="navbar-item nav-features"
                href="https://biron.bironthemes.com/features/"
              >ใบ CP 4 ...</a>
              <a
                class="navbar-item nav-tech"
                href="https://biron.bironthemes.com/tag/technology/"
              ># เอกสารดาวน์โหลดอื่นๆ</a>
            </div>
          </div>
          <hr>
        </div>
      </div>
      <div class="content has-text-centered">
        <i class="far fa-hand-point-right"></i> Create by
        <strong>Top Ramet</strong> xx/xx/2019,
      </div>
      <div class="content has-text-centered">
        Copyright © 2019,
        <strong>Computer Science</strong>, Bansomdejchaopraya Rajabhat University.
      </div>
    </footer>
  </div>
</template>

<script>
import Download from '~/components/DetailPage/download'
export default {
  name: "Footer",
  components:{
    Download
  }
};
</script>

<style scoped>
.footer {
  position: relative;
  bottom: 0 px;
  width: 100%;
}
</style>