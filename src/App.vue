<template>
  <div id="app">
    <el-row style="margin: 10px;">
      <el-button-group>
        <el-button size="small" icon="el-icon-edit" plain>新建</el-button>
        <el-button size="small" icon="el-icon-edit-outline" plain>保存</el-button>
        <el-button size="small" icon="el-icon-delete" plain>删除</el-button>
      </el-button-group>
    </el-row>
    <el-tabs type="card" value="first">
      <el-tab-pane label="基本信息" name="first">
        <el-form ref="form" label-width="80px">
          <vfieldset title="基本信息">
            <el-row :gutter="30" style="max-width:1200px">
              <el-col :span="8">
                <el-form-item label="单据编号:">
                  <el-input size="mini" v-model="bill.code"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="计划日期:">
                  <el-date-picker type="date" style="width:100%" size="mini" v-model="bill.bizdate"></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="计划类型:">
                  <el-select
                    v-model="bill.jhlx"
                    placeholder="请选择活动区域"
                    style="width:100%"
                    size="mini"
                  >
                    <el-option label="集采" value="JC"></el-option>
                    <el-option label="自采" value="ZC"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
          </vfieldset>
          <vfieldset title="备注信息">
            <el-row :gutter="30" style="max-width:1200px">
              <el-col :span="24">
                <el-form-item label="备注:">
                  <el-input type="textarea" :rows="4" placeholder="请输入内容" v-model="bill.remark"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </vfieldset>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="材料明细" name="second" ref="paneCLMX">
        <el-row>
          <el-button-group>
            <!-- <el-button size="mini" icon="el-icon-plus">新增材料</el-button> -->
            <el-button size="mini" icon="el-icon-minus">删除材料</el-button>
            <el-button size="mini" icon="el-icon-tickets">选择材料字典</el-button>
          </el-button-group>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-table
              ref="gvCLMX"
              :data="clmxs"
              style="width: 100%;"
              size="mini"
              :height="gvCLMXHeight"
              border
              stripe
              highlight-current-row
              show-summary
            >
              <el-table-column type="selection" width="55" align="center"></el-table-column>
              <el-table-column fixed label=" " type="index" align="center"></el-table-column>
              <el-table-column fixed prop label="材料编码" width="120"></el-table-column>
              <el-table-column fixed prop label="材料名称" width="120"></el-table-column>
              <el-table-column fixed prop label="规格" width="80"></el-table-column>
              <el-table-column fixed prop label="型号" width="80"></el-table-column>
              <el-table-column prop label="材质" width="80"></el-table-column>
              <el-table-column prop="dw" label="单位" width="80"></el-table-column>
              <el-table-column prop="bwmc" label="部位名称" width="120"></el-table-column>
              <el-table-column prop="bwmcfulldesc" label="部位全路径" width="200"></el-table-column>
              <el-table-column prop="jhl" label="本期计划量" width="120"></el-table-column>

              <el-table-column prop="zlyq" label="质量要求" width="120"></el-table-column>
              <el-table-column prop="pp" label="品牌" width="120"></el-table-column>
              <el-table-column prop="ghdd" label="供货地点" width="120"></el-table-column>
              <el-table-column prop="remark" label="备注" width="120"></el-table-column>
            </el-table>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import VFieldSet from "./components/VFieldSet.vue";
import { mapState } from "vuex";
export default {
  name: "app",
  components: {
    vfieldset: VFieldSet
  },
  computed: {
    ...mapState({
      bill: state => state.bill,
      clmxs: state => state.bill.clmxs
    }),
    gvCLMXHeight: function() {
      var height = 350;
      return height;
    }
  },
  methods: {},
  mounted: function() {
    var _this = this;
    var promise = this.$store.dispatch("getBillById");
    promise
      .then(function(result) {
        _this.$store.state.bill = result;
        alert(result);
      })
      .catch(function(e) {
        alert(e);
      });
  },
  data: function() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "选项2"
    };
  }
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}
#app {
  height: 100%;
}
</style>
