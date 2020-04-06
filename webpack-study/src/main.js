//这个main.js是我们项目的js入口文件

//导入jqyery
//import ** from ** 是es6导入模块的方式
//由于es6的代码太高级，浏览器解析不来， >webpack src/main.js --output dist/bundle.js
import $ from 'jquery'

$(function(){
    $('li:odd').css("backgroundColor",'lightblue');
    $('li:even').css("backgroundColor",function(){
        return '#'+"D97634";
    });
})