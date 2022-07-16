///bable//config//needed///
import { returnSomeVal } from "./index";
import {val} from './index'
import {intiger} from './index'
import {stringVal} from './index'
import {workWithParamethers} from './index'
import {arr} from './index'
import {fakeApi} from './index'



test('should get sum',()=>{
  let addition = returnSomeVal() + 1
  expect(addition).to
})

test('should return object value',()=>{
  const n = val()
   expect(n).toBeNull
   
})

test('value should be string',()=>{
 const n = val()
  expect(n).isNan
})
test('work with intiger',()=>{
  let d = intiger(2, 4)
  
  expect(d).toBe(6)
  expect(d).toBeGreaterThanOrEqual(6)
  expect(d).toBeLessThan(7)
  
})
test('string val should be eql',()=>{
  const valStri = stringVal()
  expect(valStri).toBe('bolocks')
})
test('decimals addition',()=>{
  const decimal = 0.1 + 0.2
  expect(decimal).toBeCloseTo(0.299999999999999)
})
test('reg exp toMatch method',()=>{
  const textVal = stringVal()
  expect(textVal).toMatch(/bolocks/)
})
test('text val to not to eql',()=>{
  const textByLiteralT = stringVal()
  expect(textByLiteralT).not.toBe('oneBolock')
})
test('obj exercise',()=>{
  const objObj = {
    name:'john'
  }
  expect(objObj.name).toEqual('john')
  expect(objObj).toEqual({"name":'john'})
  
})
test('expect to use all arguments',()=>{
  const someVal = workWithParamethers(1 ,2 , 3)
  expect(someVal).toBe(6)
  
})
test('assertion of the array "arr" values',()=>{
  expect(arr).toContain('frytki')
 
})
test('fetch should return json obj',()=>{
  const someVal = fakeApi()
  expect(someVal).toThrow(Error)
})