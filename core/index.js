/**
 * 封装koa mvc基础架构初始化工作
 */
const Koa = require('koa');
const { initConfig, initController, initService, initModel, initRouter, initMiddleware, initSchedule }  = require('./loader');
class Application{
	constructor(){
		this.$app = new Koa();
		// 初始化config
		this.$config = initConfig(this);
		// 初始化controller
		this.$controller = initController(this);
		// 初始化service
		this.$service = initService(this);
		// 初始化middleware
		this.$middleware = initMiddleware(this);
		// 初始化model
		this.$model = initModel(this)
		// 初始化router
		this.$router = initRouter(this);
		this.$app.use(this.$router.routes());
		// 初始化定时任务schedule
		initSchedule(this)
	}
	// 启动服务
	start(port){
		this.$app.listen(port, ()=>{
			console.log('server is starting........!');
		});
	}
}

module.exports = Application;
