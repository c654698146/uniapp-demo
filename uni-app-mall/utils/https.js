module.exports = (param) =>{
	var url = param.url;
	var method = param.method;
	var header = param.header || {};
	var data = param.data || {};
	
	if (method) {
		method = method.toUpperCase();
		if (method == "POST") {
			header = {"content-type":"application/x-www-form-urlencoded"}
		}
	}
	
	if(!param.hideLoadin){
		uni.showLoading({
			title:"加载中..."
		})
	}
	uni.request({
		url:url,
		method:method || "GET",
		header:header,
		data:data,
		success: (res) => {
			if(res.statusCode && res.statusCode != 200){
				uni.showModal({
					content:res.msg
				})
				return;
			}
			typeof param.success == "function" && param.success(res.data);
		},
		fail: (err) => {
			content:err.meg,
			typeof param.fail == "function" && param.fail(err.data);
		},
		complete: () => {
		//	console.log("完成");
			uni.hideLoading();
			typeof param.complete == "function" && param.complete(err.data);
			return;
		}
	})
}