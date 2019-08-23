const express=require('express');
//引入路由器
const userRouter=require('./routes/user.js');
//引入body-parser
const bodyParser=require('body-parser');
//创建web服务器
var server=express();
server.listen(8080);
//托管静态资源到pubilc下
server.use(express.static('mypro'));
//使用body-parser中间件，将post请求的数据格式化为对象
server.use( bodyParser.urlencoded({
  extended:false
}));
//使用路由器
//使用(挂载)的url:/user
//  /user/login
server.use('/user',userRouter);