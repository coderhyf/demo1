/**
 * 
 * @param {*} maxFrameCount 
 * @returns 
 */
export function defer(maxFrameCount = 1000) {
  let count = 0
  // const frameCount = ref(0);
  // console.log(frameCount, '===frameCount');
  const refreshFrameCount = () => {
    requestAnimationFrame(() => {
      count++;//计数帧数加一
      if (count < maxFrameCount) {
        refreshFrameCount();//只要没到最大帧数就一直持续调用函数
      }
    });
  };
  refreshFrameCount();
  return function (showInframeCoount) {
    return count >= showInframeCoount;//判断当前渲染帧数又是否大于自定义n
  }
}
