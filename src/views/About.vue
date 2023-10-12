<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link class="" v-for="item in pages" :key="item.name" :to="item.path">
    {{ item.name }}</router-link>
  </div>
</template>

<script>
import dynamicRoutes from '../components/dynamic/components.js';

export default {
  data () {
    return {
      pages: []
    }
  },
  mounted () {
    const dynamicRouteKeys = ['113D5335AAF7E5E', '3BC4665FCB73F85', '4F3D26AAEBC78F8', '213799DD26F41CC', '5434A50E6A85897']
    dynamicRouteKeys.forEach(key => {
      this.pages = this.pages.concat([dynamicRoutes[key]]);
    })
  }
}
</script>
