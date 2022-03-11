export function getElById(id) {
  return document.getElementById(id);
}

export function getElByClass(className) {
  return document.getElementsByClassName(className);
}

export function getElByTag(tag) {
  return document.getElementsByTagName(tag);
}

export function fmtMoney(val) {
  const moneyStr = val.toLocaleString("zh", {
    style: "currency",
    currency: "CNY",
  });
  console.log(moneyStr);
  return moneyStr;
}
