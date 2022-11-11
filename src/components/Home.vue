<template>
  <div class="row justify-content-center">
    <h1 class="text-center">Get Mentored</h1>
    <div class="text-center">
      <router-link to="/mentee-register" tag="button" class="btn btn-outline-primary">Become a Mentee</router-link>
      <router-link to="/mentor-register" tag="button" class="btn btn-outline-primary">Become a Mentor</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.btn {
  margin: 15px;
}
</style>
