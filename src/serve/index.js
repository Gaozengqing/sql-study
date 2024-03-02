const express = require('express')
const app = express()
const initSqlJs = require("sql.js/dist/sql-wasm.js");

const fs = require("fs")
const path = require("path")
const filbuffer = fs.readFileSync(path.resolve(__dirname, "db.sqlite"))


app.get('/create', (req, res) => {
    const { sql,truesql } = req.query
    console.log(sql,truesql);
    initSqlJs().then(function (SQL) {
        const db = new SQL.Database(filbuffer)
        //正确答案
        db.run("drop table if exists student")
        db.run("create table if not exists student(name ,age  ,class_id   ,score ,exam_num);")
        db.run("insert into student (name, age, class_id, score, exam_num) values ('鸡哥', 25, 1, 2.5, 1),('高增庆', 205, 10, 2.5, 11) ")
        const contents = db.exec(truesql);
        console.log("***contents***", contents)
        //用户答案
        const usercontents = db.exec(sql);
        if (contents[0].columns.length == usercontents[0].columns.length && contents[0].values.length == contents[0].values.length) {
            res.send({
                status: "OK",
                msg:contents
            })
        } 
        db.close()
    }).catch(err => {
        res.send({
            status:"Error",
            msg: err.message
        })
    })
})
app.get("/test",(req,res)=>{
    res.send({
        msg:"success"
    })
})
app.listen(5005, (err) => {
    if (!err) console.log("服务器启动成功了")
})

