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
              label="活动名称"
            >
              <el-input
                v-model="inputA"
                placeholder="请输入活动名称"
              >
              </el-input>
            </el-form-item>
          </el-col>
          <el-col
            :span=8
          >
            <el-form-item
              label="活动编码"
            >
              <el-input
                v-model="inputCode"
                placeholder="请输入活动编码"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col
            :span=8
          >
            <el-form-item
              label="生效状态"
            >
              <el-select
                v-model="statusInput"
              >
                <el-option
                  v-for="(list, index) in statusList"
                  :key="index"
                  :label="list.label"
                  :value="list.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col
            v-for="(button, index) in eButton"
            :key="index"
            :span=1
            class="right_btn"
          >
            <el-button :class="button.class" :type="button.type" :native-type="button.nType" circle>{{button.title}}</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div>
      <el-table
        :data="tableDates"
      >
        <el-table-column
          label="活动编码"
          prop="id"
        ></el-table-column>
        <el-table-column
          label="活动名称"
          prop="groupBuyActivityName"
        ></el-table-column>
        <el-table-column
          label="商品图片"
        >
          <template slot-scope="scope">
            <img :src="scope.row.channelCommodityImage" width="100%" height="100%" alt=""/>
          </template>
        </el-table-column>
        <el-table-column
          label="拼团商品"
          prop="channelCommodityName"
        ></el-table-column>
        <el-table-column
          label="拼团价"
          prop="groupBuyPrice"
        ></el-table-column>
        <el-table-column
          label="发起用户"
          prop="accomplishGroupCount"
        ></el-table-column>
        <el-table-column
          label="参与用户"
          prop="initiatorCount"
        ></el-table-column>
        <el-table-column
          label="成团数"
          prop="participantCount"
        ></el-table-column>
        <el-table-column
          label="生效时间"
          prop="groupBuyActivityTimeList"
        ></el-table-column>
        <el-table-column
          label="状态"
          prop="status[describe]"
        ></el-table-column>
        <el-table-column
          label="驳回原因"
          prop="reason"
        ></el-table-column>
        <el-table-column
          label="操作"
          prop="id"
        ></el-table-column>
      </el-table>
    </div>
    <div style="float: right">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 50]"
        :page-size="20"
        layout="total, sizes, prev, pager, next, jumper"
        :total="page.totalCount">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {LoginStatusVerification} from '../../../../utils/selectLoginStatus'
export default {
  name: 'group_booking',
  data () {
    return {
      inputA: '',
      inputCode: '',
      statusInput: '',
      resultList: '',
      statusList: [
        {value: '1', label: '全部'},
        {value: '2', label: '待审核'},
        {value: '3', label: '审核中'},
        {value: '4', label: '未开始'},
        {value: '5', label: '发布中'},
        {value: '6', label: '审核驳回'},
        {value: '7', label: '已领完'},
        {value: '8', label: '已过期'},
        {value: '9', label: '已作废'}
      ],
      eButton: [
        {title: '清空', class: 'right_btn', type: 'danger', nType: 'reset'},
        {title: '查询', class: 'right_btn', type: 'primary', nType: 'submit'},
        {title: '新建', class: 'right_btn', type: 'success', nType: 'button'}
      ],
      view: [
        {label: '活动编码'},
        {label: '活动名称'},
        {label: '商品图片'},
        {label: '拼团商品'},
        {label: '拼团价'},
        {label: '发起用户'},
        {label: '参与用户'},
        {label: '成团数'},
        {label: '生效时间'},
        {label: '状态'},
        {label: '驳货原因'},
        {label: '操作'}
      ],
      tableDates: [],
      page: [],
      pageNO: 1,
      pageSize: 20,
      currentPage: 1
    }
  },
  created () {
    this.ajaxFun()
  },
  methods: {
    ajaxFun () {
      const url = '/api/web/promote/groupBuyActivity/query'
      axios
        .post(url, {
          'searchs': '[]',
          'pageNo': this.pageNO,
          'pageSize': this.pageSize,
          'orderby': 'createTime',
          'sort': 'desc'}, {headers: {
          authorization: localStorage.getItem('token')
        }})
        .then(res => {
          if (res.data.code === 200) {
            this.resultList = res.data.result.itemVOs
            // console.log(res)
            // console.log(this.articles, typeof (this.articles))
            this.tableDates = this.resultList
            this.page = res.data.result
            this.pageNO = res.data.pageNo
            this.pageSize = res.data.pageSize
          } else {
            LoginStatusVerification()
          }
        })
    },
    handleChange () {
      const url = '/api/web/promote/groupBuyActivity/query'
      axios
        .post(url, {
          'searchs': '[]',
          'pageNo': this.pageNO,
          'pageSize': this.pageSize,
          'orderby': 'createTime',
          'sort': 'desc'}, {headers: {
          authorization: localStorage.getItem('token')
        }})
        .then(res => {
          if (res.data.code === 200) {
            this.resultList = res.data.result.itemVOs
            // console.log(res)
            // console.log(this.articles, typeof (this.articles))
            this.tableDates = this.resultList
            this.page = res.data.result
          } else {
            LoginStatusVerification()
          }
        })
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
      this.pageSize = val
      this.handleChange()
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      this.pageNO = val
      this.handleChange()
    }
  }
}
</script>

<style scoped>
.form{
  width: 98%;
  height: 12vh;
  box-shadow: 0 2px 4px rgb(0, 0, 0), 0 0 6px rgba(0, 0, 0, .04);
  margin: 1%;
}
.right_btn{
  float: right;
  margin-right: 20px;
}
</style>
