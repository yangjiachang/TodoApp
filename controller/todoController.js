
//引入body-parser模块
var bodyParser = require('body-parser');
//对数据进行解析
var urlencodeParser = bodyParser.urlencoded({extended:false});

var data = [
    {item:"大家好,我是nodejs"},
    {item:"好好学习Node吧!!"},
    {item:"克利夫兰骑士总共冠军!"}
];

module.exports = function(app){
    //获取数据
    app.get('/todo',function(req,res){
        res.render('todo',{todos:data});
    });
    //传递数据
    app.post('/todo',urlencodeParser,function(req,res){
        data.push(req.body);
    });
    //删除数据
    app.delete('/todo/:item',function(req,res){
        data = data.filter(function(todo){
            // console.log(req.params.item !== todo.item);
            //     大家好我是node       有了 false   将false的数据过滤掉
            return req.params.item !== todo.item;
        });
        res.json(data);
    });
}