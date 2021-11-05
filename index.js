const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')

// const A = function A(req, res, next) {
//   console.log('A 开始')
//   next()
//   console.log('A 结束')
// }
// const B = function B(req, res, next) {
//   console.log('B 开始')
//   next()
//   console.log('B 结束')
// }
// const C = function C(req, res, next) {
//   console.log('C 开始')
//   next()
//   console.log('C 结束')
// }

app.get('/', async (req, res, next) => {
  // res.set('Content-Type', 'application/json')
  // res.send('{ a: 2 }')
  const html = await fs.readFileSync(path.resolve(__dirname, './index.html'))
  // res.writeHead(200, { 'Content-Type': 'text/html' })
  res.set('Content-Type', 'text/html')
  res.send(Buffer.from(html))
})

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`)
})

// const fs = require('fs')
// setTimeout(() => {
//   // 新的事件循环的起点
//   console.log('1')
// }, 0)
// setImmediate(() => {
//   console.log('setImmediate 1')
// })
/// 将会在 poll 阶段执行
// fs.readFile('./index.html', { encoding: 'utf-8' }, (err, data) => {
//   if (err) throw err
//   console.log('read file success')
// })
/// 该部分将会在首次事件循环中执行
// Promise.resolve().then(() => {
//   console.log('poll callback')
// })
// 首次事件循环执行
// console.log('2')

// let exrcute = 0
// const fn = (nums) => {
//   exrcute++
//   return nums.map((x) => x * 2)
// }

// const barcher = (f) => {
//   // const fn = f
//   let nums = []
//   const p = new Promise((resolve) => setTimeout(() => resolve(f(nums)), 100))
//   return (arr) => {
//     let start = nums.length
//     nums = nums.concat(arr)
//     let end = nums.length
//     return p.then((ret) => ret.slice(start, end))
//   }
// }

// const batcherFN = barcher(fn)

// const main = async () => {
//   var [r1, r2, r3] = await Promise.all([
//     batcherFN([1, 2, 3]),
//     batcherFN([4, 5]),
//     batcherFN([7, 8, 9]),
//   ])
//   console.log(r1, r2, r3)

//   console.log(exrcute)
// }

// main()
