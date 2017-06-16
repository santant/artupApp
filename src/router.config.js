//import Home from './components/Home.vue'
import Login from './components/Login.vue'
import User from './components/user/userInfo.vue'
import Cart from './components/cart/cart.vue'
//宝宝书选择
import bbsSelect from './components/product/bbs/bbsSelect.vue'
//图片编辑
import editImg from './components/editImg/editImg.vue'


////导出路由
export default{
	routes:[
	 	{ 
	 		path: '/', component: Login	 		
	 	},
		{
			path:'/user', component:User //用户信息
		},
		{
			path:'/cart', component:Cart //购物车
		},
		{
			path:'/bbsSelect', component:bbsSelect //宝宝书选择
		},
		{
			path:'/editImg', component:editImg //图片编辑
		}
	]
}
