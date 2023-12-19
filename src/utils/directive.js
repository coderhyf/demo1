import Vue from 'vue'

function adjustColumnWidth(table) {
  const colgroup = table.querySelector("colgroup");
  const colDefs = [...colgroup.querySelectorAll("col")];
  colDefs.forEach((col) => {
    const clsName = col.getAttribute("name");
    const cells = [
      ...table.querySelectorAll(`td.${clsName}`),
      ...table.querySelectorAll(`th.${clsName}`),
    ];
    // 忽略加了"leave-alone"类的列
    // if (cells[0]?.classList?.contains?.("leave-alone")) {
    //   return;
    // }
    const widthList = cells.map((el) => {
      console.log(el.querySelector(".cell").scrollWidth );
      return el.querySelector(".cell").scrollWidth || 0;
    });
    const max = Math.max(...widthList);
    const padding = 75;
    table.querySelectorAll(`col[name=${clsName}]`).forEach((el) => {
      el.setAttribute("width", max + padding);
    });
  });
  // 此段代码放入 adjustColumnWidth 内部最后面即可。
  const scrollingBody = table.querySelectorAll("div.is-scrolling-none");
  console.log(scrollingBody[0].classList.contains, '===scrollingBody[0]');
  if (scrollingBody[0]?.classList?.contains?.("is-scrolling-none")) {
    scrollingBody[0].classList.remove("is-scrolling-none");
    scrollingBody[0].classList.add("is-scrolling-left");
    scrollingBody[0].style.overflowX = "auto";
  }

}
Vue.directive("fit-columns", {

  inserted(el) {
    setTimeout(() => {
      adjustColumnWidth(el);
    }, 300);
  },
  componentUpdated(el) {
    el.classList.add("r-table");
    setTimeout(() => {
      adjustColumnWidth(el);
    }, 300);
  },
});
