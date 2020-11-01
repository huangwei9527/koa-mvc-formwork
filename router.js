
module.exports = app => {

	const { router, $controller, $middleware } = app;

	// 示例接口
	router.get('/userlist', $controller.user.getUser);
	// 示例配置中间件接口
	router.get('/auth/userlist', $middleware.auth, $controller.user.getUser);
	// 示例渲染ejs模板
	router.get('/ejs', $controller.user.sellHelloEjs)
	router.get('/', $controller.user.sellHelloEjs)

	return router
};
