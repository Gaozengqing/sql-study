<template>
  <div>
    <div>
      <div ref="main" style="width: 100%; height: 300px"></div>
      <div style="margin-top: 20px;"></div>
      <el-button type="primary" style="width: 100px;" @click="handleRun">运行</el-button>
      <!-- <el-button @click="handleBtn">获取</el-button> -->
      <el-button @click="handleForrmat">格式化</el-button>
      <el-button @click="handelSet">重置</el-button>
      <el-menu default-active="2" class="el-menu-vertical-demo">

        <el-sub-menu index="1" style="border-bottom: 2px solid black;">
          <template #title>
            <!-- <el-icon>
              <location />
            </el-icon>-->
            <span>查看执行结果</span>
          </template>
          <div class="status" style="margin: 30px 0;display:flex;justify-content:space-between">
            <h3>执行结果</h3>
            <div>
              <img v-if="isOk" src="../../assets/success-fill.png" style="width: 20px; height:20px">
            <img v-else src="../../assets/error.png" style="width: 20px; height:20px">
            <p style="margin-right: 20px;">{{ isOk?"正确":"错误" }}</p>
            </div>
        
          </div>

          <el-table :data="tableData" style="width: 100%" v-if="isOk">
            <el-table-column  prop="name" label="name" width="180" />
            <el-table-column  prop="age" label="age" width="180" />
            <el-table-column  prop="class_id" label="class_id" />
            <el-table-column  prop="score" label="score" width="180" />
            <el-table-column  prop="exam_num" label="exam_num" />
          </el-table>
          <div v-else style="color: red; margin-left:20px">{{ errorMsg }}</div>

          <!-- <div v-for="(column,index) in columns" :key="index">{{ column }}</div> -->
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <!-- <el-icon>
              <location/>
            </el-icon>-->
            <span>查看答案</span>
          </template>
          {{answer}}
        </el-sub-menu>
      </el-menu>
    </div>
  </div>
</template>

<script setup>
// import Vue from "vue"
import {
  ElSelect,
  ElOption,
  ElButton,
  ElSubMenu,
  ElMenu,
  ElTable,
  ElTableColumn,
  ElMessage
} from "element-plus";
import * as monaco from "monaco-editor";
import { toRaw, onMounted, ref } from "vue";

// 导入代码格式化
import { format } from "sql-formatter";

const monacoEditor = ref(undefined);
const main = ref(null);
// let languageList = ref([
//   "javascript",
//   "json",
//   "sql",
//   "java",
//   "groovy",
//   "shell",
//   "python"
// ]);
let languageList = ref(["sql"]);
import { useFileStore } from "../../stores/file";
import axios from "axios";

const filestore=useFileStore()
const tableData = ref([]);
const isOk = ref(false);
const errorMsg = ref("");
const answer=ref("")

onMounted(() => {
  init();

  //获取答案
  axios.get(`src/post/answer/${filestore.file.file}.txt`).then(res => {
    answer.value = res.data;
  });
});
const handleRun = () => {
  axios
    .get(
      // localhost:5005
      `http://localhost:5005/create?sql=${toRaw(monacoEditor.value).getValue()}&truesql=${answer.value}`
    )
    .then(res => {
      console.log("结果", res);
      isOk.value = res.data.status == "Error" ? false : true;
      if (res.data.status == "Error") {
        //处理错误
        ElMessage.error(res.data.msg);
        errorMsg.value = res.data.msg;
      } else {
        tableData.value = [];
        //处理成功时，需要显示表格
        const values = res.data.msg[0].values;
        const columns = res.data.msg[0].columns;
        for (let i = 0; i < values.length; i++) {
          //将列的属性进行展开，要不然108读取属性时为undefined
          let temp = { ...columns };
          let obj = {};
          for (let j = 0; j < columns.length; j++) {
            obj[temp[j]] = values[i][j];
          }
          tableData.value.push(obj);
        }
        console.log("处理之后的结果", tableData.value);
      }
    });
};
const handleForrmat = () => {
  // monacoEditor.value.getAction("editor.action.formatDocument").run();
  format(toRaw(monacoEditor.value).getValue());
  let formated = format(toRaw(monacoEditor.value).getValue());
  //处理将格式化之后的值回显到编辑器
  console.log(formated);
  toRaw(monacoEditor.value).setModel(
    monaco.editor.createModel(`${formated}`, "sql")
  );
};
const handleBtn = () => {
  let demo = toRaw(monacoEditor.value).getValue(); //获取编辑器中的文本
  console.log(demo);
};
const handelChange = val => {
  monaco.editor.setModelLanguage(monacoEditor.value.getModel(), val);
};
const handelSet = () => {
  toRaw(monacoEditor.value).setModel(
    monaco.editor.createModel(`select * from student`, "sql")
  );
};

const init = () => {
  // 使用 - 创建 monacoEditor 对象
  monacoEditor.value = monaco.editor.create(main.value, {
    theme: "hc-black", // 主题hc-black
    language: "sql",
    renderLineHighlight: "gutter",
    folding: true, // 是否折叠
    roundedSelection: false,
    foldingHighlight: true, // 折叠等高线
    foldingStrategy: "indentation", // 折叠方式  auto | indentation
    showFoldingControls: "always", // 是否一直显示折叠 always | mouseover
    disableLayerHinting: true, // 等宽优化
    emptySelectionClipboard: false, // 空选择剪切板
    selectionClipboard: false, // 选择剪切板
    automaticLayout: true, // 自动布局
    codeLens: true, // 代码镜头
    scrollBeyondLastLine: false, // 滚动完最后一行后再滚动一屏幕
    colorDecorators: true, // 颜色装饰器
    accessibilitySupport: "on", // 辅助功能支持  "auto" | "off" | "on"
    lineNumbers: "on", // 行号 取值： "on" | "off" | "relative" | "interval" | function
    lineNumbersMinChars: 5, // 行号最小字符   number
    enableSplitViewResizing: false,
    readOnly: false //是否只读  取值 true | false
  });
};
</script>

<style>
</style>