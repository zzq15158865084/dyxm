const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
var router=express.Router();
//添加路由
//1.用户登陆
router.post("/login",(req,res)=>{
	//接收验证数据
	var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	console.log($uname)
	if(!$uname){
		res.send("用户名不存在");
		return;
	}
	if(!$upwd){
		res.send("密码不存在");
		return;
	}
	//查询数据库
	var sql="select * from hdsj_user where uname=? and upwd=?";
	pool.query(sql,[$uname,$upwd],(err,result)=>{
		if(err) throw err;
		console.log(result)
		if(result.length>0){
			res.send("0");
		}else{
			res.send("用户名密码错误");
		}
	});
});
//1.查询用户名
router.post("/lists",(req,res)=>{
  var $uname=req.body.uname;
      if(!$uname){
         res.send("用户名未接收到");
       return;
    }
  pool.query("select * from hdsj_user $uname=?",(err,result)=>{
    if(err) throw err;
    res.send(result);
    if(result.affectedRows>0){
      res.send("1");
      }else{
      res.send("0")
      }
  });
  });
//2.用户注册
router.post("/insertuser",(req,res)=>{
	var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	var $email=req.body.email;
	var $phone=req.body.phone;
	if(!$uname){
	     res.send("登录名称未接收到");
		 return;
	}
	if(!$upwd){
	     res.send("登录密码未接收到");
		 return;
	}
	if(!$email){
	     res.send("用户邮箱未接收到");
		 return;
	}
    if(!$phone){
	     res.send("联系电话未接收到");
		 return;
	}
	var sql='INSERT INTO hdsj_user SET ?';
    pool.query(sql,[req.body],(err,result)=>{
    if(err) throw err;
    console.log(result);
    //判断是否注册成功
    if(result.affectedRows>0){
    res.send("1");
    }else{
    res.send("0")
    }
});
});
//导出路由器对象
module.exports=router;

