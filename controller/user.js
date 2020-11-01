module.exports = app => ({
	async getUser() {
		let {ctx, $service} = app;
		let userData = await $service.user.getUser();
		ctx.body = userData;
	},
	async sellHelloEjs() {
		let {ctx, $service} = app;
		let userData = await $service.user.getUser();
		await ctx.render('hello', {message: `我们这里有${userData.length}人`})
	}
})
