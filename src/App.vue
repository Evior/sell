<template>
  <div id="app">
    <div class="page-tabbar">
      <div class="page-wrap">
        <!-- tabcontainer -->
        <mt-tab-container class="page-tabbar-container" v-model="selected">

          <!------------------------买卖模块--------------------------->
          <mt-tab-container-item id="店家">
            <!--<mt-cell v-for="n in 10" :title="'餐厅 ' + n" />-->
            <Sellers></Sellers>
          </mt-tab-container-item>

          <!------------------------订单模块--------------------------->
          <mt-tab-container-item id="订单">
            <Sellorder></Sellorder>
            <!--<mt-cell v-for="n in 5" :title="'订单 ' + n" />-->
          </mt-tab-container-item>


          <!------------------------发现模块--------------------------->
          <mt-tab-container-item id="发现">
            <Sellfind></Sellfind>
            <!--<mt-cell v-for="n in 7" :title="'发现 ' + n" />-->
          </mt-tab-container-item>


          <!------------------------我的模块--------------------------->
          <mt-tab-container-item id="我的">
            <Sellmine></Sellmine>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>



      <!--底部导航-->
      <mt-tabbar v-model="selected" fixed>
        <mt-tab-item id="店家">
          <img slot="icon" src="http://via.placeholder.com/100x100">
          店家
        </mt-tab-item>
        <mt-tab-item id="订单">
          <img slot="icon" src="http://via.placeholder.com/100x100">
          订单
        </mt-tab-item>
        <mt-tab-item id="发现">
          <img slot="icon" src="http://via.placeholder.com/100x100">
          发现
        </mt-tab-item>
        <mt-tab-item id="我的">
          <img slot="icon" src="http://via.placeholder.com/100x100">
          我的
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>

<script>

  /*1 主模板导入子模板*/
  import Sellers from '@/components/seller/Sellers';
  import Sellorder from '@/components/order/Sellorder';
  import Sellfind from '@/components/find/Sellfind';
  import Sellmine from '@/components/mine/Sellmine';
export default {
  name: 'App',
  data(){
    return{
      selected: '店家'

    };
  },
  methods:{

  },
  components:{
    Sellers,
    Sellorder,
    Sellfind,
    Sellmine
  }
}
</script>

<style>

#app .tab{
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
}
#app .tab .tab-item{
  flex: 1;
  text-align: center;
}
</style>
