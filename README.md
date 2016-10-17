# ES6Study
Study es6
用node管理
babel 进行es6 转换
需要安装
转码规则
ES2015转码规则
npm install --save-dev babel-prest-es2015
react转码规则
npm install --save-dev babel-prest-react
ES7不同阶段语法提案转码规则（4个阶段）选装一个
npm install --save-dev babel-prest-stage-0
npm install --save-dev babel-prest-stage-1
npm install --save-dev babel-prest-stage-2
npm install --save-dev babel-prest-stage-3
在根目录下面 配置.babelrc文件
内容为
{
	"presets" : [
		"es2015",
		"react",
		"stage-2"
	],
	"plugins" : [
	
	]
}
安装babel-cli命令行转码
npm install --save-dev babel-cli
转换命令 源文件 转换 目标文件
babel example.js  -o compiled.js
转换源目录，目标目录
babel src -d dist
# -s 参数生成source map 文件
配置的脚本为
"scripts": {
	"build": "babel src -d dist"
}
src ---  源码目录
dist --- 转换之后的文件目录
