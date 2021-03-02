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
              :placeholder="tableLists.result.groupBuyActivityName"
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
              :start-placeholder="tableLists.result.groupBuyActivityTimeList[0]"
              range-separator="至"
              :end-placeholder="tableLists.result.groupBuyActivityTimeList[1]"
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
                :placeholder="tableLists.result.joinHours"
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
              :src="tableLists.result.channelCommodityImage"
            ></el-image>
          </el-col>
          <el-col
            :span="20"
          >
            <span>
              {{tableLists.result.channelCommodityName}}
            </span><br><br>
            <span>
              {{tableLists.result.channelCommodityStatus.describe}}
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
                prop="skuInfo"
              >
              </el-table-column>
              <el-table-column
                label="销售价"
                prop="id"
              ></el-table-column>
              <el-table-column
                label="库存数"
                prop="commoditySkuList[0].stock"
              ></el-table-column>
              <el-table-column
                label="是否地推"
              >
                <template
                  slot-scope="scope"
                >{{scope.row.offLine ? '是' : '否'}}</template>
              </el-table-column>
              <el-table-column
                label="拼团价"
                prop="commoditySkuList[0].groupBuyPrice"
              ></el-table-column>
            </el-table>
          </el-col>
        </el-row>
        <el-row
          class="leftSpace"
        >
          <el-form-item
            label="拼团限量"
          >
            <el-input
              disabled
              :placeholder="tableLists.result.commodityTotalNum"
            ></el-input>
          </el-form-item>
        </el-row>
        <el-row
          class="leftSpace"
        >
          <el-form-item
            label="成团人数"
          >
            <span
              class="nobr"
            >
              <el-input
                disabled
                v-model="input"
                :placeholder="tableLists.result.participatorLeastNum"
              ></el-input>
              起
              <span
                style="color: #7F7F7F"
              >
                成团人数至少两人
              </span>
            </span>
          </el-form-item>
        </el-row>
        <div>参与限制</div>
      </el-form>
    </div>
    <div>
      <el-divider></el-divider>
      <el-form
        inline="inline"
      >
        <el-row
        class="leftSpace"
        >
          <el-form-item
            label="发起身份"
          >
          </el-form-item>
        </el-row>
        <el-row
          class="leftSpace"
        >
          <el-form-item
            label="参团身份"
          ></el-form-item>
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
            this.tableLists = res.data
            // for (let i in res.data) {
            //   this.tabs.push(res.data[i])
            // }
            console.log(this.tabs)
            this.tabs.push(res.data.result)
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
