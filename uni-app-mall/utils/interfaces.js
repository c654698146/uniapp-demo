const domain = "https://uniapp-mall.firebaseio.com/";
const interfaces={
	getMallData: domain + "mall-list.json",
	getCategory: domain + "category.json",
	//getGoodsList: domain + "goodslist.json"
	getGoodsList: "https://uniapp-interface.herokuapp.com/api/profiles/goodslist"
}
module.exports = interfaces;