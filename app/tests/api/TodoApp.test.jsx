var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
    // clear local storage for the fail test/badTodos
    beforeEach(() => {
        localStorage.removeItem('todos');
    });
    
    it('should exist', () => {
        expect(TodoAPI).toExist();
    });
    
    describe('setTodos', () => {
        it('should set valid todos array', () => {
            var todos = [{
                id: 23,
                text: 'Test',
                completed: false
            }];
            TodoAPI.setTodos(todos);
            
            var actualTodos = JSON.parse(localStorage.getItem('todos'));
            
            expect(actualTodos).toEqual(todos);
        });
        
        it('should not set invalid todos array', () => {
            var badTodos = {a: 'b'};
            
            TodoAPI.setTodos(badTodos);
            
            expect(localStorage.getItem('todos')).toBe(null);
        });
    });
    
    describe('getTodos', () => {
        it('should return an empty array for bad localStorage data', () => {
            var actualTodos = TodoAPI.getTodos();
            
            expect(actualTodos).toEqual([]);
        });
        
        it('should return todo if there is valid data in localStorage', () => {
            var todos = [{
                id: 23,
                text: 'Test',
                completed: false
            }];
            
            localStorage.setItem('todos', JSON.stringify(todos));
            
            var actualTodos = TodoAPI.getTodos();
            
            expect(actualTodos).toEqual(todos);
        });
    });
});