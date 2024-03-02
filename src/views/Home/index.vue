<template>
  <div>
    <el-container style="width: 100vw;">
      <el-header class="header" style="display: flex;">
        <img src="../../assets/logo.png" alt="">
        <div @click="handclick('lean')" :class="route.fullPath=='/lean'?'active':'' ">学习</div>
        <div @click="handclick('level')" :class="route.fullPath=='/level'?'active':''">关卡</div>
      </el-header>
      <el-main >
        <router-view></router-view>
      </el-main>
    </el-container>
    <el-backtop :right="40" :bottom="100" />
  </div>
</template>

<script setup>
   import { ElButton, ElContainer, ElHeader, ElMain,ElSelect,ElOption,ElBacktop } from "element-plus";
   import {ref,onMounted} from "vue"
   import {useRouter,useRoute} from "vue-router"
   import { useFileStore } from "../../stores/file";
  
   const filestore=useFileStore()
   const router=useRouter()
   const route=useRoute()


  const handclick=(flag)=>{

     if(flag=="lean")
     router.push({name:"lean"})
     else 
     router.push({name:"level"})
  }

  
  onMounted(()=>{
  })
</script>

<style scoped>

.header{
  display: flex;
  border-bottom: 1px solid black;
}
.header div{
   height: 100%;
   line-height: 60px;
   margin:0 20px
}
.header div:hover{
  cursor: pointer;
  color: skyblue;
  border-bottom: 2px solid skyblue;
}


.active{
  color: skyblue;
  border-bottom: 1px solid skyblue;
}
</style>