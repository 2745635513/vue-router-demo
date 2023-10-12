<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link to="/page1">page1</router-link>
  </div>
</template>

<script>
import dynamicRoutes from '../components/dynamic/components.js';

export default {

  mounted () {
    const dynamicRouteKeys = ['113D5335AAF7E5E', '3BC4665FCB73F85', '4F3D26AAEBC78F8', '213799DD26F41CC', '5434A50E6A85897']
    dynamicRouteKeys.forEach(key => {
      this.$router.addRoute(dynamicRoutes[key]);
      // this.$router.options.routes.push(dynamicRoutes[key])
    })
  }
}
</script>
