<template>
  <section class="page404">
    <div class="container">
      <div class="row">
        <div class="col-xl-3"></div>
        <div class="col-xl-6 text-center">
          <h1>4<span>0</span>4</h1>
          <h3>Page Not Found</h3>
          <p>
            Oops something went wrong. Check your URL Address and try again.
          </p>
          <div class="btn-div">
            <router-link :to="{ name: 'Home' }">
              <a><i class="fas fa-long-arrow-alt-left"></i> Back To HomePage</a>
            </router-link>
          </div>
        </div>
        <div class="col-xl-3"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
