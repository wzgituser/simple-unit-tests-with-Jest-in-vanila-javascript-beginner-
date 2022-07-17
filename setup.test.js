
let arr = ['animmal','zebra','cow','elephant','cat']
beforeAll(()=>{
    console.log("entry state array" + " " + arr);
})
beforeEach(()=>{
    console.log("BEFORE EACH")
    arr = ['animmal','zebra','cow','elephant','cat']
})
afterEach(()=>{
    console.log("AFTER EACH" + "=" + arr);
})


describe('animals array',()=>{
    it('should add animmal to array',()=>{
        arr.push('dog')
        expect(arr[arr.length - 1]).toBe('dog')
        expect(arr.length).toBe(6)
    })
    test('arr lenght -2 shild eql elephant',()=>{
        expect(arr[arr.length - 2]).toBe('elephant')
        expect(arr.length).toBe(5)
    })
    it('array should has expected value on the [0] lenght',()=>{
        arr.unshift('bat')
        expect(arr[0]).toBe('bat')
        expect(arr.length).toBe(6)
    })
    it('assertion of the arrays length',()=>{
        console.log(arr)
        expect(arr.length).toBe(5)
    })
    test('removeing arrays elements',()=>{
    arr.pop()
    arr.shift()
    console.log(arr)
    expect(arr[arr.length - 1]).toBe('elephant')
    expect(arr[0]).toBe('zebra')
    expect(arr.length).toBe(3)

    })
})