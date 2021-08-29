const Todos_List_Item = require("./Todos-List-Item")
// @ponicode
describe("onEditClick", () => {
    let inst

    beforeEach(() => {
        inst = new Todos_List_Item.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.onEditClick()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("onSaveClick", () => {
    let inst

    beforeEach(() => {
        inst = new Todos_List_Item.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.onSaveClick(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.onSaveClick(-100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.onSaveClick(-5.48)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.onSaveClick(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.onSaveClick(100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.onSaveClick(Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
