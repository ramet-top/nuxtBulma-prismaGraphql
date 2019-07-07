<template>
  <section>
    <div class="navbar-dropdown">
      <div @click="checkCardModal">
        <nuxt-link to="{params: { id: 1 }, path:'/test' }" class="navbar-item">
          <p>
            <span class="icon">
              <i class="fas fa-graduation-cap"></i>
            </span>
            ปริญญาตรี
          </p>
        </nuxt-link>
      </div>

      <div @click="checkCardModal">
        <nuxt-link to="#" class="navbar-item">
          <p>
            <span class="icon">
              <i class="fas fa-user-graduate"></i>
            </span>
            ปริญญาโท
          </p>
        </nuxt-link>
      </div>

      <hr class="navbar-divider">

      <a
        class="navbar-item"
        href="#"
      >
        <p>
          <span class="icon">
            <i class="fas fa-book-reader"></i>
          </span>
          เนื้อหารายวิชา
        </p>
      </a>
    </div>

    <div class="modal" :class="{ 'is-active': isCardModalActive }">
      <div class="modal-background" @click="isCardModalActive = !isCardModalActive"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">ป.ตรี</p>
          <button @click="isCardModalActive = !isCardModalActive" class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <P>detail A</P>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success">Ok</button>
          <button @click="isCardModalActive = !isCardModalActive" class="button">Cancel</button>
        </footer>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isCardModalActive: false
    };
  },
  methods: {
    checkCardModal ({ params }) {
        this.isCardModalActive = !this.isCardModalActive
        // if(param.id == 1){
        //   return alert('1')
        // }
        return alert(params.id) 
    }
  }
};
</script>