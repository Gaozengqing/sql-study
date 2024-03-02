<template>
  <div>
    <v-md-preview :text="str" class="displayArea" style="height: 80vh; overflow:auto;"></v-md-preview>

  </div>
</template>

<script setup>
import {ref,onMounted} from "vue"
import axios from "axios";
import { useFileStore } from "../../stores/file";
const filestore=useFileStore()

const str=ref(``)

onMounted(()=>{
  axios.get(`src/post/${filestore.file.bigCate}/${filestore.file.smallCate}/${filestore.file.file}.md`).then(res=>{
  str.value=res.data
})

})

</script>

<style>
.displayArea::-webkit-scrollbar{
  width: 0;
}
</style>