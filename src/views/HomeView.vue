<script setup>
</script>

<template>
  <div class='d-flex' width="760px">
    <div class='content'>
      <div class='about d-flex mt-4'>
        <div class='me-profile order-2 my-4'>
          <img src='../../public/kylemain-square.webp' class='mx-auto'/>
        </div>
        <div class="me-3 order-1">
          <h1 class='my-4'> Hi, i'm Kyle</h1>
        <p>Hello, I am a self-taught software developer. My home server is in <span class="text-red">Vancouver Canada</span>. This is my website that aims to be (amoung other things) my digital mind garden.
        </p>
        </div>
<!--        <div class="ms-3">
          <img src="../../public/kylemain-square.jpg"/>
</div>-->
      </div>

      <div class="contact-card mt-4">
        <h2>Projects</h2>
        <div class='row'>
          <RouterLink to="/ivin">IVIN</RouterLink>
          <RouterLink to="/ivin">Bartender</RouterLink>
          <RouterLink to="/ivin">CloseBuy</RouterLink>
          <RouterLink to="/ivin">The South West Optimists</RouterLink>
        </div>
      </div>

      <div class="mt-4">
        <h2>Interests</h2>
        <div class='row'>
          <RouterLink to="/ivin">Sourdough Bread</RouterLink>
          <RouterLink to="/ivin">Sourdough Pizza Dough</RouterLink>
          <RouterLink to="/ivin">Kombucha</RouterLink>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
img {
  border-radius: 50%;
  width: 128px;
}
.me-profile {
  width: 100%;
}
</style>
