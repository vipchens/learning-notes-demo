import { fmtMoney, getElById, getElByClass, getElByTag } from "./util.mjs";

window.onload = () => {
  const moenyEl = getElById("money");
  const btnEl = getElById("btn");
  const resultEl = getElByClass("result");
  const evaluateEl = getElByClass("evaluate");

  btnEl.addEventListener("click", () => {
    const value = Number(moenyEl.value);
    const res = fmtMoney(value);
    resultEl[0].innerHTML = "转化结果：" + res;

    setTimeout(async () => {
      const zh = await import("./zh_cn.mjs");
      let text;
      if (value > 10000) {
        text = zh.Exceed_expectations;
      } else {
        text = zh.Lower_expectations;
      }
      evaluateEl[0].innerHTML = text;
    }, 500);
  });
};
