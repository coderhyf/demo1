import {Loading} from "element-ui";

/**
 * 场景适用:表单单条删除，且删除过程中需要加载loading，直接调用即可
 * */
let loadingInstance = null

// 启动loading
export function openLoading (text = '数据加载中...', spinner = 'el-icon-loading',
                             bgc = 'rgba(0, 0, 0, 0.7)') {
  loadingInstance = Loading.service ({
    lock: true,
    background: bgc,
    text,
    spinner,
  })
}

// 关闭loading
export function closeLoading () {
  loadingInstance && loadingInstance.close ()
}
