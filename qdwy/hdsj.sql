SET NAMES UTF8;
DROP DATABASE IF EXISTS hdsj;
CREATE DATABASE hdsj CHARSET=UTF8;
USE hdsj;
/*数据表创建*/
#hdsj_user用户表，包含注册后的用户资料
CREATE TABLE hdsj_user(
    uid      INT PRIMARY KEY AUTO_INCREMENT,    #用户的ID，为用户的唯一标识，NULL自动生成
    uname    varchar(20),               #用户名，不可重复，具有唯一性，注册时需要进行判断
    upwd     varchar(20),                       #密码
    email    varchar(100),                      #邮箱
    phone    varchar(11),                      #手机号，11位
    avatar   varchar(128),                       #用户身份
    user_name  varchar(32),                      #真实姓名
    usex     varchar(10)                      #性别
);

/*数据插入*/
/*hdsj_user用户表*/
INSERT INTO hdsj_user VALUES(1,"dingding","123456","123456@qq.com","12345674587","新晋学徒","丁春秋","1");
INSERT INTO hdsj_user VALUES(2,"chunaim","13689364822","123456@qq.com","18451501265","实力学徒","丁小喵","0");
INSERT INTO hdsj_user VALUES(3,"1234566","13689364823","123456@qq.com","15594221241","新晋学徒","李大壮","1");
INSERT INTO hdsj_user VALUES(4,"dingchu","13689364824","123456@qq.com","15564582324","新晋菜鸟","成亮","0");
INSERT INTO hdsj_user VALUES(5,"xl12456","13689364825","123456@qq.com","15268521125","新晋菜鸟","张大山","0");
INSERT INTO hdsj_user VALUES(6,"dinkjhs","13689364826","123456@qq.com","15623421565","新晋菜鸟","陈诚","1");
INSERT INTO hdsj_user VALUES(7,"kjouhsd","13689364827","123456@qq.com","16526251121","新晋菜鸟","顾小妹","1");
