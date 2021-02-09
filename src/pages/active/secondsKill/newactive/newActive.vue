<template>
  <div>
    <div class="form" style="height: 19vh">
      <el-form
        inline="inline"
      >
        <el-row>
          <el-col
            :span=6
            :offset=1
          >
            <el-form-item
              label="投放终端"
            >
              <el-select
                v-model="inputTerminal"
                placeholder="全部"
              >
                <el-option
                  v-for="(option, index) in optionTerminal"
                  :key="index"
                  :value="option.value"
                  :label="option.label"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col
            :span=6
            :offset=1
          >
            <el-form-item
              label="投放业务"
            >
              <el-select
                v-model="inputBusiness"
                placeholder="全部"
              >
                <el-option
                  v-for="(option, index) in optionBusiness"
                  :key="index"
                  :value="option.value"
                  :label="option.label"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col
            :span=6
            :offset=1
          >
            <el-form-item
              label="投放状态"
            >
              <el-select
                v-model="inputStatus"
                placeholder="全部"
              >
                <el-option
                  v-for="(option, index) in optionStatus"
                  :key="index"
                  :value="option.value"
                  :label="option.label"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col
            :span=15
            :offset=1
          >
            <el-form-item
              label="商品编码"
            >
              <el-input
                class="inputWidth"
                v-model="inputCode"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col
            class="right_btn"
            :span=1
            v-for="(btn, index) in buttons"
            :key="index"
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
          v-for="(data, index) in dataList"
          :key="index"
          :label="data.label"
        ></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'newActive',
  data () {
    return {
      inputTerminal: '',
      inputBusiness: '',
      inputStatus: '',
      inputCode: '',
      optionTerminal: [
        {value: '1', label: '全部'},
        {value: '2', label: '天呈生活APP'},
        {value: '3', label: '天呈生活小程序'}
      ],
      optionBusiness: [
        {value: '1', label: '全部'},
        {value: '2', label: '快递到家'},
        {value: '3', label: '爆款预售'}
      ],
      optionStatus: [
        {value: '1', label: '全部'},
        {value: '2', label: '待审核'},
        {value: '3', label: '审核中'},
        {value: '4', label: '已驳回'},
        {value: '5', label: '已投放'}
      ],
      buttons: [
        {title: '清空', class: 'right_btn', type: 'danger', nType: 'reset'},
        {title: '查询', class: 'right_btn', type: 'primary', nType: ''},
        {title: '新增', class: 'right_btn', type: 'primary', nType: ''}
      ],
      dataList: [
        {label: '投放ID'},
        {label: '投放终端'},
        {label: '投放业务'},
        {label: '投放商品数（SPU）'},
        {label: '状态'},
        {label: '原因说明'},
        {label: '发起时间'},
        {label: '发起人'},
        {label: '操作'}
      ]
    }
  }
}
</script>

<style scoped>

</style>
