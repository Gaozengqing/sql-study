const initSqlJs=require("sql.js/dist/sql-wasm.js");
const fs= require("fs")
const path=require("path")
const filbuffer=fs.readFileSync(path.resolve(__dirname,"hello.sqlite"))

initSqlJs().then(function (SQL){
    const db=new SQL.Database(filbuffer)
    db.run("drop table if exists users")
    db.run("CREATE TABLE users (id,name,phone,address);")
    db.run(
        `
        INSERT INTO users(id,name,phone,address)
        VALUES (1,'黄宝康','15071720805','江西赣州'),
        (2,'张三','15071ssss','江西宜春'),
        (3,'李四','15071df0805','江西赣州')
        `
    )
    const contents=db.exec("SELECT * FROM users");
    console.log("***contents***",contents)

    var stmt=db.prepare("SELECT * FROM users WHERE id BETWEEN $start AND $end")
    stmt.bind({$start:1,$end:2})
    while(stmt.step()){
        var row=stmt.getAsObject()
        console.log("HEre is a user row："+JSON.stringify(row));
    }

    const stmt1=db.prepare("SELECT * FROM users WHERE id=:aval AND name=:bval")

    // 参数绑定
    const result=stmt1.getAsObject({":aval":1,":bval":"黄宝康"})
    console.log(result);

    // 绑定其他参数
    stmt1.bind([3,"李四"])
    while(stmt1.step())
    console.log(stmt1.get());

    // 导出
    const data=db.export()
    const buffer=Buffer.from(data)
    fs.writeFileSync(path.resolve(__dirname,"hello.sqlite"),buffer)

    // db.run("update users set name='黄大仙' where id=1")
    // stmt=db.prepare("SELECT *FROM users")
    // while(stmt.step()){
    //     var row=stmt.getAsObject()
    //     console.log("更新之后:"+JSON.stringify(row));
    // }
    db.close()
})