
module.exports = app => {

	const { router, $controller, $middleware } = app;

	router.get('/userlist', $controller.user.getUser);

	return router
};
