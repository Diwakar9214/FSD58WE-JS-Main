// // Spread operator
// const a=[1,2,3,4]
// const b=[5,6,7,8]

// // a.push(b)
// // console.log(a);
// // console.log(a.concat(b));
// // 2 Scenario
// a.push(...b)
// console.log(a)
// const anotherarray=[...a,...b]
// console.log(anotherarray)

// //3. Scenario
// const c=[1,2,3,4]
// const d=[5,6,7,8]

// c.push(d)
// console.log(c)
// const flattened=c.flat()
// console.log(flattened)

//4. Scenario
const e=[1,2,3,4]
const f=[5,6,7,8]
e.push(f)
console.log(e)
let g=[1,2,3,[4,5,6],[7,8,[9,10]]]
const flattened=g.flat(Infinity)
console.log(flattened);