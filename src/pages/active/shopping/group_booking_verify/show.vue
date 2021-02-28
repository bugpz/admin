<!--
 * @Description:show.vue
 * @CreatedBy:WebStorm
 * @Author: BugP
 * @Date: 2021-02-27 21:01
 * @LastEditTime: 2021-02-27 21:01
 * @LastEditors: BugP
-->
<template>
  <div>
    <div>
      基础信息
      <el-divider></el-divider>
    </div>
    <div>
      <el-form
      inline="inline"
      >
        <el-row
        class="leftSpace"
        >
          <el-form-item
            size="mini"
            label="活动名称"
          >
            <el-input
              v-model="input"
              disabled
              :placeholder="tableLists.groupBuyActivityName"
            ></el-input>
          </el-form-item>
        </el-row>
        <el-row
        class="leftSpace"
        >
          <el-form-item
            size="mini"
            label="发起时间"
          >
            <el-date-picker
              style="width: 400px"
              disabled
              v-model="input"
              type="datatimerange"
              :start-placeholder="tableLists.groupBuyActivityTimeList[0]"
              range-separator="至"
              :end-placeholder="tableLists.groupBuyActivityTimeList[1]"
            >
            </el-date-picker>
          </el-form-item>
        </el-row>
        <el-row
          class="leftSpace"
        >
          <el-form-item
            size="mini"
            label="参团时限"
          >
            <span
              class="nobr"
            >
              自发起时
              <el-input
                disabled
                v-model="input"
                :placeholder="tableLists.joinHours"
              ></el-input>
              小时
            </span>
          </el-form-item>
        </el-row>
        <div>拼团商品</div>
        <el-divider></el-divider>
      </el-form>
    </div>
    <div>
      <el-form
        inline="inline"
      >
        <el-row
          class="leftSpace"
        >
          <el-col
            :span="2"
          >
            <span
              class="leftSpace"
            >
              适用商品
            </span>
          </el-col>
          <el-col
            :span="2"
          >
            <el-image
              class="show_image"
              :src="tableLists.channelCommodityImage"
            ></el-image>
          </el-col>
          <el-col
            :span="20"
          >
            <span>
              {{tableLists.channelCommodityName}}
            </span><br><br>
            <span>
              {{tableLists.channelCommodityStatus.describe}}
            </span>
          </el-col>
        </el-row>
        <el-row
          class="leftSpace"
        >
          <el-col
            :offset="2"
          >
            <el-table
              :data="tabs"
            >
              <el-table-column
                label="商品规格"
              >
              </el-table-column>
              <el-table-column
                label="销售价"
                prop="1[1]"
              ></el-table-column>
            </el-table>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
import {LoginStatusVerification} from '../../../../utils/selectLoginStatus'

export default {
  name: 'show',
  data () {
    return {
      input: '',
      tableLists: [],
      tabs: []
    }
  },
  created () {
    this.ajaxFun()
  },
  methods: {
    ajaxFun () {
      const url = ('/api/web/promote/groupBuyActivity/findById?groupBuyActivityCode=' + this.$route.query.groupBuyActivityCode + '&version=' + this.$route.query.version)
      this.$axios
        .get(url, {headers: {
          authorization: localStorage.getItem('token')
        }})
        .then(res => {
          if (res.data.code === 200) {
            this.tableLists = res.data.result
            this.tabs =
            console.log(this.tabs)
            console.log(typeof this.tabs)
          } else {
            LoginStatusVerification()
            window.close()
          }
        })
    }
  }
}
</script>

<style scoped>

</style>
