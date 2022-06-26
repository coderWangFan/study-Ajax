//引入 express
const express=require('express')

//创建引用对象
const app=express()

//创建路由规则
app.get('/',(request,response)=>{
    //设置响应
    response.send('hello express')
})

//监听端口，启动服务
app.listen(8000,()=>{
    console.log('8000端口开启了，正在进行监听中')
})
