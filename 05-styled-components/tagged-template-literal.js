const name = "짐 레이너";
const job = "마사라의 보안관";

// const props = {
//   name: "짐 레이너",
//   job: "마사라의 보안관",
// };

// const introduce = (strs, ...fns) => {
//   return strs.reduce(
//     (result, str, i) => `${result}${str}${fns[i] ? fns[i](props) : ""}`,
//     ""
//   );
// };

// const str = introduce`제 이름은 ${(props) => props.name}, ${(props) =>
//   props.job}입니다.`;
// console.log(str);

// const introduce = (strs, ...exprs) => {
//   return strs.reduce(
//     (result, str, i) => `${result}${str}${exprs[i] ? exprs[i] : ""}`,
//     ""
//   );
// };

// const str = introduce`제 이름은 ${name}, ${job}입니다.`;
// console.log(str);

const introduce = (strs, ...exprs) => {
  console.log(strs);
  console.log(exprs);
};

introduce`제 이름은 ${name}, ${job}입니다.`;
