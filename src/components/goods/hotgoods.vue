<template>
    <div class="hotgoods">
      <ul class="hotgoods-item">
        <li  v-for="item in goods" v-show="item.isHot===true">
          <div class="hotgoods-item-img" >
            <img :src="item.img" alt="">
          </div>
          <div class="hotgoods-item-detail" >
            <h2 class="hotgoods-item-detail-title" v-text="item.name"></h2>
            <h5 class="hotgoods-item-detail-desc" v-text="item.desc"></h5>
            <p class="hotgoods-item-detail-saled" >已售:{{item.saled}}</p>
            <p class="hotgoods-item-detail-price" >￥{{item.price}}</p>
            <p class="hotgoods-item-detail-oldprice" v-show="item.discout!=0" >￥{{item.price*item.discout/10}}</p>
            <span v-show="item.discout!=0">{{item.discout}}折</span>
            <!-- <i class="newgood-item-detail-add">
             </i>-->
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: 'hotgoods',
        data () {
            return {
              goods:[
                {id:'1',name:'财鱼锅块',price:'50',type:1,discout:0,saled:30,img:'http://via.placeholder.com/80x60',desc:'美味的鱼',rate:5,isNews:false,isHot:true},
                {id:'2',name:'粉蒸肉',price:'50',type:1 , discout:0,saled:25,img:'http://via.placeholder.com/80x60',desc:'肥而不腻的肉',rate:5,isNews:true,isHot:false},
                {id:'3',name:'泡蒸鳝鱼',price:'50',type:1,discout:8,saled:50,img:'http://via.placeholder.com/80x60',desc:'爽口的黄鳝',rate:5,isNews:true,isHot:true},
                {id:'4',name:'花生米',price:'8',type:2,discout:7,saled:50,img:'http://via.placeholder.com/80x60',desc:'爽口的黄鳝',rate:5,isNews:true,isHot:true},
                {id:'5',name:'土豆丝',price:'13',type:2,discout:6.5,saled:50,img:'http://via.placeholder.com/80x60',desc:'爽口的黄鳝',rate:5,isNews:true,isHot:true},
                {id:'6',name:'酸辣白菜',price:'12',type:2,discout:9,saled:50,img:'http://via.placeholder.com/80x60',desc:'爽口的黄鳝',rate:5,isNews:true,isHot:true},
                {id:'7',name:'可乐',price:'3',type:3,discout:9,saled:50,img:'http://via.placeholder.com/80x60',desc:'爽口的黄鳝',rate:5,isNews:true,isHot:true},
                {id:'8',name:'雪碧',price:'3',type:3,discout:9,saled:50,img:'http://via.placeholder.com/80x60',desc:'爽口的黄鳝',rate:5,isNews:true,isHot:true},
                {id:'9',name:'米汤',price:'3',type:3,discout:9,saled:50,img:'http://via.placeholder.com/80x60',desc:'爽口的黄鳝',rate:5,isNews:true,isHot:true},
                {id:'10',name:'西红柿蛋汤',price:'12',type:4,discout:9,saled:50,img:'http://via.placeholder.com/80x60',desc:'爽口的黄鳝',rate:5,isNews:true,isHot:true},
                {id:'11',name:'莲藕排骨汤',price:'25',type:4,discout:9,saled:50,img:'http://via.placeholder.com/80x60',desc:'爽口的黄鳝',rate:5,isNews:true,isHot:true},
                {id:'12',name:'紫菜汤',price:'13',type:4,discout:9,saled:50,img:'http://via.placeholder.com/80x60',desc:'爽口的黄鳝',rate:5,isNews:true,isHot:false},

              ],

            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hotgoods{
    /* border: 1px solid #7e8c8d;*/
    margin-top: 154px;
  }

  .hotgoods-item{
    margin-bottom: 60px;
  }
  .hotgoods-item-img{
    display: inline-block;
    /*  border: 1px solid #7e8c8d;*/
    margin-top: 10px;
    margin-bottom: 10px;
    width: 28%;
    height: 60px;
  }
  .hotgoods-item-detail{
    display: inline-block;
    font-size: 10px;
    /* border: 1px solid #7e8c8d;*/
    margin-top: 6px;
    margin-left: 15px;
  }
  .hotgoods-item-detail-title{
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    margin: 4px 50px 4px 0px;
  }
  .hotgoods-item-detail-desc{
    font-size: 7px;
    color: #5a5a5a;
  }
  .hotgoods-item-detail-price{
    display: inline-block;
  }
  .hotgoods-item-detail-oldprice{
    display: inline-block;
    margin-right: 10px;
    margin-top: 5px;
    text-decoration: line-through;
  }
  .hotgoods-item-detail-saled{
    margin-right: 10px;
    margin-bottom: 4px;
  }

  .hotgoods-item-detail-desc{
    margin-bottom: 4px;
  }
  .hotgoods-item-detail span{
    color: #ff2b5c;
    font-size: 16px;
  }
</style>
