'use strict';
/**
 * 登录验证
 * @author huangwei9527
 * @return {null} null
 */
module.exports = app => {
	return async function(ctx, next) {
		// todo 登录权限控制
		console.log('进入登录权限验证中间件')
		await next();
	};
};
