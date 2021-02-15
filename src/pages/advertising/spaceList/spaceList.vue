<template>
  <div>
    <div class="form">
      <el-form
        inline="inline"
        >
        <el-row>
          <el-col
            :span="7"
            :offset="1"
            >
            <el-form-item
              label="广告位类型"
              >
              <el-select
                v-model="inputType"
                placeholder="全部"
                >
                <el-option
                  v-for="(option, index) in optionType"
                  :key="index"
                  :label="option.label"
                  :value="option.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col
            :span="7"
            :offset="1"
            >
            <el-form-item
              label="所属终端"
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
            :span="7"
            :offset="1"
          >
            <el-form-item
              label="状态"
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
            v-for="(button, index) in buttons"
            :key="index"
            :span="1.1"
            class="leftSpace right_btn"
            >
            <el-button
              :class="button.class"
              :native-type="button.nativeType"
              :type="button.type"
              >{{button.title}}</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div>
      <el-table class="leftSpace">
        <el-table-column
          v-for="(tab, index) in dataLists"
          :key="index"
          :label="tab.label"
          ></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'spaceList',
  data () {
    return {
      inputType: '',
      inputTerminal: '',
      inputStatus: '',
      optionType: [
        {value: '1', label: '全部'},
        {value: '2', label: '浮窗广告'},
        {value: '3', label: '文字广告'},
        {value: '4', label: '图片广告'},
        {value: '5', label: '弹屏广告'},
        {value: '6', label: '开屏广告'},
        {value: '7', label: 'Banner类型广告'}
      ],
      optionTerminal: [
        {value: '0', label: '全部'},
        {value: '1', label: '天呈净菜小程序'},
        {value: '2', label: '天呈生活小程序'},
        {value: '3', label: '天呈生活APP'}
      ],
      optionStatus: [
        {value: '0', label: '全部'},
        {value: '1', label: '已启用'},
        {value: '2', label: '已禁用'}
      ],
      dataLists: [
        {label: '广告位编码'},
        {label: '广告位名称'},
        {label: '所属终端'},
        {label: '广告位类型'},
        {label: '添加时间'},
        {label: '广告位状态'},
        {label: '操作'}
      ],
      buttons: [
        {title: '添加广告位', class: 'right_btn', type: 'primary', nativeType: ''},
        {title: '重置', class: 'right_btn', type: 'danger', nativeType: 'reset'},
        {title: '查询', class: 'right_btn', type: 'primary', nativeType: ''}
      ]
    }
  }
}
</script>

<style scoped>

</style>
