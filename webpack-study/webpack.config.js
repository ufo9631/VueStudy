const path=require('path')
const webpack=require('webpack') //启用热更新的第二部
//这个配置文件，通过node中的模块操作，向外暴露一个配置对象
module.exports={
 entry:path.join(__dirname,'/src/main.js'), //表示webpack打包哪个文件
 output:{
     path:path.join(__dirname,'/dist'), //指定打包好的文件输出到哪里去
     filename:"bundle.js" //指定输出的文件名称
 },
 devServer:{//这是配置dev-server命令参数的第二种形式，相对来说比较麻烦
    open:true,//自动打开浏览器
    port:300,//设置启动的端口
    contentBase:'src',//指定托管的根目录
    hot:true //启用热更新的第一步

 },
 plugins:[//配置插件的节点
   new  webpack.HotModuleReplacementPlugin() //new 一个热更新的模块对象  。这是启用热更新的第三步

 ]
}

//当我们再webpack控制直接输入webpack命令执行的时候，webpack做了以下步骤
//1.首先webpack发现，我们没有通过命令输入指定入口和出口
//2.webpack就会到根目录中查找一个叫做webpack.config.js的配置文件
//3.当找到配置文件后webpack会去解析执行这个配置文件，当解析到真