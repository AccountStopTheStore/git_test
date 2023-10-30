/** 얕은 복사 */
const info = { name: "inseop", age: 30, job: "sw engineer" };
const info2 = info;
info2.name = "ssojung";

console.log(info);
console.log(info2);
console.log(info === info2); // true
console.log(info === info2); // true2

/** 깊은 복사 */
// const info = {
//   name: "inseop",
//   age: 30,
//   job: "sw engineer",
//   address: { city: "seoul", post: 123 },
// };
// const info2 = { ...info };
// info2.address.city = "busan";

// console.log(info);
// console.log(info2);
