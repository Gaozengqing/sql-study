import {ref,computed} from "vue"
import {defineStore} from "pinia"

export const useFileStore=defineStore('file',()=>{
    const file=ref({
        bigCate:"基础语法",
        smallCate:"查询",
        file:"全表查询"
    })
    const setFile=function(content){
        file.value=content
    }
    return {file,setFile}
})