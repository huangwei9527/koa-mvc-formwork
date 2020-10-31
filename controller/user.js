module.exports = app => ({
	async getUser(ctx) {
		let {$service} = app;
		let userData = await $service.user.getUser();
		ctx.body = userData;
	}
})
