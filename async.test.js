import { fetchData } from "./async";

test('shoul return correct todo',()=>{
    fetchData(1).then(todo =>{
        expect(todo.id).toBe(1)
        expect(todo.userId).toBe(1)
        
    })
    
})
test('value data.complited is falsy',()=>{
    fetchData(2).then(todo =>{
        expect(todo.complited).toBeFalsy
    })
})
