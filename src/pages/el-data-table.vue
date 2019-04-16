<template>
  <div class="index">
    <el-data-table
      v-bind="tableConfig"
      :columns="tableConfig.columns"
      :extraButtons="extraButtons">
    </el-data-table>
  </div>
</template>

<script>
  import ElDataTable from "../../node_modules/el-data-table/src/el-data-table.vue";
  import Axios from 'axios'

  export default {
    components: {ElDataTable},
    data() {
      return {
        tableConfig: {
          url: '/api/v1/component',
          columns: [
            {type: 'selection', selectable: (row, index) => index >= 0},
            { prop: 'componentName', label: '组件名称',width:'120px' },
            { prop: 'sort', label: '分类',width:'100px'},
            { prop: 'version', label: '版本',width:'80px' },
            { prop: 'language', label: '开发语言',width:'120px' },
            { prop: 'updateTime', label: '最后更新时间',formatter: row => (row.updateTime =this.timestampToTime(row.updateTime)),width:'120px'},
            { prop: 'status', label: '状态',formatter: row => (row.status === '0' ? '下架' : '上架'),width:'120px' },
          ],
          searchForm: [
            {
              $type: 'input',
              $id: 'conponentName',
              label: '组件名称',
              $el: {
                placeholder: '请输入'
              }
            },
            {
              $type: 'select',
              $id: 'sort',
              label: '分类',
              $el: {
                placeholder: '请选择'
              },
              $options: [{
                label: '后端组件',
                value: '1'
              }, {
                label: '前端组件',
                value: '2'
              }]
            },
            {
              $type: 'select',
              $id: 'status',
              label: '状态',
              $el: {
                placeholder: '请选择'
              },
              $options: [{
                label: '上架',
                value: '1'
              }, {
                label: '下架',
                value: '0'
              }]
            }
          ],
          form: [
            {
              $type: 'input',
              $id: 'conponentName',
              label: '组件名称',
              $el: {
                placeholder: '请输入'
              },
//              rules: [
//                {
//                  required: true,
//                  message: '请输入用户名',
//                  trigger: 'blur'
//                }
//              ]
            },
            {
              $type: 'input',
              $id: 'version',
              label: '版本',
              $el: {
                placeholder: '请输入'
              },
//            rules: [
//              {
//                required: true,
//                message: '请选择状态',
//                trigger: 'blur'
//              }
//            ]
            },
            {
              $type: 'input',
              $id: 'language',
              label: '开发语言',
              $el: {
                placeholder: '请输入'
              },
//            rules: [
//              {
//                required: true,
//                message: '请选择状态',
//                trigger: 'blur'
//              }
//            ]
            },
            {
              $type: 'select',
              $id: 'sort',
              label: '分类',
              $el: {
                placeholder: '请选择'
              },
			  $options: [{
                label: '后端组件',
                value: '1'
              }, {
                label: '前端组件',
                value: '2'
              }],
//            rules: [
//              {
//                required: true,
//                message: '请选择分类',
//                trigger: 'blur'
//              }
//            ]
            },
            {
              $type: 'select',
              $id: 'status',
              label: '状态',
              $el: {
                placeholder: '请选择'
              },
			  $options: [{
                label: '上架',
                value: '1'
              }, {
                label: '下架',
                value: '0'
              }],
//            rules: [
//              {
//                required: true,
//                message: '请选择状态',
//                trigger: 'blur'
//              }
//            ]
            },
          ]
        },
        extraButtons: [
          {
            type: 'primary',
            text: '查看',
            // row 是单行的数据
//            atClick: row => {
//              alert('跳转' + row.code)
//              return Promise.resolve()
//            }
          },
          {
            type: 'default',
            text: '下架',
            // row 是单行的数据
//            atClick: row => {
//              alert('跳转' + row.code)
//              return Promise.resolve()
//            }
          },
        ]
      }
    },
    methods: {
      timestampToTime(timestamp) {
        let date = new Date(timestamp);
        let y = date.getFullYear();
        let m = date.getMonth() + 1;
        m = m < 10 ? ('0' + m) : m;
        let d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        let h = date.getHours();
        h = h < 10 ? ('0' + h) : h;

        return y + '-' + m + '-' + d ;

      }
    }
  }
</script>
<style lang="less">

</style>
