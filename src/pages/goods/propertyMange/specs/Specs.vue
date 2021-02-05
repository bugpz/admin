<template>
  <div>
    <div class="form">
      <el-form
        :inline=true
      >
        <el-row>
          <el-col
            :span=10
          >
            <el-form-item
              label="规格名称">
              <el-input
                v-model="inputName"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col
            :span=6
          >
            <el-form-item
              label="状态"
            >
              <el-select
                v-model="inputState"
              >
                <el-option
                  v-for="(opt, index) in optionState"
                  :key="index"
                  :value="opt.value"
                  :label="opt.label"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col
            :span=1.1
            class="right_btn"
            v-for="(btn, index) in buttons"
            :key="index"
          >
            <el-button
              :native-type="btn.nativeType"
              :type="btn.type"
              :class="btn.class"
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
          v-for="(tab, index) in tabs"
          :key="index"
          :label="tab.label"
        ></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Specs',
  data () {
    return {
      inputName: '',
      inputState: '',
      optionState: [
        {value: '1', label: '全部'},
        {value: '2', label: '启用'},
        {value: '3', label: '停用'}
      ],
      buttons: [
        {title: '添加规格', class: 'right_btn', type: 'primary', nativeType: ''},
        {title: '查询', class: 'right_btn', type: 'primary', nativeType: ''},
        {title: '重置', class: 'right_btn', type: 'danger', nativeType: 'reset'}
      ],
      tabs: [
        {label: '规格编码'},
        {label: '规格名称'},
        {label: '状态'},
        {label: '添加时间'},
        {label: '添加人'},
        {label: '操作'}
      ]
    }
  }
}
</script>

<style scoped>

</style>
