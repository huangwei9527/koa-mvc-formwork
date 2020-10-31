module.exports = {
	interval:'*/10 * * * * *',
	handler(){
		console.log('每隔10秒执行一次' + new Date());
	}
}
