const path=require('path')
const webpack=require('webpack') //启用热更新的第二部

//导入在内存中生成html的插件,只要是插件就要放到plugins节点中去
//1.自动在内存中根据指定页面生成一个内存的页面
//2.自动把打包好的bundle.js引用到页面
const htmlWebpackPlugin=require('html-webpack-plugin')

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
   new  webpack.HotModuleReplacementPlugin() ,//new 一个热更新的模块对象  。这是启用热更新的第三步

   new htmlWebpackPlugin({
//创建一个内存中生成html页面的插件
    template:path.join(__dirname,'./src/index.html'),//指定模板页面，将来会根据指定的路径，去生成内存中的页面
    filename:'index.html' //指定生成的页面名称
   })
 ],
 module:{//这个节点配置第三方模块的加载器
  rules:[//配置所有第三方的匹配规则
    {test:/\.css$/,use:['style-loader','css-loader']},//配置处理.css文件的第三方loader规则
    {test:/\.less$/,use:['style-loader','css-loader','less-loader']}, //处理less的第三方规则
    {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=7631&name=[hash:8]-[name].[ext]'}, //处理图片路径的loader
    // limit=7631 给定的值是图片的大小单位是byte，如果给的值大于图片的大小那么图片就会被转为base64,如果值小于等于图片的值就不会被转为base64
    // [name].[ext] 加上这个属性 图片名称就不会被替换为哈希值  [hash:8]在图片面前放8位的哈希值
    {test:/\.js$/,use:'babel-loader',exclude:/node_modules/} //这是配置Babel，用来转换高级js
  ]
 }
}

//当我们再webpack控制直接输入webpack命令执行的时候，webpack做了以下步骤
//1.首先webpack发现，我们没有通过命令输入指定入口和出口
//2.webpack就会到根目录中查找一个叫做webpack.config.js的配置文件
//3.当找到配置文件后webpack会去解析执行这个配置文件，当解析到真