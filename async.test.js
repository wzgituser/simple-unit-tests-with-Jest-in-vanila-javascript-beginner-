import { fetchData } from "./async";

test('shoul return correct todo id no.',()=>{
    fetchData(1).then((data) =>{
        expect(data.id).toBe(1)  
    })  
})
test('value data.title is eql title.value',()=>{
    fetchData(1).then(data =>{
        expect(data.title).toEqual('iPhone 9')
    })  
})
///async///await///?////?////?///
test('assertion of the userId value', async ()=>{
    const req = await fetchData(1)
    expect(req.images).toBeDefine
    })


