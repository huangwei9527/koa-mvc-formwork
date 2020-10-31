module.exports = {
	interval:'*/3 * * * * *',
	handler(){
		console.log('每隔3秒执行一次' + new Date());
	}
}
