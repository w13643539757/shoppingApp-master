import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '', // 用户
    isLogin: false,
    address:[
      {
        name: '王鸿斌',
        phone: 13643539757,
        city: '山西',
        detailAdd: '山西省阳泉市郊区'
      },
      {
        name: '王鸿斌',
        phone: 13643539757,
        city: '天津',
        detailAdd: '天津市津南区'
      },
    ],
    cartGoods: [], // 添加到购物车中的商品
    cartCounter: 0, // 购物车物品总数
    GoodsCurrentSelKind: 0 // 表示显示全部分类商品
  },
  mutations: {
    addGoodsToCart (state, item) {
      item.isInCart = true;
      item.count++;
      state.cartGoods.push(item);
      state.cartCounter++;
    },
    deleteGoodsFromCart(state, itemId) {
      state.cartCounter--;
      state.cartGoods.some((val, index, Goods) => {
        if (val.id === itemId) {
          val.isInCart = false;
          val.count--;
          Goods.splice(index, 1);
          return true;
        }
      })
    },
    addGoods(state, itemId){
      state.cartCounter++;
      state.cartGoods.some(val => {
        if (val.id === itemId) {
          val.count++
          return true;
        }
      })
    },
    reduceGoods(state, itemId){
      state.cartCounter--;
      state.cartGoods.some(val => {
        if (val.id === itemId) {
          val.count--;
          return true;
        }
      })
    },
    changeCurrentSelKind(state, kind){
      state.GoodsCurrentSelKind = kind;
    },
    login(state, username){
      state.username = username;
      state.isLogin = true;
    },
    logout(state){
      state.isLogin = false;
    },
    addNewAddress(state, newAdd){
      state.address.push(newAdd);
    },
    modifyAddress(state, item){
      state.address[item.index] = item.value;
    },
    deleteAddress(state, index){
      state.address.splice(index, 1);
    }
  }
})
