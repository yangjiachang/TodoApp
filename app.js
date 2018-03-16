//引入express框架
var express = require('express');

//自定义模块todoController
var todoController = require('./controller/todoController');

//实例化express对象
var app = express();

//设置模板引擎
app.set('view engine','ejs');

//公共样式
//app.use('/public',express.static('public'));
app.use(express.static('./public'));

//将app对象传递到todoController
todoController(app);

//监听端口
app.listen(3000);
