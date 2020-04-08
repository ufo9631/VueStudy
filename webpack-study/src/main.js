//这个main.js是我们项目的js入口文件

//导入jqyery
//import ** from ** 是es6导入模块的方式
//由于es6的代码太高级，浏览器解析不来， >webpack src/main.js --output dist/bundle.js
import $ from 'jquery'

import './css/index.css' //使用import导入css样式表，注意 webpack，默认只能打包处理js类型的文件，无法处理其它的非js类型文件
//如果要处理非js类型的文件，我们需要手动安装一些第三方的loader加载器
//1.如果要打包处理css文件需要安装npm i style-loader css-loader -D
//2.打开webpack.config.js这个配置文件，在里面新增一个配置节点，叫做mudule，它是一个对象，这个module对象身上 有个rules属性，这个rules属性是个数组，这个数组中存放所有第三方文件的配合和处理规则

import './css/index.less'


//注意：webpack 处理第三方文件类型过程
//1.发现这个要处理的文件不是js文件，然后就去配置文件中查找有没有第三方loader 规则
//2.如果能找到对应规则 就会调用对应的loader处理 这种文件类型
//3.在调用loader是从后往前调用
//4.当最后一个loader调用完毕，会把处理的结果交给webpack进行打包合并并输出到bundle.js中去


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