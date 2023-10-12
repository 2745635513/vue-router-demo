import dynamicRoutes from '../components/dynamic/components.js';

export function addRoutes (context) {
  const dynamicRouteKeys = ['113D5335AAF7E5E', '3BC4665FCB73F85', '4F3D26AAEBC78F8', '213799DD26F41CC', '5434A50E6A85897']
  dynamicRouteKeys.forEach(key => {
    context.$router.addRoute(dynamicRoutes[key]);
    // this.$router.options.routes.push(dynamicRoutes[key])
  })
}
