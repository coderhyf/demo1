import {MessageBox} from "element-ui";

export function handleConfirm (text = "确定执行此操作吗？", title = '提示', type = "warning",
                               confirmButtonText = '确定', cancelButtonText = '取消') {
  return MessageBox.confirm (text, title, {
    confirmButtonText,
    cancelButtonText,
    type,
    showClose: false,
    closeOnClickModal: false
  })
}
