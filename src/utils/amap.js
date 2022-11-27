// 创建点
export const createdRadio = (obj) => {
  return new AMap.Marker ({
    ...obj,
    resizeEnable: true,
    clickable: true,
    icon: new AMap.Icon ({
      ...obj.icon
    })
  })
}
// 画圆
export const polyCircle = (obj) => {
  return new AMap.Circle ({
    strokeColor: '#fff',
    strokeOpacity: '0',
    fillColor: '#f00',
    fillOpacity: '0.06',
    strokeWeight: 0,
    zIndex: 10,
    ...obj
  })
}

// 热力图
export const drawHeatMap = (map, data, max) => {
  return new Promise ((success, error) => {
    map.plugin (['AMap.HeatMap'], () => {
      let heatMap = new AMap.HeatMap (map, {
        radius: 25,
        opacity: [0, 0.7],
      })
      heatMap.setDataSet ({
        data,
        max
      })
      success (heatMap)
    })
  })
}


// 窗体展示信息
export const infoWindow = (map, x, y, ops) => {
  let infoWindow = new AMap.InfoWindow ({
    ...ops,
  })
  return infoWindow.open (map, [x, y])

}
