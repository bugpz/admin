<template>
  <div>
    <el-row :span="12" class="e_col he" :style="{width: type === 1 ? '201px!important' : '64px!important'}">
      <el-col  class="he">
        <el-menu
          :unique-opened="true"
          :collapse="type !== 1 "
          :collapse-transition="false"
          :default-active="$route.path"
          class="el-menu-vertical-demo he"
          background-color="#304156"
          text-color="#fff"
          router
        >
          <el-menu-item index="/index">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#i-home"></use>
              </svg>
              <span>首页</span>
          </el-menu-item>
          <el-submenu :index="idea.path" v-for="(idea, index) in routes" :key=index v-if="idea.meta.layer === 3">
            <template slot="title" style="text-align: center">
              <svg class="icon" aria-haspopup="true">
                <use  :href="idea.meta.icon" ></use>
              </svg>
              <span>{{ idea.meta.title }}</span>
            </template>
            <el-submenu v-if="x.children" :index="idea.path+'/'+x.path" v-for="(x, index) in idea.children" :key=index>
              <template slot="title">{{x.meta.title}}</template>
              <el-menu-item :index="idea.path+'/'+x.path+'/'+there.path" v-for="(there, index) in x.children" :key=index>{{there.meta.title}}</el-menu-item>
            </el-submenu>
            <el-menu-item v-else-if="!x.children" :index="idea.path+ '/' + x.path">{{x.meta.title}}</el-menu-item>
          </el-submenu>
          <el-submenu :index="idx.path" v-for="(idx, index) in routes" :key=index v-if="idx.meta.layer === 2">
            <template slot="title" style="text-align: center">
              <svg class="icon" aria-haspopup="true">
                <use  :href="idx.meta.icon" ></use>
              </svg>
              <span>{{ idx.meta.title }}</span>
            </template>
            <el-menu-item :index="idx.path+'/'+xd.path" v-for="(xd, index) in idx.children" :key=index>{{xd.meta.title}}</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
    <div :style="{marginLeft: type === 1 ? '201px!important' : '64px!important'}" >
      <div style="height: 50px" v-if="$route.name!=='error'">
        <el-button @click="handleChange(type)" :icon="type === 1 ? 'el-icon-s-fold' : 'el-icon-s-unfold' " title="0" style="margin-top: 5px" ></el-button>
        <span style="padding-left: 10px;font-size: 14px;top: 18px">首页</span>
        <span v-if="$route.path !== '/index' && lay === 2">/{{$route.matched[lay-1].meta.title}}/{{$route.meta.title}}</span>
        <span v-else-if="$route.path !== '/index' && lay === 3 && $route.meta.layer !==2">/{{$route.matched[lay-2].meta.title}}/{{$route.matched[lay-1].meta.title}}/{{$route.meta.title}}</span>
        <span v-else>/{{$route.matched[lay-2].meta.title}}/{{$route.meta.title}}</span>
      </div>
      <HTabs/>
    </div>
  </div>
</template>

<script>
import HTabs from '../pages/layouts/HTabs'
import repertory from '../router/repertory'
import active from '../router/active'
import advertising from '../router/advertising'
import goods from '../router/goods'
import market from '../router/market'
import cms from '../router/cms'
import order from '../router/order'
import afterSale from '../router/afterSale'
import leader from '../router/leader'
import seller from '../router/seller'
import merchantGoods from '../router/merchantGoods'
import cookBook from '../router/cookBook'
import financial from '../router/financial'
import message from '../router/message'
import logistics from '../router/logistics'
import setting from '../router/setting'
export default {
  name: 'Home',
  components: {HTabs},
  data () {
    return {
      type: 1,
      routes: {repertory,
        active,
        advertising,
        goods,
        market,
        cms,
        order,
        afterSale,
        leader,
        seller,
        merchantGoods,
        cookBook,
        financial,
        message,
        logistics,
        setting
      }
    }
  },
  computed: {
    lay () {
      return this.$route.matched[1].meta.layer
    }
  },
  methods: {
    handleChange () {
      if (this.type === 1) {
        this.type = 2
        console.log(this.lay, this.$route)
        console.log(this.$route)
      } else {
        this.type = 1
      } this.$emit('type-change', this.type)
    }
  }
}
</script>

<style scoped>
  .e_col{
    position: absolute;
    /*background-color: #758fa9;*/
  }
  .icon {
    width: 18px; height: 18px;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .he{
    height: 100%;
  }
</style>
