
module.exports = app => {

	const { router, $controller, $middleware } = app;

	// 示例接口
	router.get('/userlist', $controller.user.getUser);
	// 示例配置中间件接口
	router.get('/userlist', $middleware.auth, $controller.user.getUser);

	return router
};
