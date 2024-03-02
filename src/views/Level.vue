<template>
  <el-card>
       <h2 style="font-size: 30px;">关卡</h2>
    <el-card v-for="(item,index) in data" :key="index" style="margin-top:20px">
       <div style="display: flex; justify-content: space-between; line-height:40px">
        <div style="display: flex;">
        <p>{{ item.id }}、</p>
        <p>{{ item.bigCate }}-{{ item.smallCate }}-{{ item.file }}</p>
      </div>
      <div><el-button @click="HangdClick(item)">挑战</el-button></div>
       </div>
    </el-card>
  </el-card>
</template>

<script setup>
import axios from "axios"
import {ref,onMounted} from "vue";
import { useRouter } from "vue-router";
import { ElCard,ElButton } from "element-plus";
import {useFileStore} from "../stores/file"
const data =ref([]);
const filestore=useFileStore()
const router=useRouter()

onMounted(()=>{
   axios.get("src/utils/map.json").then((res)=>{
        // console.log(res);
        data.value=res.data
   })
})

const HangdClick=(item)=>{
  //  console.log(item);
   filestore.setFile(item)
   router.push({name:"lean"})
}
</script>

<style>
</style>