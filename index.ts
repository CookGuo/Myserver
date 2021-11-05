type LongHand = {
  (a: number): number
}

type ShortHand = (a: number) => number

const a: LongHand = (a) => a + a

interface RunFun {
  (): string
}

const b: RunFun = () => {
  return 'a'
}

let foo: 'Hello'

// foo = 'a'

type CardinalDirection = 'North' | 'East' | 'South' | 'West'

// console.log()

// 用于创建字符串列表映射至 `K: V` 的函数
function strEnum<T extends string>(o: Array<T>): { [K in T]: K } {
  return o.reduce((res, key) => {
    res[key] = key
    return res
  }, Object.create(null))
}

// 创建 K: V
const Direction = strEnum(['North', 'South', 'East', 'West'])

// 创建一个类型
type Directions = keyof typeof Direction

// 简单的使用
let sample: Directions

// console.log(Directions)

type Tree<T> = {
  value: T
  left?: Tree<T>
  right?: Tree<T>
}

var d: Tree<string> = {
  value: '2',
  left: {
    value: '2',
  },
}

type FieldState = {
  value: string
}

// type FromState = {
//   isValid: string // Error: 不符合索引签名
//   [filedName: string]: FieldState
// }


const controller = new AbortController();
const { signal } = controller;
fetch('/foo', { signal }).then(...);

signal.onabort = () => { ... };
setTimeout(signal.onabort, xxx);
controller.abort();
