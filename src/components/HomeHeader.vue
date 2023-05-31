<template>
  <header class="home-header">
    <h4 class="top-text"> 赛格数码 </h4>
    <div class="tap-menu">
      <el-tabs :tab-position="'top'" type="border-card" style="height: 39px;" v-model="goodsType" @tab-click="changeGoodsType">
        <el-tab-pane label="全部" name="全部"></el-tab-pane>
        <el-tab-pane label="手机" name="手机"></el-tab-pane>
        <el-tab-pane label="电脑" name="电脑"></el-tab-pane>
        <el-tab-pane label="电视机" name="电视机"></el-tab-pane>
        <el-tab-pane label="照相机" name="照相机"></el-tab-pane>
        <el-tab-pane label="耳机" name="耳机"></el-tab-pane>
        <el-tab-pane label="充电器" name="充电器"></el-tab-pane>
        <el-tab-pane label="充电宝" name="充电宝"></el-tab-pane>
      </el-tabs>
    </div>
  </header>
</template>

<script>
export default {
  name: 'home-header',
  data () {
    return {
      kindToType: new Map([
        ['全部', 0],
        ['手机', 1],
        ['电脑', 2],
        ['电视机', 3],
        ['照相机', 4],
        ['耳机', 5],
        ['充电器', 6],
        ['充电宝', 7]
      ]),
      goodsType: '全部'
    }
  },
  methods: {
    changeGoodsType () {
      this.$store.state.GoodsCurrentSelKind = this.kindToType.get(this.goodsType)
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/css/variable.scss";

.home-header{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background-color: #fff;
  z-index: 999;
  .top-text{
    height: $HomeHeaderHeight - 40px;
    line-height: $HomeHeaderHeight - 40px;
  }
  // .tap-menu{
  // }
}
</style>
