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
      <el-table>
        <el-table-column
          v-for="(tab, index) in dataList"
          :key="index"
          :label="tab.label"
        ></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
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
      dataList: [
        {label: '审核编号'},
        {label: '活动编码'},
        {label: '优惠名称'},
        {label: '拼团商品'},
        {label: '拼团价'},
        {label: '查看详情'},
        {label: '发起人'},
        {label: '发起时间'},
        {label: '审核人'},
        {label: '审核状态'},
        {label: '处理时间'},
        {label: '操作'}
      ]
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
