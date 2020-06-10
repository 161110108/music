<template>
  <div id="index">
    <Head></Head>
    <Nav></Nav>
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import Head from './index/Head'
import Nav from './index/Nav'
export default {
  components:{Head,Nav}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
