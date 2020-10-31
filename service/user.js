module.exports = app => ({
	// 获取个人信息
	async getUser() {
		return await app.$model.user.find();
	}
});
