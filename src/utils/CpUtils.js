/**
 * Created by itxuye on 2017/3/28.
 */
'use strict'

//format money
export function formatMoney(str) {
  let result = '';
  let num = (Math.abs(str) || 0).toString();
  while (num.length > 3) {
    result = ',' + num.slice(-3) + result;
    num = num.slice(0, num.length - 3);
  }

  if (str >= 0) {
    if (num) {
      result = num + result;
    }
  } else {
    result = `-${num + result}`
  }

  return result;
}