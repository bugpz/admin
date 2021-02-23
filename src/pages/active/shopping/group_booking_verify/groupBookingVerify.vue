<template>
  <div>
    <div class="form">
      <el-form
        :inline=true
      >
        <el-row>
          <el-col
            :span=8
          >
            <el-form-item
              label="活动编码"
            >
              <el-input
                v-model="activeCode"
                placeholder="请输入活动编码"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col
            :span=8
          >
            <el-form-item
              label="发起人"
            >
              <el-input
                v-model="people"
                placeholder="发起人"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col
            :span=8
          >
            <el-form-item
              label="审核状态"
            >
              <el-select
                v-model="select"
              >
                <el-option
                  v-for="(lab, index) in statusList"
                  :key="index"
                  :value="lab.value"
                  :label="lab.label"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col
            :span=1
            v-for="(btn, index) in buttonE"
            :key="index"
            class="right_btn"
          >
            <el-button
              :class="btn.class"
              :type="btn.type"
              :native-type="btn.nType"
            >
              {{btn.title}}
            </el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div>
      <el-table
        :data="tableLists"
      >
        <el-table-column
          label="审核编号"
          prop="auditCode"
        ></el-table-column>
        <el-table-column
          label="活动编码"
          prop="orderActivityCode"
        ></el-table-column>
        <el-table-column
          label="优惠名称"
          prop="groupBuyActivityName"
        ></el-table-column>
        <el-table-column
          label="拼团商品"
          prop="channelCommodityName"
        ></el-table-column>
        <el-table-column
          label="拼团价"
          prop="groupBuyPrice"
        ></el-table-column>
        <el-table-column
          label="查看详情"
        ></el-table-column>
        <el-table-column
          label="发起人"
          prop="sponsor"
        ></el-table-column>
        <el-table-column
          label="发起时间"
          prop="createTime"
        ></el-table-column>
        <el-table-column
          label="审核人"
          prop="auditor"
        ></el-table-column>
        <el-table-column
          label="审核状态"
          prop="auditStatus.describe"
        ></el-table-column>
        <el-table-column
          label="处理时间"
          prop="auditTime"
        ></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import {LoginStatusVerification} from '../../../../utils/selectLoginStatus'

export default {
  name: 'group_booking_verify',
  data () {
    return {
      select: '',
      activeCode: '',
      people: '',
      statusList: [
        {value: '1', label: '全部'},
        {value: '2', label: '待审核'},
        {value: '3', label: '通过'},
        {value: '4', label: '驳回'}
      ],
      buttonE: [
        {title: '清空', class: 'right_btn', type: '', nType: 'reset'},
        {title: '查询', class: 'right_btn', type: 'primary', nType: ''},
        {title: '批量处理', class: 'right_btn', type: 'primary', nType: ''}
      ],
      tableLists: []
    }
  },
  created () {
    this.ajaxFun()
  },
  methods: {
    ajaxFun () {
      const url = '/api/web/promote/groupBuyActivity/queryAudit'
      this.$axios
        .post(url, {
          'searchs': '[]',
          'pageNo': 1,
          'pageSize': 20,
          'orderby': 'createTime',
          'sort': 'desc'
        }, {
          headers: {
            authorization: localStorage.getItem('token')
          }
        })
        .then(res => {
          if (res.data.code === 200) {
            this.tableLists = res.data.result.itemVOs
          } else if (res.data.code === 401) {
            LoginStatusVerification()
          }
        })
    }
  }
}
</script>

<style scoped>

</style>
