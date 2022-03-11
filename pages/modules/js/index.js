import { fmtMoney, getElById, getElByClass, getElByTag } from "./util.mjs";

window.onload = () => {
  const moenyEl = getElById("money");
  const btnEl = getElById("btn");
  const resultEl = getElByClass("result");

  btnEl.addEventListener("click", () => {
    const res = fmtMoney(Number(moenyEl.value));
    resultEl[0].innerHTML = "转化结果：" + res;
  });
};
