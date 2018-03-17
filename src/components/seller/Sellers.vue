<template>
    <div class="Sellers">
      <!--商品轮播图-->
      <mt-swipe ref="swipe" class="swipe" :auto="4000" :show-indicators="false">
        <mt-swipe-item v-for="img in images" :key="img.id">
          <div>
            <img :src="img.url">
          </div>
        </mt-swipe-item>
      </mt-swipe>
      <!--左边导航-->
      <div class="leftNav">
        <div class="leftNav-item" v-for="item in items" >
          <div @click="active(item.id)" :class="{active:item.isActive}">
            <router-link  :to="item.url" >{{item.title}}</router-link>
          </div>
        </div>
      </div>
      <!--右边详情-->
      <div class="content">
        <router-view></router-view>
      </div>

    </div>
</template>

<script>
    export default {
        name: 'Sellers',
        data () {
            return {
              images: [
                {url:'http://via.placeholder.com/250x100',id:1},
                {url:'http://via.placeholder.com/250x100',id:2},
                {url:'http://via.placeholder.com/250x100',id:3}
              ],
              items:[
                {id:'0',title:'新品',icon:'',isActive:false,url:'newgoods'},
                {id:'1',title:'热卖',icon:'',isActive:false,url:'hotgoods'},
                {id:'2',title:'折扣',icon:'',isActive:false,url:'discount'},
                {id:'3',title:'肉食',icon:'',isActive:false,url:'male'},
                {id:'4',title:'素食',icon:'',isActive:false,url:'Vugetarian'},
                {id:'5',title:'饮料',icon:'',isActive:false,url:'drinks'},
                {id:'6',title:'汤',icon:'',isActive:false,url:'soup'},
                {id:'7',title:'甜点',icon:'',isActive:true,url:'dessert'},
              ],
            }
        },
      methods:{
        active:function (id) {
          var items=this.items;
          for(var i=0;i++;i< items.length){
            if (items[i].id!=id){
              items[i].isActive=false;

            }
            if(items[i].id==id){
              items[i].isActive=true;
            }
          }
          for (var item in items){
            if (item.id==id){
              console.log(item);
            }
          }
        }
      }
    }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
  .swipe{
    position: fixed;
    top:0px;
    left: 0px;
    float: left;
    width: 100%;
    height: 145px;
  }
  .swipe div img{
    width: 100%;
    margin: 0px auto;
  }
  .leftNav{
    position: fixed;
    top: 146px;
    left: 0px;
    display: inline-block;
    float: left;
    width: 20%;
    height: 1000px;
    background-color: #f7f7f7;
  }
  .leftNav .leftNav-item{
    padding-bottom: 0px;
    width: 100%;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-bottom: 0.5px solid #bfbfbf;
  }
  .content{
    /*position: fixed;*/
    float: right;
    margin-left: 5px;
    /*border: 1px solid #000000;*/
    width: 70%;
  }
  .active{
    background-color: #ffffff;
  }
</style>
