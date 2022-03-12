export function fmtMoney(val) {
  const moneyStr = val.toLocaleString("zh", {
    style: "currency",
    currency: "CNY",
  });
  return moneyStr;
}
