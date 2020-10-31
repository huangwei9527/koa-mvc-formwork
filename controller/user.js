module.exports = app => ({
	async getUser(ctx) {
		let {$service} = app;
		let userData = await $service.user.getUser();
		ctx.body = userData;
	},
	async sellHelloEjs(ctx) {
		let {$service} = app;
		let userData = await $service.user.getUser();
		// userData = userData.toObject();
		await ctx.render('hello', {message: `我们这里有${userData.length}人`})
	}
})
