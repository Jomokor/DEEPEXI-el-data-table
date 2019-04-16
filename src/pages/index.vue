<template>
  <div class="index">
    <img class="home-img" :src="$store.state.meta.homePageImg" alt="homeImg" />
    <!--<el-data-table-->
      <!--v-bind="tableConfig"-->
      <!--:columns="columns">-->
    <!--</el-data-table>-->
  </div>
</template>

<script>
import ElDataTable from "../../node_modules/el-data-table/src/el-data-table.vue";

export default {
  components: {ElDataTable},
  data() {
    return {
      tableConfig: {
        url: '/example/users',
        columns: [
          {
            prop: 'conponentName',
            label: '组件名称'
          },
          {
            prop: 'sort',
            label: '分类'
          },
          {
            prop: 'status',
            label: '状态'
          }
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
            }
          },
          {
            $type: 'select',
            $id: 'status',
            label: '状态',
            $el: {
              placeholder: '请选择'
            }
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
            rules: [
              {
                required: true,
                message: '请输入用户名',
                trigger: 'blur'
              }
            ]
          },
          {
            $type: 'select',
            $id: 'sort',
            label: '分类',
            $el: {
              placeholder: '请选择'
            },
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
//            rules: [
//              {
//                required: true,
//                message: '请选择状态',
//                trigger: 'blur'
//              }
//            ]
          }
        ]
      },
      columns: [
        {type: 'selection', selectable: (row, index) => index > 0},
        {prop: 'name', label: '组件名称'},
        {prop: 'sort', label: '分类'},
        {prop: 'version', label: '版本'},
        {
          prop: 'language',
          label: '开发语言'
        },
        {
          prop: 'updateTime',
          label: '最后更新时间',
        },
        {
          prop: 'status',
          label: '状态',
        }
      ]
    }
  },
  methods: {}
}
</script>
<style lang="less">
.index {
  .home-img {
    width: 100%;
  }
}
</style>
