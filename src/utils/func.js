// export function debounce(func: () => void, timeout = 300) {
//   console.log("dd");
//   let timer: any;
//   return () => {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       func.apply(debounce);
//     }, timeout);
//   };
// }

export function debounce(func) {
  let inDebounce;
  return function () {
    // const context = this;
    // setTimeout이 실행된 Timeout의 ID를 반환하고, clearTimeout()으로 이를 해제할 수 있음을 이용
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func.apply(this), 100);
  };
}
