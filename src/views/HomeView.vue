<script setup>
</script>

<template>
  <div class='d-flex' width="760px">
    <div class='content'>
      <div class='about d-flex mt-4'>
        <div class="me-3">
        <p>Hello, I am a self-taught software developer. My home server is in <span class="text-red">Vancouver Canada</span>. This is my website that aims to be (amoung other things) my digital mind garden.
        </p>
        </div>
<!--        <div class="ms-3">
          <img src="../../public/kylemain-square.jpg"/>
</div>-->
      </div>

      <div class="contact-card mt-4">
        <h2>Area 1</h2>
        <RouterLink to="/ivin">IVIN</RouterLink>
        <p>item 2</p>
      </div>

      <div class="mt-4">
        <h2>Area 2</h2>
        <p>item 1</p>
        <p>item 2</p>
      </div>

    </div>
  </div>
</template>

<style scoped>
img {
  border-radius: 50%;
  width: 64px;
  height: 64px;
}
</style>
