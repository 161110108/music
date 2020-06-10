<template>
  <mt-swipe :show-indicators="false" class="swiper">
    <mt-swipe-item v-for='(item,key) in arr' :key='key'>
      <img :src="item.imageUrl" alt="">
    </mt-swipe-item>

  </mt-swipe>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    props:['arr'],

};
</script>
