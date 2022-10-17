const Todos = require ('./todos')

const assert = require('assert').strict

describe('test de integracion de todo', function(){
    it ('the controller must return empty',()=>{
        const todos = new Todos()
        assert.strictEqual(todos.list().length, 0)
    })

    it('must be add another todo', ()=> {
        
        const todos = new Todos()

        todos.add('run code')
        assert.strictEqual(todos.list().length, 1)
        assert.deepStrictEqual(todos.list(), [{title: 'run code', complete: false}])
        
        todos.add('cook lasagna')
        assert.strictEqual(todos.list().length, 2)
        assert.deepStrictEqual(todos.list(), [
            {title: 'run code', complete: false},
            {title: 'cook lasagna', complete: false}
        ])
    })
    it ('must be todo complete', ()=>{
        const todos = new Todos()
        todos.add('run code')
        todos.add('cook lasagna')

        todos.complete('run code')
        assert.deepStrictEqual(todos.list(),[
            {title: 'run code', complete: true},
            {title: 'cook lasagna', complete: false}
        ])
    })
})

describe('check errors to complete todo', function(){

    it('must be error when no todo', ()=>{
        const todos = new Todos()

        assert.throws(()=>{
            todos.complete('one  task more')
        }, new Error ('there are not todo'))
    })

    it('must be error when todo not exist', () => {
        const todos = new Todos()
        todos.add('run code')

        assert.throws(() => {
            todos.complete('one  task more')
        }, new Error('todo not found'))
    })
})