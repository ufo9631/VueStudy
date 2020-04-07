//这个main.js是我们项目的js入口文件

//导入jqyery
//import ** from ** 是es6导入模块的方式
//由于es6的代码太高级，浏览器解析不来， >webpack src/main.js --output dist/bundle.js
import $ from 'jquery'

$(function(){
    $('li:odd').css("backgroundColor",'black');
    $('li:even').css("backgroundColor",function(){
        return '#'+"D97634";
    });
})

//使用webpack-dev-server 这个工具 来实现自动打包编译的功能
// 1. 运行npm i webpack-dev-server -D 把这个工具安装到项目的本地开发依赖
// 2.安装完毕后，这个工具的用法和webpack命令的用法 完全一样
// 3.由于我们是在项目中安装的 所以无法把它当做脚本命令执行

// 4.注意 webpack-dev-server 这个工具 如果想要正常运行，要求在本项目中必须安装webpack(就算全局安装过也需要在本地安装一次)      npm i webpack -D
// 5.webpack-dev-server 帮我们打包生成的bundle.js文件并没有存放到实际的物理磁盘上，而是直接托管到电脑的内存中，所以我们再项目根目录中，根本找不到这个包打好的bundle.js
// 6.我们可以认为webpack-dev-server把打包好的文件，以一种虚拟的形式，托管到我们的项目中