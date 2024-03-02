<template>
  <div class="main">
    <Left class="left"></Left>
    <Right class="right"></Right>
  </div>
</template>

<script setup>
 import Left from "./Home/Left.vue"
 import Right from "./Home/Right.vue"
</script>

<style scoped>
@media screen and (max-width: 900px){
    .main{
      flex-direction: column;
    }
}
.main{
  display: flex;
}
.main .left{
  flex: 1;
}
.main .right{
  flex: 1;
}
</style>