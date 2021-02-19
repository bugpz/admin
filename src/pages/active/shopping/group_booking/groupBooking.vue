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
          <el-image
            src="channelCommodityImage"
            fit="contain"
          ></el-image>
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
  </div>
</template>

<script>
import axios from 'axios'
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
        {title: '查询', class: 'right_btn', type: 'primary', nType: ''},
        {title: '新建', class: 'right_btn', type: 'success', nType: ''}
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
      tableDates: []
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
          'pageNo': 1,
          'pageSize': 20,
          'orderby': 'createTime',
          'sort': 'desc'}, {headers: {
          authorization: localStorage.getItem('token')
        }})
        .then(res => {
          this.resultList = res.data.result.itemVOs
          // console.log(res)
          // console.log(this.articles, typeof (this.articles))
          this.tableDates = this.resultList
        })
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
