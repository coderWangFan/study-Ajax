//引入 express
const express=require('express')

//创建引用对象
const app=express()

//创建路由规则


//get请求
app.get('/sever',(request,response)=>{
    //设置响应头，跨域
    response.setHeader('Access-Control-Allow-Origin','*')

    //设置响应
    response.send('hello express--get请求')
})

app.post('/sever',(request,response)=>{
    //设置响应头，跨域
    response.setHeader('Access-Control-Allow-Origin','*')

    //设置响应头，允许自定义请求头信息
    response.setHeader('Access-Control-Allow-Headers','*')

    //设置响应
    response.send('hello express--post请求')
})


app.all('/json-sever',(request,response)=>{
    //设置响应头，跨域
    response.setHeader('Access-Control-Allow-Origin','*')

    //设置响应头，允许自定义请求头信息
    response.setHeader('Access-Control-Allow-Headers','*')

    const data={
        name:'小王',
        task:'测试json返回'
    }

    //设置响应  send不支持对象格式
    response.send(JSON.stringify(data))
})

//监听端口，启动服务
app.listen(8000,()=>{
    console.log('8000端口开启了，正在进行监听中')
})
