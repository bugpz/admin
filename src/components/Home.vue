<template>
  <div>
    <el-row :span="12" class="e_col he" :style="{width: type === 1 ? '201px!important' : '64px!important'}">
      <el-col  class="he">
        <el-menu
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
          <el-submenu :index="i.path" v-for="i in routes" :key="i" v-if="i.meta.layer === 3">
            <template slot="title" style="text-align: center">
              <svg class="icon" aria-haspopup="true">
                <use  :href="i.meta.icon" ></use>
              </svg>
              <span>{{ i.meta.title }}</span>
            </template>
            <el-submenu  :index="i.path+'/'+x.path" v-for="x in i.children" :key='x'>
              <template slot="title">{{x.meta.title}}</template>
              <el-menu-item :index="i.path+'/'+x.path+'/'+there.path" v-for="there in x.children" :key="there">{{there.meta.title}}</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu :index="i.path" v-for="i in routes" :key="i" v-if="i.meta.layer === 2">
            <template slot="title" style="text-align: center">
              <svg class="icon" aria-haspopup="true">
                <use  :href="i.meta.icon" ></use>
              </svg>
              <span>{{ i.meta.title }}</span>
            </template>
            <el-menu-item :index="i.path+'/'+x.path" v-for="x in i.children" :key='x'>{{x.meta.title}}</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
    <div :style="{marginLeft: type === 1 ? '201px!important' : '64px!important'}" >
      <div style="height: 50px" v-if="$route.name!=='error'" v-for="i in routes" :key='i'>
        <el-button @click="handleChange(type)" :icon="type === 1 ? 'el-icon-s-fold' : 'el-icon-s-unfold' " title="0" style="margin-top: 5px" ></el-button>
        <span style="padding-left: 10px;font-size: 14px;top: 18px">首页</span>
        <span v-if="$route.path !== '/index' ">/{{i.meta.title}}/{{$route.meta.title}}</span>
      </div>
      <div style="height: 44px">
        <el-tag
          closable
        >
          {{this.$route.meta.title}}
        </el-tag>
      </div>
    </div>
  </div>
</template>

<script>
import repertory from '../router/repertory'
import active from '../router/active'
export default {
  name: 'Home',
  data () {
    return {
      type: 1,
      routes: {repertory, active}
    }
  },
  methods: {
    handleChange () {
      if (this.type === 1) {
        this.type = 2
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
